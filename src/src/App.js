import React from "react";
import FetchBox from "./components/FetchBox"
import "./styles.css";



function App() {

  

  /*

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

      */

  return (
    <React.Fragment>

 

        <FetchBox></FetchBox>
     
      
    </React.Fragment>
  );
}

export default App;
