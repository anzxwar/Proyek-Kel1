#define sensorLDR D2
#define buzzer D0
int nilaiSensor;
void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial.println("Contoh Penggunaan Sensor LDR");
  pinMode(buzzer, OUTPUT);
  delay(3000);
}

void loop() {
  // put your main code here, to run repeatedly:
  nilaiSensor = digitalRead(sensorLDR);
  Serial.print("Nilai Sensor : ");
  Serial.println(nilaiSensor);
  delay(1000);
  if(nilaiSensor > 0){
    digitalWrite(buzzer, LOW);
  }else{
    digitalWrite(buzzer, HIGH);
  }
}