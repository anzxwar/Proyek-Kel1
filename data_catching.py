import json
import os
import paho.mqtt.client as mqtt
from datetime import datetime

# Configuration for MQTT
broker_address = "34.128.67.15"
port = 1883
topic = "esp32/sensors"

# Initialize or open data file
if not os.path.exists('sensordata.json'):
    with open('sensordata.json', 'w') as file:
        json.dump([], file)

# Function to load data from JSON file
def load_data():
    if os.path.exists('sensordata.json'):
        with open('sensordata.json', 'r') as json_file:
            # Read the file contents
            data = json_file.read()
            # If the file is not empty, load the JSON
            if data:
                return json.loads(data)
            else:
                return []
    else:
        return []

# Buffer for sensor data
sensordata = load_data()

# MQTT callback functions
def on_connect(client, userdata, flags, rc):
    print("Connected with result code " + str(rc))
    client.subscribe(topic)

def on_message(client, userdata, msg):
    print("Message received-> " + msg.topic + " " + str(msg.payload))
    try:
        data_str = msg.payload.decode('utf-8')
        data_parts = data_str.split(',')

        # Validate that the data_parts have exactly 8 elements
        if len(data_parts) == 4:
            timestamp = datetime.now().isoformat()
            gyro_values = [float(i) for i in data_parts[1:4]]
        
            sensor_entry = {
                "timestamp": timestamp,
                "x": gyro_values[0],
                "y": gyro_values[1],
                "z": gyro_values[2]
            }

            # Append the new sensor entry
            sensordata.append(sensor_entry)

            # Maintain only the last 30 entries
            if len(sensordata) > 25:
                sensordata.pop(0)

            # Overwrite the JSON file with the updated sensor data
            with open('sensordata.json', 'w') as json_file:
                json.dump(sensordata, json_file, indent=4)
        else:
            print("Invalid data format received: ", data_parts)
    except Exception as e:
        print("Error processing message: ", e)

# Setup MQTT client
client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message
client.connect(broker_address, port=port)
client.loop_forever()