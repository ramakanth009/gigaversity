import React from "react";
import { useStyles } from "./Ribbon.styles";
import { Box } from "@mui/material";

const Ribbon = () => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.ribbon}>
      Check Your Resume ATS Score Before You Apply,
      </Box>
    </div>
  );
};

export default Ribbon;
