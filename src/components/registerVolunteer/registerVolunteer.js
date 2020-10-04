import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./registerVolunteer.css";
import test from "../Resource/banner.jpg";

const registerVolunteer = () => {
  return (
    <Container style={{ paddingTop: "200px" }}>
      <Row>
        <Col md={6} xs={6}>
          <div
            className="
card"
            style={{
              width: "500px",
              border: "none",
              boxShadow: "5px 5px 40px lightgray",
            }}
          >
            <div
              className="
row no-gutters"
            >
              <div
                className="
col-sm-5"
              >
                <img
                  className="
card-img"
                  src={test}
                  alt="Suresh Dasari Card"
                />
              </div>
              <div
                className="
col-sm-7"
              >
                <div
                  className="
card-body"
                >
                  <h5
                    className="
card-title"
                  >
                    Suresh Dasari
                  </h5>
                  <p
                    className="
card-text"
                  >
                    Suresh Dasari is a founder and technical lead developer in
                    tutlane.
                  </p>
                  <div className="text-right">
                    <Button variant="secondary">Cancel</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default registerVolunteer;
