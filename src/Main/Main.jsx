import React from "react";
import { useStyles } from "./Main.styles";
import NavBar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import Ribbon from "./Ribbon/Ribbon";
import Resume from "./Resume_section/Resume";
import Companies from "./Companies/Companies";
import Program_Highlights from "./Program_highlights/Program_highlights";
import Our_programs from "./Our_programs/Our_programs";
import Instructors from "./Instructors/Instructors";
import Certificates from "./Certificates/Certificates";
import Student from "./Student_section.jsx/Student";
import Assistance from "./Assistance/Assistance";
import Subscribe from "./Subscribe/Subscribe";
import Footer from "./Footer/Footer";

const Main = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <NavBar />
      <Banner />
      <Ribbon />
      <Resume />
      <Companies />
      <Program_Highlights />
      <Our_programs />
      <Instructors />
      <Certificates />
      <Student />
      <Assistance />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Main;
