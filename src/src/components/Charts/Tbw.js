import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import { red } from '@mui/material/colors';
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
      

      <Box sx={{ height:"8%", display: "flex",
          flexDirection: "row"}} >
      <Typography variant="body 2" sx={{ flexGrow: 1 }}>TBW values</Typography>

<IconButton 
          color="secondary"
          onClick={props.handleTbwFfmChange}
          size="small">
          <ClearIcon fontSize="small" sx={{ color: red[700] }} />
        </IconButton>

        </Box>


                <ResponsiveContainer height="92%">
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
