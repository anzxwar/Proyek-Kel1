#include <Adafruit_MPU6050.h>
#include <Adafruit_Sensor.h>
#include <Wire.h>
#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#include <Firebase_ESP_Client.h>
#include "addons/TokenHelper.h"
#include "addons/RTDBHelper.h"
Adafruit_MPU6050 mpu;

#define API_KEY "AIzaSyBHvf45coRDHnqMb3MhqE8E8vhYzPjEF2k"
#define DATABASE_URL "https://streamgyro-d4613-default-rtdb.asia-southeast1.firebasedatabase.app/"

FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

const char *ssid = "JTI-POLINEMA";//silakan disesuaikan sendiri
const char *password = "jtifast!";//silakan disesuaikan sendiri

const char *mqtt_server = "34.128.107.144";

WiFiClient espClient;
PubSubClient client(espClient);
unsigned long sendDataPrevMillis = 0;
// long now = millis();
// long lastMeasure = 0;
unsigned long previousMillis = 0;      // Menyimpan waktu terakhir data diterbitkan
const long interval = 100;            // Interval untuk menerbitkan data sensor
bool signupOK = false;

void setup_wifi()
{
  delay(10);
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("WiFi connected - ESP IP address: ");
  Serial.println(WiFi.localIP());
}

void reconnect()
{
  while (!client.connected())
  {
    Serial.print("Attempting MQTT connection...");
    if (client.connect("ESP8266Client"))
    {
      Serial.println("connected");
    }
    else
    {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      delay(5000);
    }
  }
}

void setup()
{
  Serial.begin(115200);
  Serial.println("Mqtt Node-RED");
  setup_wifi();
  client.setServer(mqtt_server, 1883);
  Serial.begin(115200);
  while (!Serial)
    delay(10); // will pause Zero, Leonardo, etc until serial console opens

  Serial.println("Adafruit MPU6050 test!");

  config.api_key = API_KEY;
  config.database_url = DATABASE_URL;
  if(Firebase.signUp(&config, &auth, "", "")){
    Serial.println("signUp OK");
    signupOK = true;
  }else{
    Serial.printf("%s\n", config.signer.signupError.message.c_str());
  }

  config.token_status_callback = tokenStatusCallback;
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);

  // Try to initialize!
  if (!mpu.begin()) {
    Serial.println("Failed to find MPU6050 chip");
    while (1) {
      delay(10);
    }
  }
  Serial.println("MPU6050 Found!");
  mpu.setGyroRange(MPU6050_RANGE_500_DEG);
  Serial.print("Gyro range set to: ");
  switch (mpu.getGyroRange()) {
  case MPU6050_RANGE_250_DEG:
    Serial.println("+- 250 deg/s");
    break;
  case MPU6050_RANGE_500_DEG:
    Serial.println("+- 500 deg/s");
    break;
  case MPU6050_RANGE_1000_DEG:
    Serial.println("+- 1000 deg/s");
    break;
  case MPU6050_RANGE_2000_DEG:
    Serial.println("+- 2000 deg/s");
    break;
  }

  mpu.setFilterBandwidth(MPU6050_BAND_21_HZ);
  Serial.print("Filter bandwidth set to: ");
  switch (mpu.getFilterBandwidth()) {
  case MPU6050_BAND_260_HZ:
    Serial.println("260 Hz");
    break;
  case MPU6050_BAND_184_HZ:
    Serial.println("184 Hz");
    break;
  case MPU6050_BAND_94_HZ:
    Serial.println("94 Hz");
    break;
  case MPU6050_BAND_44_HZ:
    Serial.println("44 Hz");
    break;
  case MPU6050_BAND_21_HZ:
    Serial.println("21 Hz");
    break;
  case MPU6050_BAND_10_HZ:
    Serial.println("10 Hz");
    break;
  case MPU6050_BAND_5_HZ:
    Serial.println("5 Hz");
    break;
  }

  Serial.println("");
  delay(100);
}

void loop() {
 if (!client.connected())
  {
    reconnect();
  }
  if (!client.loop())
  {
    client.connect("ESP8266Client");
  }
  // now = millis();
  // if (now - lastMeasure > 5000)
  // {
  //   lastMeasure = now;
  // /* Get new sensor events with the readings */
  unsigned long currentMillis = millis();
  if (currentMillis - previousMillis >= interval) {  // Memeriksa apakah interval waktu telah berlalu
    previousMillis = currentMillis;

    sensors_event_t a, g, temp;
    mpu.getEvent(&a, &g, &temp);

   if(Firebase.ready() && signupOK && (millis() - sendDataPrevMillis > 100 || sendDataPrevMillis == 0)){
      sendDataPrevMillis = millis();

      sensors_event_t a, g, temp;
      mpu.getEvent(&a, &g, &temp);
      if (Firebase.RTDB.setFloat(&fbdo, "Sensor/gyroX", g.gyro.x)){
        Serial.println(); Serial.print(g.gyro.x);
        Serial.println("(" + fbdo.dataType() +")");
      } else {
        Serial.println("FAILED:" + fbdo.errorReason());
      }

      if (Firebase.RTDB.setFloat(&fbdo, "Sensor/gyroY", g.gyro.y)){
        Serial.println(); Serial.print(g.gyro.y);
        Serial.println("(" + fbdo.dataType() +")");
      } else {
        Serial.println("FAILED:" + fbdo.errorReason());
      }

      if (Firebase.RTDB.setFloat(&fbdo, "Sensor/gyroZ", g.gyro.z)){
        Serial.println(); Serial.print(g.gyro.z);
        Serial.println("(" + fbdo.dataType() +")");
      } else {
        Serial.println("FAILED:" + fbdo.errorReason());
      }

      String sensorData =  String(g.gyro.x) + "," + String(g.gyro.y) + "," + String(g.gyro.z);
      Serial.println("sending packet");
      client.publish("esp32/sensors", sensorData.c_str());
    }
  }
}