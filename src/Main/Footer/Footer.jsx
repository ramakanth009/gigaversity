import React from "react";
import { useStyles } from "./Footer.styles";
import { Box } from "@mui/material";

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.footer_main}>
        <Box className={classes.footer_sub}>
          <p className={classes.footer_txt}>
            Careers | Privacy Policy | Terms & Conditions
          </p>
          <p className={classes.footer_txt}>© 2024 Gigaversity</p>
        </Box>
        <Box></Box>
      </Box>
    </div>
  );
};

export default Footer;
