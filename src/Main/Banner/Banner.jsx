import React from "react";
import { useStyles } from "./Banner.styles";
import { Box, Button } from "@mui/material";
import Banner_img from "../../Assets/banner.png";

const Banner = () => {
  const classes = useStyles();
  return (
    <div>
      <Box
        className={classes.banner_main}
        style={{ backgroundImage: `url(${Banner_img})` }}
      >
        <Box className={classes.banner_txt}>
          <p className={classes.banner_head}>
            Empower your future <br /> in tech with
          </p>
          <p className={classes.banner_head2}>Gigaversity</p>
          <Button
            className={classes.banner_button}
            variant="contained"
            sx={{
              backgroundImage: "linear-gradient(to right, #41FCFF, #1455FE)",
              height: "45px",
              width: "200px",
              textTransform: "none",
              borderRadius: "10px",
              fontSize:"1.1rem",
              fontWeight:"bold",
              color:"#ffffff",
              "&:hover": {
                // Add hover styles if needed
              },
            }}
          >
            Start Learning Now
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Banner;
