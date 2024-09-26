import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  banner_main: {
    width:"100vw",
    height: "667px",
    fontFamily: "Poppins",
    marginBottom:"10px"
  },
  banner_txt: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    padding:"180px 90px"
  },
  banner_head: {
    fontSize: "3rem",
    color: "#ffffff",
  },
  banner_head2: {
    fontSize: "4rem",
    color: "#ffffff",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  banner_button: { backgroundColor: "linear(to right, #41FCFF, #1455FE)" },
}));
