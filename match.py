import os
import json
import numpy as np
from tensorflow.keras.models import load_model
import time
import paho.mqtt.publish as publish

broker_address = "34.128.107.144"
port = 1883
topic = "esp32/result"

# Fungsi untuk memproses JSON menjadi array fitur
def process_json(data_json):
    data = json.loads(data_json)
    gyro_x = [float(item["x"]) for item in data]
    gyro_y = [float(item["y"]) for item in data]
    gyro_z = [float(item["z"]) for item in data]
    
    # Gabungkan data gyroscope dan accelerometer menjadi satu array
    combined_data = np.array([gyro_x, gyro_y, gyro_z]).T
    return combined_data

# Muat model AI yang telah dilatih menggunakan Keras tanpa optimizer
model_path = 'absolutefall.h5'
model = load_model(model_path, compile=False)

# Label kelas sesuai dengan model
class_labels = [
    "Stand for 30 seconds",
    "Walk normally and turn for 4m",
    "Forward fall when trying to sit down",
    "Backward fall when trying to sit down",
    "Lateral fall when trying to sit down"
]

def predict_and_save():
    # Muat data JSON dari file
    with open('sensordata.json', 'r') as f:
        data_json = f.read()

    # Proses JSON untuk mendapatkan data gyroscope dan accelerometer
    sensor_data = process_json(data_json)

    # Pastikan hanya melakukan prediksi jika ada tepat 600 objek
    n_timesteps = 25
    n_features = 3

    if sensor_data.shape[0] < n_timesteps:
        print(f'Data tidak cukup: hanya {sensor_data.shape[0]} objek, menunggu sampai ada 25 objek.')
        return
    elif sensor_data.shape[0] > n_timesteps:
        # Trim data jika lebih dari 600 titik
        sensor_data = sensor_data[:n_timesteps, :]

    # Pertukarkan sumbu untuk menyesuaikan dengan bentuk input model (3, 25)
    sensor_data = np.swapaxes(sensor_data, 0, 1)

    # Ubah bentuk input sesuai dengan yang diharapkan oleh model
    sensor_data_reshaped = sensor_data.reshape(1, n_features, n_timesteps, 1)

    prediction = model.predict(sensor_data_reshaped)

    # Tentukan kelas dengan probabilitas tertinggi
    predicted_class = np.argmax(prediction)
    status = class_labels[predicted_class]

    # Simpan hasil prediksi ke file hasilprediksi.json
    with open('hasilprediksi.json', 'w') as outfile:
        json.dump({'prediction': status}, outfile)

    print(f'Hasil Prediksi: {status}')
    publish.single(topic, status, hostname=broker_address, port=port)
    print(prediction)
    print(prediction.shape)
    
# Jalankan kode setiap 1 detik
while True:
    predict_and_save()
    time.sleep(3)

