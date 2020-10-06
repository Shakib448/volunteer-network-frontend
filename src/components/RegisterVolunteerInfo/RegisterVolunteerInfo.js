import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./RegisterVolunteerInfo.css";
import AxiosConfig from "../AxiosConfig/AxiosConfig";

const RegisterVolunteerInfo = () => {
  const [selectedEvent, setSelectEvent] = useState([]);

  console.log(selectedEvent);

  useEffect(() => {
    const loadEvent = async () => {
      try {
        const res = await AxiosConfig.get("/volunteer/event");
        const data = res.data;
        setSelectEvent(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadEvent();
  }, []);

  return (
    <Container style={{ paddingTop: "200px" }}>
      <h3>You have {selectedEvent.length} </h3>
      <div></div>
      <Row>
        {selectedEvent.map((event) => (
          <Col md={6} xs={6} className="mb-4">
            <div
              className="card"
              style={{
                width: "500px",
                border: "none",
                boxShadow: "5px 5px 40px lightgray",
              }}
            >
              <div className="row no-gutters">
                <div className="col-sm-5">
                  <img
                    className="card-img img-fluid"
                    src={event.volunteerInfo.img}
                    alt="Suresh Dasari Card"
                  />
                </div>
                <div className="col-sm-7">
                  <div className="card-body">
                    <h5 className="card-title">{event.volunteerInfo.title}</h5>
                    <p className="card-text">
                      {event.registerData.description}
                    </p>
                    <div className="text-right">
                      <Button variant="secondary">Cancel</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RegisterVolunteerInfo;
