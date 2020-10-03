import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Container fluid>
        <Row>
          <Col md={3}></Col>
          <Col md={6} className="home__form">
            <div className="home__title ml-5">
              <h2> I grow by helping people in need</h2>
            </div>
            <Form>
              <Form.Row>
                <Col>
                  <Form.Label htmlFor="inlineFormInput" srOnly>
                    Name
                  </Form.Label>
                  <Form.Control
                    className="mb-2 home__input"
                    id="inlineFormInput"
                    placeholder="Jane Doe"
                  />
                </Col>

                <Col xs="auto">
                  <Button type="submit" className="mb-2 home__button">
                    Submit
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
