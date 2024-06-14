import json

# Correct path to your JSON file
file_path = 'D:\\SEMESTER 6\\PUSH\\Proyek-Kel1\\big-data\\stream-gyro-result.json'

# Load your JSON data from a file
with open(file_path, 'r') as file:
    data = json.load(file)

# Transform the data to remove the unique keys and keep only the required fields
transformed_data = [{'timestamp': entry['timestamp'], 'x': entry['x'], 'y': entry['y'], 'z': entry['z']} for entry in data.values()]

# Save the transformed data to a newline-delimited JSON file
output_path = 'D:\\SEMESTER 6\\PUSH\\Proyek-Kel1\\big-data\\transformed_data.json'
with open(output_path, 'w') as file:
    for entry in transformed_data:
        json.dump(entry, file)
        file.write('\n')

print("Transformation complete. Check the transformed_data.json file.")
