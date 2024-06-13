// GetData.js

"use client"
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
          if (data) {
            const formattedData = Object.keys(data).map(key => ({
              timestamp: data[key].timestamp,
              x: data[key].x,
              y: data[key].y,
              z: data[key].z
            }));
            setFirebaseData(formattedData.slice(-30)); // Get the last 30 entries
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
        backgroundColor: "#072ac8",
        borderColor: "#072ac8",
      },
      {
        label: "Y Value",
        data: firebaseData.map(entry => entry.y),
        fill: false,
        backgroundColor: "#ff5400",
        borderColor: "#ff5400",
      },
      {
        label: "Z Value",
        data: firebaseData.map(entry => entry.z),
        fill: false,
        backgroundColor: "#3e8914",
        borderColor: "#3e8914",
      }
    ]
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          min: 0, // Set the minimum value for the y-axis
          max: 100, // Set the maximum value for the y-axis
        }
      },
      x: {
        ticks: {
          maxTicksLimit: 20, // Limit the number of ticks on the x-axis
        }
      }
    }
  };

  return (
    <div>
      <h1>Firebase Data (Last 30 Entries)</h1>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
}
