import json
import csv

# Correct path to your JSON file
file_path = 'D:\\SEMESTER 6\\PUSH\\Proyek-Kel1\\big-data\\stream-gyro-result.json'

# Load your JSON data from a file
with open(file_path, 'r') as file:
    data = json.load(file)

# Transform the data to remove the unique keys and keep only the required fields, formatting x, y, z to 2 decimal places
transformed_data = [
    {
        'timestamp': entry['timestamp'],
        'x': round(entry['x'], 2),
        'y': round(entry['y'], 2),
        'z': round(entry['z'], 2)
    }
    for entry in data.values()
]

# Save the transformed data to a CSV file
output_path = 'D:\\SEMESTER 6\\PUSH\\Proyek-Kel1\\big-data\\transformed_data.csv'
with open(output_path, 'w', newline='') as file:
    writer = csv.DictWriter(file, fieldnames=['timestamp', 'x', 'y', 'z'])
    writer.writeheader()
    writer.writerows(transformed_data)

print("Transformation complete. Check the transformed_data.csv file.")
