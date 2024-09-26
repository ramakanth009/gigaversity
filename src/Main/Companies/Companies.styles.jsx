import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({

  companymain:{
    width:"100vw",
  },
  companylogos:{
    width:"100vw",
    backgroundColor:"#ebf5ff",
    paddingBottom:"50px",
    paddingRight:"8px"
  },
  logoheding:{
    textAlign:"center",
    fontSize:"1.5rem",
    fontWeight:"bold",
    padding:"20px 70px"
  },
  slides:{
    display:"flex",
    gap:"20px",
    justifyContent:"center",
    alignItems:"center",
    // padding:"10px 60px",
    height:"200px",
  },
  commonlogos:{
    height:"184px",
    backgroundColor:"#ffffff",
    objectFit:"contain",
    // objectPosition:"center",
    padding:"5px 5px",
    width:"184px",
    margin:"1px 10px",
    borderRadius:"20px"
  },
 
  
}));