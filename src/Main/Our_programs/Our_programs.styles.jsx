import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  our_programs_main_block:{
    width:"100vw",
  },
  our_programs: {
    backgroundColor: "#d7eaff",
  },
  our_programs_main: {
    height: "587px",
    width: "100vw",
    padding: "10px 50px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    gap: "15px",
  },
  ourprogramshead: {
    textAlign:"center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    padding: "30px 70px 5px 90px",
  },
  firstblock: {
    backgroundColor: "#ffffff",
    height: "517px",
    width: "320px",
    padding: "10px 20px",
    borderRadius: "20px",
  },
  fullstackimg: {
    width: "280px",
    padding: "10px 0px",
  },
  fullstackblock: {},
  block1: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  design: {
    display: "flex",
    gap: "5px",
    // justifyContent:"center",
    alignItems: "center",
  },
  block2: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
    // height:"0px"
  },
  block3: {
    height:"100px",
    color: "#696984",
    paddingBottom: "20px",
  },
  block4: {
    // color: "#696984",
    paddingBottom: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subblock4_1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pp: {
    paddingRight: "5px ",
  },
  price: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "10px",
    padding: "10px 10px",
  },
  strike: {
    textDecoration: "line-thorough",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actualprice: {
    fontWeight: "bold",
    color: "#1455FE",
  },
}));
