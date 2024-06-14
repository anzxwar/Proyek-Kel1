#include <Adafruit_MPU6050.h>
#include <Adafruit_Sensor.h>
#include <Wire.h>
#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#define buzzer D0

Adafruit_MPU6050 mpu;

const char *ssid = "JTI-POLINEMA";//silakan disesuaikan sendiri
const char *password = "jtifast!";//silakan disesuaikan sendiri

const char *mqtt_server = "34.128.107.144";

WiFiClient espClient;
PubSubClient client(espClient);
// long now = millis();
// long lastMeasure = 0;
unsigned long previousMillis = 0;      // Menyimpan waktu terakhir data diterbitkan
const long interval = 100;            // Interval untuk menerbitkan data sensor


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
  setup_wifi();
  client.setServer(mqtt_server, 1883);
  pinMode(buzzer, OUTPUT);
  while (!Serial)
    delay(10); // will pause Zero, Leonardo, etc until serial console opens

  Serial.println("Adafruit MPU6050 test!");

  // Try to initialize!
  if (!mpu.begin()) {
    Serial.println("Failed to find MPU6050 chip");
    while (1) {
      delay(10);
    }
  }
  Serial.println("MPU6050 Found!");
  
  client.setCallback(callback);
  Serial.println("");
  delay(100);
}

void callback(char* topic, byte* payload, unsigned int length) {
  digitalWrite(buzzer, HIGH);
  String message;
  for (int i = 0; i < length; i++) {
    message += (char)payload[i];
  }
  
  // Check if the message contains the word "fall"
  if (message.indexOf("fall") != -1) {
    digitalWrite(buzzer, LOW);  // Turn the buzzer on
    delay(5000);                    // Keep the buzzer on for 1 second
    digitalWrite(buzzer, HIGH);   // Turn the buzzer off
  }
  digitalWrite(buzzer, HIGH);
  message ="";
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
 
    String sensorData =  String(g.gyro.x) + "," + String(g.gyro.y) + "," + String(g.gyro.z);
    Serial.println("sending packet");
    client.publish("esp32/sensors", sensorData.c_str());
  }
  client.subscribe("esp32/result");
}