import React from "react";
import { useStyles } from "./Certificates.styles";
import { Box } from "@mui/material";
import Backgroundpattern from "../../Assets/backgroundpattern.svg";
import The_certificate from "../../Assets/thecertificate.png";
import Hat from "../../Assets/hat.svg";

const Certificates = () => {
  const classes = useStyles();
  return (
    <div>
      <Box
        className={classes.certificates_main}
        style={{ backgroundImage: `url(${Backgroundpattern})` }}
      >
        <h3 className={classes.certificates_head}>
          Be in the spotlight by getting Certified
        </h3>
        <Box className={classes.certificates_sub}>
          <Box>
            <img
              src={The_certificate}
              alt="the certificate"
              className={classes.certificate}
            />
          </Box>
          {/* <hr className={classes.hrline}/> */}
          <Box className={classes.certi_box}>
            <p className={classes.certi_text}>
              <img src={Hat} alt="scholar_hat" className={classes.hat} />
              Industry recognized certificate
            </p>
            <p className={classes.certi_text}>
              <img src={Hat} alt="scholar_hat" className={classes.hat} />
              Stand out in the job market{" "}
            </p>
            <p className={classes.certi_text}>
              <img src={Hat} alt="scholar_hat" className={classes.hat} />
              Your passport to career growth
            </p>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Certificates;
