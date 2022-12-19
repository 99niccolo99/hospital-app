import TbwFfm from "./Charts/Tbw";
import XcAndFmLevel from "./Charts/XcAndFmLevel";
import HeartRespRate from "./Charts/HeartRespRate";
import DataTable from "./DataTable";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";



function Charts(props) {
  return (
<React.Fragment>

          
        <TbwFfm
          tbwFfm={props.tbwFfm}
          patientTbwFfm={props.patientTbwFfm}
          patientTbwFfm1={props.patientTbwFfm1}
        ></TbwFfm>
        

      <XcAndFmLevel
        xcAndFmLevel={props.xcAndFmLevel}
        patientXcAndFmLevel={props.patientXcAndFmLevel}
      ></XcAndFmLevel>

      <HeartRespRate
        heartRespRate={props.heartRespRate}
        patientHeartRespRate={props.patientHeartRespRate}
      ></HeartRespRate>

        <DataTable
          dataTable={props.dataTable}
          patientExams={props.patientExams}
          patientExams1={props.patientExams1}
        ></DataTable>


</React.Fragment>
  );
}

export default Charts;
