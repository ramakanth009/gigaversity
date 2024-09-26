import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  resumemain: {
    width: "100vw",
  },
  resumeblock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px",
    gap: "20px",
  },
  jdblock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px",
    gap: "20px",
  },
  upload: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  },
  resume: {
    backgroundColor: "#ECECEC",
    width: "216px",
    height: "219px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
  },
  jd: {
    backgroundColor: "#ECECEC",
    width: "216px",
    height: "219px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
  },
  scoreblock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px 0px 10px 0px",
    gap: "20px",
  },
  score: {
    width: "216px",
    height: "219px",
    backgroundColor: "#1455FE",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
  },
  scorenum:{
    marginBottom:"5px",
    fontWeight:"bold",
    fontSize:"2rem"
  },
  scorecircle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "5px solid #ffffff",
    padding: "10px 20px",
    borderRadius: "200px",
  },
  hrline: {
    borderBottom: "3px solid #ffffff",
    width: "120px",
    Color: "#ffffff",
    backgroundColor: "#ffffff",
  },
  resumetxt: {
    fontWeight: "bold",
    // fontSize:"1.5rem"
  },
}));
