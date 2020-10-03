import React from "react";
import "./MainNav.css";
import logo from "../Resource/logos/Group 1329.png";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const MainNav = () => {
  return (
    <Container>
      <Navbar variant="light">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="150"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav className="ml-auto font-weight-bold ">
          <Nav.Link className="mr-3">Home</Nav.Link>
          <Nav.Link className="mr-4">Donation</Nav.Link>

          <Nav.Link className="mr-3">Events</Nav.Link>
          <Nav.Link className="mr-3">Blog</Nav.Link>
          <Button
            variant="primary"
            className="mainNav__register mr-3"
            type="submit"
          >
            Register
          </Button>
          <Button
            variant="secondary"
            className="mainNav__admin mr-3"
            type="submit"
          >
            Admin
          </Button>
          {/* <Nav.Link className="mainNav__register">Register</Nav.Link> */}
          {/* <Nav.Link className="mainNav__register">Admin</Nav.Link> */}
        </Nav>
      </Navbar>
    </Container>
  );
};

export default MainNav;
