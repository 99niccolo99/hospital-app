import React, { useState } from "react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function XcAndFmLevel(props) {

  return (
      
        <React.Fragment>
 
        <ResponsiveContainer>
        <LineChart
          data={props.patientXcAndFmLevel}

        >
          <CartesianGrid strokeDasharray="6 3" />
          <XAxis dataKey="birthString" />
          <YAxis domain={[0, 80]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="xc"
            stroke="#8884d8"
            fill="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="fm"
            stroke="#82ca9d"
            fill="#82ca9d"
            activeDot={{ r: 8 }}
          />
        </LineChart>
        </ResponsiveContainer>
        </React.Fragment>
  
  );
}

export default XcAndFmLevel;
