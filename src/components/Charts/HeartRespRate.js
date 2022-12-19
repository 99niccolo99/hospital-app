import React, { useState } from "react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function HeartRespRate(props) {


  return (
    
        <React.Fragment>
          <ResponsiveContainer>
      <BarChart
        data={props.patientHeartRespRate}

      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="birthString" />
        <YAxis
          yAxisId="left"
          orientation="left"
          stroke="#8884d8"
          domain={[0, 140]}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke="#82ca9d"
          domain={[0, 45]}
        />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="heartRate" fill="#8884d8" />
        <Bar yAxisId="right" dataKey="respRate" fill="#82ca9d" />
      </BarChart>
      </ResponsiveContainer>
      </React.Fragment>

  );
}
