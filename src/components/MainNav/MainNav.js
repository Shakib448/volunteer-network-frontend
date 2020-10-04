import React, { useContext, useEffect, useState } from "react";
import "./MainNav.css";
import logo from "../Resource/logos/Group 1329.png";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { userInformationData } from "../../App";

const MainNav = () => {
  const [show, handleShow] = useState(false);

  const [userData, setUserData] = useContext(userInformationData);

  console.log("Navbar", userData);

  useEffect(() => {
    try {
      window.addEventListener(
        "scroll",
        () => {
          if (window.scrollY > 100) {
            handleShow(true);
          } else handleShow(false);
        },
        3000 // This method added for unmount error handle
      );
      return () => {
        // This null functionality added for if the scroll is okh then scroll or otherwise the scroll will null
        window.addEventListener("scroll", null);
      };
    } catch (error) {
      console.log(error);
    }
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
          <NavLink
            className="mr-3 mt-2 text-dark"
            style={{ textDecoration: "none" }}
            to="/"
          >
            Home
          </NavLink>

          <Nav.Link className="mr-3 text-dark">Donation</Nav.Link>

          <Nav.Link className="mr-3 text-dark">Events</Nav.Link>
          <Nav.Link className="mr-3 text-dark">Blog</Nav.Link>
          {userData.email ? (
            <>
              {" "}
              <Nav.Link className="mr-3 text-dark">
                {userData.name}
              </Nav.Link>{" "}
            </>
          ) : (
            <>
              <NavLink to="/google-sign-in">
                <Button className=" mr-3">Register</Button>
              </NavLink>
              <NavLink to="/">
                <Button variant="secondary" className=" mr-3" type="submit">
                  Admin
                </Button>
              </NavLink>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MainNav;
