import React, { useEffect, useState } from "react";
import "./MainNav.css";
import logo from "../Resource/logos/Group 1329.png";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.addEventListener("scroll");
    };
  }, []);
  return (
    <Navbar
      bg={`${show && "light"}`}
      className={`mainNav  ${show && "mainNav__scroll"}`}
      variant="light"
      fixed="top"
    >
      <Container>
        <NavLink to="/">
          <Navbar.Brand to="/">
            <img
              src={logo}
              width="150"
              height="50"
              className="d-inline-block align-top"
              alt="volunteer network logo"
            />
          </Navbar.Brand>
        </NavLink>
        <Nav className="ml-auto font-weight-bold text-white">
          <Nav.Link>
            <NavLink
              className="mr-3 text-dark"
              style={{ textDecoration: "none" }}
              to="/"
            >
              Home
            </NavLink>
          </Nav.Link>
          <Nav.Link className="mr-3 text-dark">Donation</Nav.Link>

          <Nav.Link className="mr-3 text-dark">Events</Nav.Link>
          <Nav.Link className="mr-3 text-dark">Blog</Nav.Link>
          <NavLink to="/google-sign-in">
            <Button className=" mr-3">Register</Button>
          </NavLink>
          <NavLink to="/">
            <Button variant="secondary" className=" mr-3" type="submit">
              Admin
            </Button>
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MainNav;
