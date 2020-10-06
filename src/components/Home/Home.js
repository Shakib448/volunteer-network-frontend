import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import "./Home.css";
import volunteerData from "../FakeData/FakeData";
import { userInformationData, userInformationEvent } from "../../App";
import { useHistory } from "react-router-dom";
import AxiosConfig from "../AxiosConfig/AxiosConfig";

const Home = () => {
  const [eventInfo, setEventInfo] = useContext(userInformationEvent);

  const [eventListData, setEventListData] = useState([]);

  const [loading, setLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const handleLoadData = async () => {
      try {
        const res = await AxiosConfig.get("/events");
        setEventListData(res.data);
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    handleLoadData();
  }, []);

  const handleRegister = () => {
    history.push("/register");
  };

  const handleEventData = (title, img, _id) => {
    setEventInfo({ title, img, _id });
  };

  return (
    <>
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
                      placeholder="Search...."
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
        <Container>
          <Row>
            {loading ? (
              eventListData.map(({ title, img, _id, color }) => (
                <Col
                  onClick={() => {
                    handleEventData(title, img, _id);
                    handleRegister();
                  }}
                  style={{ cursor: "pointer" }}
                  md={3}
                  key={_id}
                >
                  <Card
                    style={{
                      width: "16rem",
                      textAlign: "center",
                      border: "none",
                    }}
                  >
                    <Card.Img variant="top" src={img} />
                    <Card.Body
                      style={{
                        margin: "-10px 0 10px 0",
                        backgroundColor: `${color}`,
                        color: "white",
                        borderRadius: "0px 0px 10px 10px",
                      }}
                    >
                      <Card.Title className="home__title">{title}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <h2>Loading........</h2>
            )}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
