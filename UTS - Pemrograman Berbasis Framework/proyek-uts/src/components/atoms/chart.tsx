"use client"

import React from 'react';
// import { Line } from 'react-chartjs-2';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "Jul",
    jatuh: 5100,
    normal: 2400,
  },
  {
    name: "Aug",
    jatuh: 4500,
    normal: 2400,
  },
  {
    name: "Sept",
    jatuh: 2300,
    normal: 2400,
  },
  {
    name: "Oct",
    jatuh: 3500,
    normal: 2400,
  },
  {
    name: "Nov",
    jatuh: 4000,
    normal: 2120,
  },
  {
    name: "Des",
    jatuh: 4000,
    normal: 2300,
  },
  {
    name: "Jan",
    jatuh: 4000,
    normal: 2450,
  },
];

const ChartExample = () => {
  return (
    <div className="h-80 mt-1 px-10 rounded-10 pb-2">
      <h2 className="text-blue-700 text-lg font-bold">History Fall Detection</h2>
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
          <Legend />
          <Line type="monotone" dataKey="jatuh" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="normal" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartExample;