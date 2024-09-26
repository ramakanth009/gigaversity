import React from "react";
import { useStyles } from "./Resume.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Upload from "../../Assets/upload.svg";
import Jd from "../../Assets/jd.svg";

const Resume = () => {
  const classes = useStyles();
  return (
    <div className={classes.resumemain}>
      <div className={classes.upload}>
        <div className={classes.resumeblock}>
          <div className={classes.resume}>
            <img src={Upload} alt="Resume" />
          </div>
          <p className={classes.resumetxt}>Upload your Resume</p>
        </div>
        <FontAwesomeIcon icon="fa-solid fa-arrow-right" size="2x" />
        <div className={classes.jdblock}>
          <div className={classes.jd}>
            <img src={Jd} alt="Job Description" />
          </div>
          <p className={classes.resumetxt}>Upload your Job Description</p>
        </div>
      </div>
      <div className={classes.scoreblock}>
        <div className={classes.score}>
          <div className={classes.scorecircle}>
            <p className={classes.scorenum}>70</p>
            <hr className={classes.hrline} />
            <p className={classes.scorenum}>100</p>
          </div>
        </div>
        <p className={classes.resumetxt}>Your Score</p>
      </div>
    </div>
  );
};

export default Resume;
