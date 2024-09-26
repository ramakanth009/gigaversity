import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useStyles} from './Navbar.styles'

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.navbarmain}>

    <Navbar expand="lg" className="bg-body-tertiary" styles="width:100vw">
      <Container fluid className='d-flex justify-content-between'>
    <div className="navblock1">
        <Navbar.Brand href="#">Gigaversity</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
    </div>
    <div className="navblock2">

        <Navbar.Collapse id="navbarScroll" className={classes.hamburger}>
          <Nav
            className="my-2 my-lg-0"
            style={{ maxHeight: '100px', padding:"0px 40px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Courses</Nav.Link>
            <Nav.Link href="#action2">Careers</Nav.Link>
            <Nav.Link href="#action2">Blog</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </div>
      </Container>
    </Navbar>
    </div>

  );
};

export default NavBar;
