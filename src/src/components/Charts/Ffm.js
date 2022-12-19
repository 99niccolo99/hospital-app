import React, { useState } from "react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { red } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import IconButton from "@mui/material/IconButton";
import ClearIcon from '@mui/icons-material/Clear';


//  total body water    and   fat free mass (massa magra)
function Ffm(props) {



  return (
    <React.Fragment>

<Box sx={{ height:"8%", display: "flex",
          flexDirection: "row"}} >
      <Typography variant="body 2" sx={{ flexGrow: 1 }}>FFM values</Typography>

<IconButton 
          color="secondary"
          onClick={props.handleTbwFfmChange}
          size="small">
          <ClearIcon fontSize="small" sx={{ color: red[700] }} />
        </IconButton>

        </Box>


                <ResponsiveContainer height="92%">
                <AreaChart
                  data={props.patientTbwFfm1}
                  syncId="anyId"
               
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="birthString" />
                  <YAxis type="number" domain={[40, 90]}/>
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="ffm"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                  />
                </AreaChart>
              </ResponsiveContainer>
             
         
        
      
    </React.Fragment>
  );
}

export default Ffm;

