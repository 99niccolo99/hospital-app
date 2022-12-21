import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { cyan } from "@mui/material/colors";
import UserData from "./UserData";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

function LateralBar(props) {

/*
  Alcuni codici fiscali pazienti:

TRRVLA91M13Z404A
MMRMRA89L29Z404B
CNNCLD87A53Z404C     */





  return (
    <React.Fragment>


      {props.lateralBar && (
        <Box
          bgcolor={cyan[50]}
          sx={{
            display: "flex",
            flexDirection: "column",
            borderRight: 1,
            borderBottom: 1,
            borderColor: 'grey.500',
          }}
        >


<IconButton
  color="primary"
  onClick={props.onSpaceFree}
  sx={{ml:16,height:50, width:50}}
  size="large">
        <KeyboardArrowLeftIcon fontSize="large"/>
      </IconButton>


        
   

          <UserData
            avatar={props.avatar}
            name={props.name}
            surname={props.surname}
            gender={props.gender}
            birthDate={props.birthDate}
          ></UserData>
        </Box>
      )}
    </React.Fragment>
  );
}

export default LateralBar;
