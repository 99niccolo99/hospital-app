import UserData from "./components/UserData";
import LateralBar from "./components/LateralBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import { purple } from "@mui/material/colors";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import XcAndFmLevel from "./components/Charts/XcAndFmLevel";
import TbwFfm from "./components/Charts/Tbw";
import BunPotCal from "./components/Charts/BunPotCal";
import DataTable from "./components/DataTable";
import HeartRespRate from "./components/Charts/HeartRespRate";
import ReactDOM from "react-dom";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormHelperText from "@mui/material/FormHelperText";
import FetchBox from "./components/FetchBox";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "./styles.css";
import GridLayout from "./GridLayout";
import Ccc from "./Ccc"
import Bbb from "./Bbb"




function App() {
  const a = true;

  const [patientExams, setPatientExams] = useState([{}]);

  const [heartRespRate, setHeartRespRate] = useState(false);
  const [tbwFfm, setTbwFfm] = useState(false);
  const [xcAndFmLevel, setXcAndFmLevel] = useState(false);
  const [dataTable, setDataTable] = useState(false);

  const [date, setDate] = useState("9999");
  const [gender, setGender] = useState("gener");
  const [familyName, setFamilyName] = useState("famili");
  const [patients, setPatients] = useState("aa");
  const [img, setImg] = useState();
  const urlPersonalData =
    "http://localhost:8080/hospital/api/patients/TRRVLA91M13Z404A";
  const urlBalanceData =
    "http://localhost:8080/hospital/api/balance/TRRVLA91M13Z404A";
  const urlHealthData =
    "http://localhost:8080/hospital/api/complex/basic/TRRVLA91M13Z404A";

  const fetchHealthData = () => {
    let x = [];

    fetch(urlHealthData, {
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
        for (const patient of data.observations) {
          if (patient.codeText.localeCompare("BUN Bld-mCnc") == 0)
            x.push({
              birthString: patient.created.slice(0, 9),
              birth: new Date(patient.created),
              codeText: patient.codeText,
              bloodBun: patient.valueNum,
            });
        }
        x.sort((a, b) => a.birth - b.birth);

        setPatientExams(() => {
          return [...x];
        });
      });
  };


  /*
  <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "100vh",
          mt: 9,
        }}
      >
        <LateralBar></LateralBar>

        <FetchBox></FetchBox>
      </Box>
      */

  return (
    <React.Fragment>

 

        <FetchBox></FetchBox>
     
      
    </React.Fragment>
  );
}

export default App;
