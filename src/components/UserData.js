import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { purple } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";

function UserData(props) {
  return (
    <React.Fragment>

      <Avatar src={props.avatar} sx={{ width: 90, height: 90, mt: 2, ml: 2 }}  />      

      <Typography variant="body1" sx={{ color: "#424242", mt: 2, ml: 2 }}>
        Name:
      </Typography>
      <Typography variant="body1" sx={{ ml: 2 }}>
        {props.name}
      </Typography>

      <Typography variant="body1" sx={{ color: "#424242", mt: 2, ml: 2 }}>
        Surname:
      </Typography>
      <Typography variant="body1" sx={{ ml: 2 }}>
        {props.surname}
      </Typography>

      <Typography variant="body1" sx={{ color: "#424242", mt: 1, ml: 2 }}>
        Gender
      </Typography>
      <Typography variant="body1" sx={{ ml: 2 }}>
        {props.gender}
      </Typography>

      <Typography variant="body1" sx={{ color: "#424242", mt: 1, ml: 2 }}>
        Birth date:
      </Typography>
      <Typography variant="body1" sx={{ ml: 2 }}>
        {props.birthDate}
      </Typography>
    </React.Fragment>
  );
}

export default UserData;
