import React, { useState } from "react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import { red } from '@mui/material/colors';
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

        
      <Box sx={{ height:"8%", display: "flex",
          flexDirection: "row"}} >
      <Typography variant="body 2" sx={{ flexGrow: 1 }}>HEART-RESP RATE values</Typography>

<IconButton 
          color="secondary"
          onClick={props.handleHeartRespRate}
          size="small">
          <ClearIcon fontSize="small" sx={{ color: red[700] }} />
        </IconButton>

        </Box>

          <ResponsiveContainer height="92%">
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
