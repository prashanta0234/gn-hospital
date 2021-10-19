import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { registation } = useAuth();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleRegister = (e) => {
    registation(email, password, name);
    e.preventDefault();
  };
  return (
    <div className="register-from">
      <Container className="input">
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Name"
              onBlur={handleName}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onBlur={handleEmail}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onBlur={handlePassword}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="register">
            Register
          </Button>
        </Form>
        <hr />
        <div className="loginFooter">
          <Link to="/login">
            <p> Already have an account?</p>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Register;
