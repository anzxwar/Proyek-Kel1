"use client"

import React from 'react';
// import { Line } from 'react-chartjs-2';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "Jul",
    fall: 5100,
    normal: 2400,
  },
  {
    name: "Aug",
    fall: 4500,
    normal: 2400,
  },
  {
    name: "Sept",
    fall: 2300,
    normal: 2400,
  },
  {
    name: "Oct",
    fall: 3500,
    normal: 2400,
  },
  {
    name: "Nov",
    fall: 4000,
    normal: 2120,
  },
  {
    name: "Des",
    fall: 4000,
    normal: 2300,
  },
  {
    name: "Jan",
    fall: 4000,
    normal: 2450,
  },
];

const ChartExample = () => {
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
          <Legend />
          <Line type="monotone" dataKey="fall" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="normal" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};


export default ChartExample;
