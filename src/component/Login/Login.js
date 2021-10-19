import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./Register.css";

const Login = () => {
  const { googleLogin, handleLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const logIneEmail = (e) => {
    setEmail(e.target.value);
  };
  const logInPassword = (e) => {
    setPassword(e.target.value);
  };
  const Login = (e) => {
    handleLogin(email, password);
    e.preventDefault();
  };
  return (
    <div className="register-from">
      <Container className="input">
        <Form onSubmit={Login}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onBlur={logIneEmail}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onBlur={logInPassword}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="register">
            Login
          </Button>
        </Form>
        <hr />
        <div className="loginFooter">
          <Button
            variant="primary"
            type="submit"
            className="googleRegister"
            onClick={googleLogin}
          >
            <i className="fab fa-google"></i>
          </Button>
          <Link to="/register">
            <p> New User?</p>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Login;
