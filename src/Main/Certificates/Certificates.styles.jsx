import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  certificates_main: {
    backgroundColor: "#d7eaff",
    padding: "30px 40px",
    marginBottom:"15px"
  },
  certificates_sub: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  certificates_head: {
    fontSize: "1.5rem",
    textAlign: "center",
    fontWeight: "bold",
    padding: "10px 10px",
  },
  certificate: {
    width: "731px",
    height: "415px",
    paddingRight: "50px",
  },
//   hrline: {
//     height: "250px",
//     // padding:"5px",
//     border: "none",
//     borderRight: "5px solid #ffffff",
//     borderRadius: "20px",
//     backgroundColor: "#ffffff",
//   },
  certi_box: {
    height:"250px",
    padding: "30px 5px",
    paddingLeft: "20px",
    borderLeft:"5px solid #ffffff",
    // borderRadius:"20px"
    // borderTopLeftRadius:"3px"
  },
  hat: {
    paddingRight: "10px",
  },
  certi_text: {
    fontSize: "1.8rem",
    fontWeight: "bold",
  },
}));
