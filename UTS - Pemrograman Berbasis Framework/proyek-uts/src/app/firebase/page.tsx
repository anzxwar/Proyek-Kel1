"use client"

import { useEffect, useState } from "react";
import GetData from "@/app/firebase/data/page"; // Sesuaikan path dengan struktur proyek Anda
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'; // Import Chart.js components

export default function Dashboard() {
  const [firebaseData, setFirebaseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetData(); // Panggil fungsi GetData untuk mendapatkan data Firebase
        setFirebaseData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Data format for Chart.js
  const chartData = firebaseData.map(dataPoint => ({
    name: dataPoint.timestamp, // Ganti dengan kunci yang sesuai dari data Firebase
    fall: dataPoint.fall, // Ganti dengan kunci yang sesuai dari data Firebase
    normal: dataPoint.normal // Ganti dengan kunci yang sesuai dari data Firebase
  }));

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Firebase Data</h2>
      <ChartExample data={chartData} /> // Gunakan data yang telah diubah formatnya untuk Chart.js
    </div>
  );
}

const ChartExample = ({ data }) => {
  return (
    <div className="h-80 px-10 rounded-10 pb-2" style={{ borderTop: '2px solid black', borderBottom: '2px solid black', paddingTop: '30px', paddingBottom: '30px' }}>
      <h2 style={{color : "#03045e"}} className="text-lg font-bold">History Fall Detection</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="fall" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="normal" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
