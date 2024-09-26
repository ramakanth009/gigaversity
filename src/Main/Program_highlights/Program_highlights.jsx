import React from "react";
import { useStyles } from "./Program_highlights.styles";
import { Box } from "@mui/material";
import Videocall from "../../Assets/video-call_80647041.png";
import Cloud from "../../Assets/cloud_2028973 1.png";
import Presentation from "../../Assets/presentation_1321050 1.png";
import Arrow from "../../Assets/arrows_15141390 1.png";
import Group from "../../Assets/Group.png";
import Vector from "../../Assets/Vector.png";

const Program_highlights = () => {
  const classes = useStyles();
  return (
    <div className={classes.program_highlights_main}>
        <Box className={classes.programhead} component="p">
        Program Highlights
        </Box>
    <Box className={classes.programmain}>
      <Box className={classes.highlights1}>
        <Box component="span" className={classes.videocall}>
          <img src={Videocall} alt="videocall" className={classes.videologo} />
        </Box>
        Live Sessions
      </Box>
      <Box className={classes.highlights2}>
        <Box component="span" className={classes.videocall}>
          <img src={Cloud} alt="videocall" className={classes.videologo} />
        </Box>
        Product-based learning
      </Box>
      <Box className={classes.highlights1}>
        <Box component="span" className={classes.videocall}>
          <img
            src={Presentation}
            alt="videocall"
            className={classes.videologo}
          />
        </Box>
        Expert Instructors
      </Box>
      <Box className={classes.highlights2}>
        <Box component="span" className={classes.videocall}>
          <img src={Arrow} alt="videocall" className={classes.videologo} />
        </Box>
        Internship Opportunities
      </Box>
      <Box></Box>
      <Box className={classes.highlights1}>
        <Box component="span" className={classes.videocall}>
          <img src={Group} alt="videocall" className={classes.videologo} />
        </Box>
        Unlimited AI Mock Interviews
      </Box>
      <Box className={classes.highlights2}>
        <Box component="span" className={classes.videocall}>
          <img src={Vector} alt="videocall" className={classes.videologo} />
        </Box>
        Job 
assistance
      </Box>
    </Box>
    </div>
  );
};

export default Program_highlights;
