"use client"
import styles from './chart.module.css'

import React from 'react';
// import { Line } from 'react-chartjs-2';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "Sun",
    visit: 5100,
    click: 2400,
  },
  {
    name: "Mon",
    visit: 4500,
    click: 2400,
  },
  {
    name: "Tue",
    visit: 2300,
    click: 2400,
  },
  {
    name: "Wed",
    visit: 3500,
    click: 2400,
  },
  {
    name: "Thur",
    visit: 4000,
    click: 2120,
  },
  {
    name: "Fri",
    visit: 4000,
    click: 2300,
  },
  {
    name: "Sat",
    visit: 4000,
    click: 2450,
  },
]

const ChartExample = () => {
  return (
    <div>
      <h2>Sales Chart</h2>
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
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartExample;
