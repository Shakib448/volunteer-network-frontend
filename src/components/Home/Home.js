import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import "./Home.css";
import volunteerData from "../FakeData/FakeData";
import { userInformationData, userInformationRoute } from "../../App";
import { useHistory } from "react-router-dom";
import AxiosConfig from "../AxiosConfig/AxiosConfig";

const Home = () => {
  const [userRoute, setUserRoute] = useContext(userInformationRoute);

  console.log(userRoute);

  const [eventListData, setEventListData] = useState([]);

  const history = useHistory();

  const handleAddedData = async () => {
    try {
      await AxiosConfig.post("/addVolunteerData", {
        data: volunteerData,
      });
    } catch (err) {
      console.log(err);
    }

    // fetch("http://localhost:5000/addVolunteerData", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(volunteerData),
    // });
  };

  useEffect(() => {
    const handleLoadData = async () => {
      try {
        const res = await AxiosConfig.get("/events");
        setEventListData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleLoadData();
  }, []);

  const handleRegister = (id) => {
    history.push(`/register`);
  };

  const handleEventData = (title, img, id) => {
    setUserRoute({ title, img, id });
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
            {volunteerData.map(({ title, img, id, color }) => (
              <Col
                onClick={() => {
                  handleEventData(title, img, id);
                  handleRegister();
                }}
                style={{ cursor: "pointer" }}
                md={3}
                key={id}
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
                  <Button onClick={handleAddedData}>Add Data</Button>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
