import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


//Bun(azoto ureico nel sangue) Pot(potassio nel sangue) Cal(calcio nel sangue)
export default function BunPotCal(props) {
  return (
    <BarChart
      width={500}
      height={300}
      data={props.dataBunPotCal}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="birthString"/>
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="bloodBun" stackId="a" fill="#8884d8" />
      <Bar dataKey="bloodCal" stackId="a" fill="#82ca9d" />
      <Bar dataKey="bloodPot" fill="#ffc658" />
    </BarChart>
  );
}
