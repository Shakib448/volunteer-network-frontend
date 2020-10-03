import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import logo from "../Resource/logos/Group 1329.png";
import "./RegisterForm.css";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const { register, errors, handleSubmit } = useForm({});
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container className="registerForm">
      <Row>
        <Col md={4}></Col>
        <Col md={4} className="text-center">
          <img src={logo} width="150" height="50" alt="Logo" />
        </Col>
        <Col md={4}></Col>
      </Row>
      <Row>
        <Col md={2}></Col>
        <Col md={8}>
          <Card className="registerForm__card">
            <Card.Body>
              <Card.Title>
                <h1>Register as a Volunteer</h1>
              </Card.Title>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                  <Form.Control
                    name="name"
                    type="text"
                    placeholder="Full Name "
                    className="form__focus"
                    ref={register({
                      required: "Name is required",
                      pattern: {
                        value: /[A-Z][a-z]/,
                        message: "First text should be capitalized",
                      },
                      minLength: {
                        value: 5,
                        message: " should be 5 characters",
                      },
                    })}
                  />
                  <span style={{ color: "red" }}>
                    {errors.name && errors.name.message}
                  </span>
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    name="email"
                    type="text"
                    placeholder="Your Email"
                    className=" form__focus"
                    ref={register({
                      required: "Email is required",
                      pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: 'Email should be "@" & ".com" ',
                      },
                    })}
                  />
                  <span style={{ color: "red" }}>
                    {errors.email && errors.email.message}
                  </span>
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    name="date"
                    type="text"
                    placeholder="Date"
                    className=" form__focus"
                    ref={register({
                      required: "Date is required",
                      pattern: {
                        value: /^[0-3]?[0-9][/][0-3]?[0-9][/](?:[0-9]{4})$/,
                        message: "Date should be like 00/00/000",
                      },
                    })}
                  />
                  <span style={{ color: "red" }}>
                    {errors.date && errors.date.message}
                  </span>
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    name="description"
                    type="text"
                    placeholder="Description"
                    className=" form__focus"
                    ref={register({
                      required: "Description is required",
                      pattern: /([a-zA-Z])\w+/,
                      minLength: {
                        value: 20,
                        message: " should be 20 characters",
                      },
                    })}
                  />
                  <span style={{ color: "red" }}>
                    {errors.description && errors.description.message}
                  </span>
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    name="title"
                    type="text"
                    readOnly
                    defaultValue="Organize Book at the end"
                    className=" form__focus"
                    ref={register({
                      required: "Description is required",
                      pattern: /([a-zA-Z])\w+/,
                    })}
                  />
                  <span style={{ color: "red" }}>
                    {errors.title && errors.title.message}
                  </span>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Registration
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;
