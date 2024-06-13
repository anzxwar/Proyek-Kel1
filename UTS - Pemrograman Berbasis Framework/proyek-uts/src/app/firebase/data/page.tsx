"use client";

import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { ref, onValue, off } from "firebase/database";
import { Line } from "react-chartjs-2";
import 'chart.js/auto';

export default function GetData() {
  const [firebaseData, setFirebaseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataRef = ref(db, "sensors");
        onValue(dataRef, (snapshot) => {
          const data = snapshot.val();
          // Assuming data is an object where keys are unique IDs and values are the data entries
          if (data) {
            const formattedData = Object.keys(data).map(key => ({
              timestamp: data[key].timestamp,
              x: data[key].x,
              y: data[key].y,
              z: data[key].z
            }));
            setFirebaseData(formattedData);
          } else {
            setFirebaseData([]);
          }
          setLoading(false);
        });
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      const dataRef = ref(db, "sensors");
      off(dataRef);
    };
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const chartData = {
    labels: firebaseData.map(entry => new Date(entry.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: "X Value",
        data: firebaseData.map(entry => entry.x),
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Y Value",
        data: firebaseData.map(entry => entry.y),
        fill: false,
        backgroundColor: "rgba(192,75,192,0.4)",
        borderColor: "rgba(192,75,192,1)",
      },
      {
        label: "Z Value",
        data: firebaseData.map(entry => entry.z),
        fill: false,
        backgroundColor: "rgba(192,192,75,0.4)",
        borderColor: "rgba(192,192,75,1)",
      }
    ]
  };

  return (
    <div>
      <h1>Firebase Data</h1>
      <Line data={chartData} />
    </div>
  );
}
