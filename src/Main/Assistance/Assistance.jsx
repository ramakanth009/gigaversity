import React from "react";
import { useStyles } from "./Assistance.styles";
import { Box } from "@mui/material";
import Backgroundpattern from "../../Assets/backgroundpattern.svg";
import Careersvg from "../../Assets/career_profile.svg";

const Assistance = () => {
  const classes = useStyles();
  return (
    <div>
      <Box
        className={classes.assistance_main}
        style={{ backgroundImage: `url(${Backgroundpattern})` }}
      >
        <h3 className={classes.assistance_head}>
          End To End Career Assistance
        </h3>
        <Box className={classes.assistance_sub}>
          <Box className={classes.detailblock}>
          <Box className={`${classes.detail_box} ${classes.dtbox1}`}>
              <img
                src={Careersvg}
                alt="career_profile_svg"
                className={classes.careersvg}
              />
              <p className={classes.career_txt}> Resume optimization</p>
            </Box>
            <Box className={`${classes.detail_box} ${classes.dtbox2}`}>
              <img
                src={Careersvg}
                alt="career_profile_svg"
                className={classes.careersvg}
              />
              <p className={classes.career_txt}>
                {" "}
                Access to <br />
                Job Portal
              </p>
            </Box>
            <Box className={`${classes.detail_box} ${classes.dtbox3}`}>
              <img
                src={Careersvg}
                alt="career_profile_svg"
                className={classes.careersvg}
              />
              <p className={classes.career_txt}> Linkedin Optimization</p>
            </Box>
          </Box>
          <Box className={classes.detailblock}>
            <Box className={`${classes.detail_box} ${classes.dtbox4}`}>
              <img
                src={Careersvg}
                alt="career_profile_svg"
                className={classes.careersvg}
              />
              <p className={classes.career_txt}> Portfolio Building</p>
            </Box>
            <Box className={`${classes.detail_box} ${classes.dtbox5}`}>
              <img
                src={Careersvg}
                alt="career_profile_svg"
                className={classes.careersvg}
              />
              <p className={classes.career_txt}>
                Networking and <br />
                communication
              </p>
            </Box>
            <Box className={`${classes.detail_box} ${classes.dtbox6}`}>
              <img
                src={Careersvg}
                alt="career_profile_svg"
                className={classes.careersvg}
              />
              <p className={classes.career_txt}> Job ready</p>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Assistance;
