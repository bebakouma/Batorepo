
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  {
    name: "Aug",
    pv: 0,
    amt: 0
  },
  {
    name: "Sep",
    pv: 12,
    amt: 25
  },
  {
    name: "Oct",
    pv: 25,
    amt: 50
  },
  {
    name: "Nov",
    pv: 50,
    amt: 75
  },
  {
    name: "Dec",
    pv: 35,
    amt: 75
  },
  {
    name: "Jan",
    pv: 40,
    amt: 75
  },
  {
    name: "Feb",
    pv: 100,
    amt: 100
  }
];

export default function Chart() {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="pv" fill="#33BDE9" />
    </BarChart>
  );
}
