import React, { useState } from "react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Tbw from "./Charts/Tbw";
import Ffm from "./Charts/Ffm";
import XcAndFmLevel from "./Charts/XcAndFmLevel";
import HeartRespRate from "./Charts/HeartRespRate";
import DataTable from "./DataTable";
import Box from "@mui/material/Box";
import { purple } from "@mui/material/colors";
import GridLayout from "../GridLayout";
import { cyan } from "@mui/material/colors";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Ccc from "../Ccc";
import ReactGridLayout from "react-grid-layout";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LateralBar from "./LateralBar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

const cyanTheme = createTheme({
  palette: {
    mode: "cyan",
    primary: {
      main: "#e0f7fa",
    },
  },
});

function FetchBox(props) {
  const [tbwFfm, setTbwFfm] = useState(false);
  const [patientTbwFfm, setPatientTbwFfm] = useState([]);

  const [xcAndFmLevel, setXcAndFmLevel] = useState(false);
  const [patientXcAndFmLevel, setPatientXcAndFmLevel] = useState([{}]);

  const [heartRespRate, setHeartRespRate] = useState(false);
  const [patientHeartRate, setPatientHeartRate] = useState([{}]);
  const [patientRespRate, setPatientRespRate] = useState([{}]);
  const [patientHeartRespRate, setPatientHeartRespRate] = useState([{}]);

  const [dataTable, setDataTable] = useState(false);
  const [patientExams, setPatientExams] = useState([{}]);

  const urlHealthData =
    "http://localhost:8080/hospital/api/complex/basic/TRRVLA91M13Z404A";

  //----------------------------------------------------------------
  const urlBalanceData =
    "http://localhost:8080/hospital/api/balance/TRRVLA91M13Z404A";

  const fetchTbwFfm = () => {
    let x = [{}];
    fetch(urlBalanceData, {
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
        for (const patient of data) {
          x.push({
            birthString: patient.examDate.slice(0, 9),
            birth: new Date(patient.examDate),
            tbw: patient.tbw.toFixed(3),
            ffm: patient.ffm.toFixed(3),
          });
        }

        x.sort((a, b) => a.birth - b.birth);

        setPatientTbwFfm(() => {
          return [...x];
        });
      });
  };

  function booleanCheckTbwFfm() {
    setTbwFfm(!tbwFfm);
  }

  const handleTbwFfmChange = (state) => {
    booleanCheckTbwFfm();
    fetchTbwFfm();
  };

  //-------------------------------------------------------

  const fetchXcAndFmLevel = () => {
    let x = [{}];
    fetch(urlBalanceData, {
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
        for (const patient of data) {
          x.push({
            birthString: patient.examDate.slice(0, 9),
            birth: new Date(patient.examDate),
            xc: patient.xc,
            fm: patient.fm.toFixed(3),
          });
        }

        x.sort((a, b) => a.birth - b.birth);

        setPatientXcAndFmLevel(() => {
          return [...x];
        });
      });
  };

  function booleanCheckXcAndFmLevel() {
    setXcAndFmLevel(!xcAndFmLevel);
  }

  const handleXcAndFmLevel = (state) => {
    booleanCheckXcAndFmLevel();
    fetchXcAndFmLevel();
  };

  //----------------------------------------------------------------

  //fetch Heart rate
  const fetchHeartRate = () => {
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
          if (patient.codeText.localeCompare("Heart rate") == 0)
            x.push({
              birthString: patient.created.slice(0, 9),
              birth: new Date(patient.created),
              codeText: patient.codeText,
              heartRate: patient.valueNum,
            });
        }

        x.sort((a, b) => a.birth - b.birth);

        setPatientHeartRate(() => {
          return [...x];
        });
      });
  };

  //fetch Resp rate
  const fetchRespRate = () => {
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
          if (patient.codeText.localeCompare("Resp rate") == 0)
            x.push({
              birthString: patient.created.slice(0, 9),
              birth: new Date(patient.created),
              codeText: patient.codeText,
              respRate: patient.valueNum,
            });
        }

        x.sort((a, b) => a.birth - b.birth);

        setPatientRespRate(() => {
          return [...x];
        });
      });
  };

  const fetchAllHeartRespRate = () => {
    let x = [];

    fetchRespRate();
    fetchHeartRate();

    for (const p1 of patientHeartRate) {
      for (const p2 of patientRespRate) {
        if (p1.birthString.localeCompare(p2.birthString) == 0)
          x.push({
            birthString: p1.birthString,
            birth: p1.birth,
            codeText1: p1.codeText,
            codeText2: p2.codeText,
            heartRate: p1.heartRate,
            respRate: p2.respRate,
          });
      }
    }

    setPatientHeartRespRate(() => {
      return [...x];
    });
  };

  function booleanCheckHeartRespRate() {
    setHeartRespRate(!heartRespRate);
  }

  const handleHeartRespRate = (state) => {
    booleanCheckHeartRespRate();
    fetchAllHeartRespRate();
  };

  //----------------------------------------------------------------

  const fetchBalanceData = () => {
    let x = [];
    fetch(urlBalanceData, {
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
        for (const patient of data) {
          x.push({
            birthString: patient.examDate.slice(0, 9),
            birth: new Date(patient.examDate),
            height: patient.height,
            weight: patient.weight,
            //toFixed per rappresentare solo i 3 numeri subito dopo la virgola
            pha: patient.pha.toFixed(3),
            rz: patient.rz,
            z: patient.z.toFixed(3),
            tbw: patient.tbw.toFixed(3),
          });
        }

        x.sort((a, b) => a.birth - b.birth);

        setPatientExams(() => {
          return [...x];
        });
      });
  };

  function booleanCheckDataTable() {
    setDataTable(!dataTable);
  }

  const handleDataTableChange = (state) => {
    booleanCheckDataTable();
    fetchBalanceData();
  };

  //----------------------------------------------------------------

  //barra laterale che sparisce e ricompare premendo il bottone apposito
  const [lateralBar, setLateralBar] = useState(true);

  const onSpaceFree = () => {
    setLateralBar(false);
  };

  const onSpaceFull = () => {
    setLateralBar(true);
  };

  //----------------------------------------------------------------------

  //Menù

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //----------------------------------------------------------------------
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "100vh",
          mt: 8,
        }}
      >
        <LateralBar
          lateralBar={lateralBar}
          onSpaceFree={onSpaceFree}
        ></LateralBar>

        <AppBar theme={cyanTheme} sx={{ height: "10%" }}>
          <Toolbar>
            {!lateralBar && (
              <IconButton
                color="primary"
                sx={{ mr: 1, height: 50, width: 50 }}
                onClick={onSpaceFull}
                size="large"
              >
                <KeyboardArrowRightIcon fontSize="large" />
              </IconButton>
            )}

            <Button onClick={handleClick} color="primary">Dashboard</Button>

            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>

            
              <MenuItem onClick={handleTbwFfmChange}>
              TBW AND FFM
                <Checkbox checked={tbwFfm} onChange={handleTbwFfmChange} />
              </MenuItem>
            
              <MenuItem onClick={handleXcAndFmLevel}>
              XC AND FM
                <Checkbox checked={xcAndFmLevel} onChange={handleXcAndFmLevel} />
              </MenuItem>

              <MenuItem onClick={handleHeartRespRate}>
              HEART AND RESP RATE
                <Checkbox checked={heartRespRate} onChange={handleHeartRespRate}  />
              </MenuItem>

              <MenuItem onClick={handleDataTableChange}>
              BALANCE DATA TABLE
                <Checkbox checked={dataTable} onChange={handleDataTableChange}  />
              </MenuItem>


            </Menu>
          </Toolbar>
        </AppBar>

        <Ccc>
          {tbwFfm && (
            <Box
              key="1"
              data-grid={{ w: 2, h: 3, x: 0, y: 0, minW: 2, minH: 3 }}
            >
              <Tbw 
              handleTbwFfmChange={handleTbwFfmChange}
              patientTbwFfm={patientTbwFfm}></Tbw>
            </Box>
          )}

          {tbwFfm && (
            <Box
              key="5"
              data-grid={{ w: 2, h: 3, x: 2, y: 0, minW: 2, minH: 3 }}
            >
              <Ffm
                handleTbwFfmChange={handleTbwFfmChange}
                patientTbwFfm1={patientTbwFfm}
              ></Ffm>
            </Box>
          )}

          {xcAndFmLevel && (
            <Box
              key="2"
              data-grid={{ w: 2, h: 3, x: 2, y: 0, minW: 2, minH: 3 }}
            >
              <XcAndFmLevel
              handleXcAndFmLevel={handleXcAndFmLevel}
                patientXcAndFmLevel={patientXcAndFmLevel}
              ></XcAndFmLevel>
            </Box>
          )}

          {heartRespRate && (
            <Box
              key="3"
              data-grid={{ w: 2, h: 3, x: 4, y: 0, minW: 2, minH: 3 }}
            >
              <HeartRespRate
                handleHeartRespRate={handleHeartRespRate}
                patientHeartRespRate={patientHeartRespRate}
              ></HeartRespRate>
            </Box>
          )}

          {dataTable && (
            <Box
              key="4"
              data-grid={{ w: 2, h: 3, x: 6, y: 0, minW: 2, minH: 3 }}
            >
              <DataTable
              handleDataTableChange={handleDataTableChange}
                patientExams={patientExams.length}
                patientExams1={patientExams}
              ></DataTable>
            </Box>
          )}
        </Ccc>
      </Box>
    </React.Fragment>
  );
}

export default FetchBox;

/*

        <Charts
          tbwFfm={tbwFfm}
          patientTbwFfm={patientTbwFfm}
          patientTbwFfm1={patientTbwFfm}
          xcAndFmLevel={xcAndFmLevel}
          patientXcAndFmLevel={patientXcAndFmLevel}
          heartRespRate={heartRespRate}
          patientHeartRespRate={patientHeartRespRate}
          dataTable={dataTable}
          patientExams={patientExams.length}
          patientExams1={patientExams}
        ></Charts>

        */