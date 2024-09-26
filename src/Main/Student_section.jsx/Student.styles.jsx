import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    marginTop: "30px"
  },
  student_head: {
    padding: "20px 40px",
    backgroundColor: "#D7EAFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom:"20px"
  },
  student_txt: {
    backgroundColor: "#ffffff",
    padding: "10px 40px",
    borderRadius: "30px",
  },
  student_block: {
    padding: "20px 10px",
  },
  student_sliders: {
    padding: "20px 50px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    gap:"10px"
  },
  cardmain: {
    height: "500px",
    width: "300px",
    backgroundColor: "#3952CA",
    borderRadius: "20px 20px 30px 30px",
  },
  cardmain1: {
    backgroundColor: "#3952CA",
    height: "150px",
    borderRadius: "20px 20px 20px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  profileimage: {
    height: "140px",
    width: "140px",
    borderRadius: "100px",
    padding: "3px",
    border: "3px solid #e5e5e5",
  },
  student_name: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    letterSpacing: "1px",
  },
  student_dept: {
    fontWeight: "600",
  },
  student_review: {
    // width:"300px"
    padding: "0px 20px",
  },
  cardmain2: {
    backgroundColor: "#e5e5e5",
    height: "350px",
    borderRadius: "20px 0 20px 20px",
    display: "flex",
    flexDirection: "column",
    // justifyContent:"center",
    alignItems: "center",
  },
}));
