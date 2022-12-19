import React, { useState } from "react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

//  total body water    and   fat free mass (massa magra)
function Tbw(props) {
  return (
    <React.Fragment>
      
  
    
              <ResponsiveContainer >
                <AreaChart
                  data={props.patientTbwFfm}
                  syncId="anyId"
          
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="birthString" />
                  <YAxis type="number" domain={[20, 70]} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="tbw"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                </AreaChart>
                </ResponsiveContainer>
             
    </React.Fragment>
  );
}

export default Tbw;
