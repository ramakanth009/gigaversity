import React from "react";
import { useStyles } from "./Our_programs.styles";
import { Box, Typography } from "@mui/material";
import Fullstackdevolopment from "../../Assets/fullastackimage.png";
import Datascience from "../../Assets/representation.png";
import Digitalmarketing from "../../Assets/digitalmarketing.png";
import Graphicdesigning from "../../Assets/graphicdesigning.png";
import Groupbox from "../../Assets/groupbox.png";
import Clock from "../../Assets/cloak.png";
import Pp from "../../Assets/pp.svg";
import Backgroundpattern from "../../Assets/backgroundpattern.svg";

const Our_programs = () => {
  const classes = useStyles();
  return (
    <div className={classes.our_programs_main_block}>
      <Box
        className={classes.our_programs}
        style={{ backgroundImage: `url(${Backgroundpattern})` }}
      >
        <Box className={classes.ourprogramshead} component="p">
          Explore our wide range of programs
        </Box>
        <Box className={classes.our_programs_main}>
          <Box className={classes.firstblock}>
            <Box className={classes.fullstackblock}>
              <img
                src={Fullstackdevolopment}
                alt="fullstackdevelopment"
                className={classes.fullstackimg}
              />
            </Box>
            <Box className={classes.block1}>
              <Typography className={classes.design}>
                <img src={Groupbox} alt="group" />
                Design
              </Typography>
              <Typography className={classes.design}>
                <img src={Clock} alt="clock" />3 Months
              </Typography>
            </Box>
            <Box component="p" className={classes.block2}>
              Full-Stack Development
            </Box>
            <Typography className={classes.block3}>
              Master's Certification Program in Full Stack Development with a{" "}
              <br /> 3-month internship duration
            </Typography>
            <Box className={classes.block4}>
              <Box className={classes.subblock4_1}>
                {/* <img src={Pp} alt="pp" className={classes.pp} /> */}
                Enroll now
              </Box>
              <Box className={classes.price}>
                <Box
                  className={classes.strike}
                  sx={{ textDecoration: "line-through" }}
                >
                  ₹ 991
                </Box>
                <Box className={classes.actualprice}>₹ 641</Box>
              </Box>
            </Box>
          </Box>
          <Box className={classes.firstblock}>
            <Box className={classes.fullstackblock}>
              <img
                src={Datascience}
                alt="fullstackdevelopment"
                className={classes.fullstackimg}
              />
            </Box>
            <Box className={classes.block1}>
              <Typography className={classes.design}>
                <img src={Groupbox} alt="group" />
                Design
              </Typography>
              <Typography className={classes.design}>
                <img src={Clock} alt="clock" />3 Months
              </Typography>
            </Box>
            <Box component="p" className={classes.block2}>
              Data science
            </Box>
            <Typography className={classes.block3}>
              Master's certification Program in Data Science with a 3-month
              internship Duration.
            </Typography>
            <Box className={classes.block4}>
              <Box className={classes.subblock4_1}>
                {/* <img src={Pp} alt="pp" className={classes.pp} /> */}
                Enroll now
              </Box>
              <Box className={classes.price}>
                <Box
                  className={classes.strike}
                  sx={{ textDecoration: "line-through" }}
                >
                  ₹ 991
                </Box>
                <Box className={classes.actualprice}>₹ 641</Box>
              </Box>
            </Box>
          </Box>
          <Box className={classes.firstblock}>
            <Box className={classes.fullstackblock}>
              <img
                src={Digitalmarketing}
                alt="fullstackdevelopment"
                className={classes.fullstackimg}
              />
            </Box>
            <Box className={classes.block1}>
              <Typography className={classes.design}>
                <img src={Groupbox} alt="group" />
                Design
              </Typography>
              <Typography className={classes.design}>
                <img src={Clock} alt="clock" />3 Months
              </Typography>
            </Box>
            <Box component="p" className={classes.block2}>
              Digital Marketing
            </Box>
            <Typography className={classes.block3}>
              AI-Powered Advanced Digital Marketing Certification program with
              10+ live projects and case studies
            </Typography>
            <Box className={classes.block4}>
              <Box className={classes.subblock4_1}>
                {/* <img src={Pp} alt="pp" className={classes.pp} /> */}
                Enroll now
              </Box>
              <Box className={classes.price}>
                <Box
                  className={classes.strike}
                  sx={{ textDecoration: "line-through" }}
                >
                  ₹ 991
                </Box>
                <Box className={classes.actualprice}>₹ 641</Box>
              </Box>
            </Box>
          </Box>
          <Box className={classes.firstblock}>
            <Box className={classes.fullstackblock}>
              <img
                src={Graphicdesigning}
                alt="fullstackdevelopment"
                className={classes.fullstackimg}
              />
            </Box>
            <Box className={classes.block1}>
              <Typography className={classes.design}>
                <img src={Groupbox} alt="group" />
                Design
              </Typography>
              <Typography className={classes.design}>
                <img src={Clock} alt="clock" />3 Months
              </Typography>
            </Box>
            <Box component="p" className={classes.block2}>
              Graphic designing
            </Box>
            <Typography className={classes.block3}>
            Master graphic designing program with AI and  live projects
            </Typography>
            <Box className={classes.block4}>
              <Box className={classes.subblock4_1}>
                {/* <img src={Pp} alt="pp" className={classes.pp} /> */}
                Enroll now
              </Box>
              <Box className={classes.price}>
                <Box
                  className={classes.strike}
                  sx={{ textDecoration: "line-through" }}
                >
                  ₹ 991
                </Box>
                <Box className={classes.actualprice}>₹ 641</Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Our_programs;
