import React from "react";
import { useStyles } from "./Subscribe.styles";
import { Box, Button } from "@mui/material";

const Subscribe = () => {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.subscribe_main}>
        <h3 className={classes.subscribe_head}>
          Subscribe to get our Newsletter
        </h3>
        <Box className={classes.inputfield}>
          <input
            className={classes.inputbox}
            placeholder={"Your Email"}
          ></input>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1455FE",
              color: "white",
              fontWeight: "bold",
              height: "45px",
              width: "150px",
              fontSize: "1rem",
              textTransform: "none",
              letterSpacing:"2px",
              borderRadius: "20px",

              "&:hover": {
                backgroundColor: "#0d3ebf",
              },
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Subscribe;
