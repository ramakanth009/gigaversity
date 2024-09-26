import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  assistance_main: {
    backgroundColor: "#d7eaff",
    padding: "30px 40px",
  },
  assistance_head: {
    textAlign: "center",
    fontWeight: "bold",
    paddingBottom: "50px",
  },
  assistance_sub: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
  },
  detailblock: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
  },
  detail_box: {
    height: "150px",
    width: "360px",
    backgroundColor: "#ffffff",
    padding: "20px 40px",
    // borderRadius: "20px",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    gap: "30px",
  },
  dtbox1: { borderBottomRightRadius: "50px",borderTopLeftRadius: "50px" },
  dtbox2: {  borderBottomRightRadius: "50px",borderTopLeftRadius: "50px" },
  dtbox3: {  borderBottomRightRadius: "50px",borderTopLeftRadius: "50px" },
  dtbox4: {  borderBottomLeftRadius: "50px",borderTopRightRadius: "50px" },
  dtbox5: {  borderBottomLeftRadius: "50px",borderTopRightRadius: "50px" },
  dtbox6: {  borderBottomLeftRadius: "50px",borderTopRightRadius: "50px" },
  careersvg: {
    height: "70px",
  },
  career_txt: {
    fontSize: "1.5rem",
    // fontWeight:"bold"
  },
}));
