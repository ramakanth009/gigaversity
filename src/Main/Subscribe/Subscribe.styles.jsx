import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  subscribe_main: {
    padding: "30px 10px",
  },
  subscribe_head: {
    textAlign: "center",
    color: "#b2b3cf",
    paddingBottom: "50px",
  },
  inputfield: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },
  inputbox: {
    width: "400px",
    padding: "10px 20px",
    borderRadius: "20px",
    border: "2px solid #83839a",
  },
  subscribe_button: {
    backgroundColor: "#1455FE",
    borderRadius:"20px"
  },
}));
