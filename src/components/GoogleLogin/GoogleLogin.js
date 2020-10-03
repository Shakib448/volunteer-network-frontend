import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./GoogleLogin.css";
import logo from "../Resource/logos/Group 1329.png";

const GoogleLogin = () => {
  return (
    <Container className="googleLogin">
      <Row>
        <Col md={4}></Col>
        <Col md={4} className="text-center">
          <img src={logo} width="150" height="50" alt="Logo" />
        </Col>
        <Col md={4}></Col>
      </Row>
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <Card className="google__form">
            <Card.Body className="google__formBody">
              <Card.Title>
                <h1>Login With</h1>
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
};

export default GoogleLogin;
