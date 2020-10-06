import React, { useCallback, useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./RegisterVolunteerInfo.css";
import AxiosConfig from "../AxiosConfig/AxiosConfig";
import { userInformationData } from "../../App";

const RegisterVolunteerInfo = () => {
  const [userData, setUserData] = useContext(userInformationData);
  const [selectedEvent, setSelectEvent] = useState([]);

  const [loading, setLoading] = useState(false);

  const handleDelete = async (_id) => {
    try {
      await AxiosConfig.delete(`/delete/${_id}`).then((res) => {
        if (res) {
          alert("The Backhand server is running successfully 🚀  ");
          loadEvent();
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadEvent();
  }, [userData.email, userData._id]);

  const loadEvent = async () => {
    try {
      const res = await AxiosConfig.get(
        "/volunteer/event?email=" + userData.email
      );
      const data = res.data;
      setSelectEvent(data);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };
  loadEvent();

  return (
    <Container style={{ paddingTop: "200px" }}>
      <div className="mb-3 text-center">
        <Button variant="outline-secondary">
          Total join : {selectedEvent.length}{" "}
        </Button>
      </div>
      <Row>
        {loading ? (
          selectedEvent.map((event, _id) => (
            <Col key={event._id} md={6} xs={6} className="mb-4">
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
                      src={event.img}
                      alt="Suresh Dasari Card"
                    />
                  </div>
                  <div className="col-sm-7">
                    <div className="card-body">
                      <h5 className="card-title">{event.title}</h5>
                      <h5 className="card-title">
                        {new Date(event.date).toDateString("dd/mm/yy")}
                      </h5>
                      <p className="card-text">{event.description}</p>
                      <div className="text-right">
                        <Button
                          onClick={() => handleDelete(event._id)}
                          variant="secondary"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))
        ) : (
          <h2>Loading........</h2>
        )}
      </Row>
    </Container>
  );
};

export default RegisterVolunteerInfo;
