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

  const [patientPersonalData, setPatientPersonalData] = useState({});
  const [searchForm, setSearchForm] = useState('');

  const urlPersonalData =
    "http://localhost:8080/hospital/api/patients/";

  const fetchPersonalData = () => {

    const fiscalCode = searchForm; 

    let x = {};

    fetch(urlPersonalData+fiscalCode , {
      method: "GET",
      mode: "cors",
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        
          x = {
            name: data.givenName,
            gender: data.gender,
            birthDate: data.birthDate,
            surname: data.familyName,
          };
        

        setPatientPersonalData(() => {
          return {...x};
        });
      });
  };


  const onSearch = (event) => {
    setSearchForm(event.target.value);
  };


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


        <Button
          variant="outlined"
          sx={{ mt: 2, ml: 2 ,width:20, height:30 }}
          onClick={fetchPersonalData}
        >
          Search
        </Button>
        <TextField
          id="filled-basic"
          label="fiscal code"
          type="Filled"
          variant="filled"
          size="small"
          sx={{ml:2, mb:4, mt:3, width:150, height:30 }}
          onChange={onSearch}
        />
   

          <UserData
            name={patientPersonalData.name}
            surname={patientPersonalData.surname}
            gender={patientPersonalData.gender}
            birthDate={patientPersonalData.birthDate}
          ></UserData>
        </Box>
      )}
    </React.Fragment>
  );
}

export default LateralBar;
