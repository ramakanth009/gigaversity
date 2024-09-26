import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  footer_main: {
    backgroundColor: "#043D7A",
    height: "100px",
  },
  footer_sub:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    padding:"10px 10px"
  },
  footer_txt: {
    color:"#ffffff",
  },
}));
