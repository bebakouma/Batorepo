import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Page A",
    a: 4000,
    b: 2400,
    c: 4000,
    d: 2400,
    e: 4000,
    amt: 2400
  },
  {
    name: "Page B",
    a: 3000,
    b: 1398,
    c: 5000,
    d: 1398,
    e: 3000,
    amt: 2210
  },
  {
    name: "Page C",
    a: 2000,
    b: 6800,
    c: 9000,
    d: 9800,
    e: 2000,
    amt: 2290
  },
  {
    name: "Page D",
    a: 1000,
    b: 5800,
    c: 8000,
    d: 9800,
    e: 2000,
    amt: 2000
  },
  {
    name: "Page E",
    a: 5000,
    b: 4800,
    c: 3000,
    d: 9800,
    e: 2000,
    amt: 2181
  },
  {
    name: "Page F",
    a: 800,
    b: 9800,
    c: 1000,
    d: 9800,
    e: 2000,
    amt: 2500
  },
  {
    name: "Page G",
    a: 2000,
    b: 9800,
    c: 2000,
    d: 9800,
    e: 2000,
    amt: 2100
  }
];

export default function App() {
  return (
    <LineChart width={320} height={280} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="a"
        stroke="#5CCAED"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="b" stroke="#3CC13B" />
      <Line type="monotone" dataKey="c" stroke="#0A85C7" />
      <Line type="monotone" dataKey="d" stroke="#F86FAA" />
      <Line type="monotone" dataKey="e" stroke="#FFE093" />
    </LineChart>
  );
}