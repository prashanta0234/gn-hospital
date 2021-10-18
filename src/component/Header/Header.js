import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../image/logo/Logo.png";
import { NavLink } from "react-router-dom";
import Button from "@restart/ui/esm/Button";
const Header = () => {
  const phone = <FontAwesomeIcon icon={faPhoneAlt} />;
  const mail = <FontAwesomeIcon icon={faEnvelope} />;
  return (
    <div>
      <div className="contact">
        <span>{phone} 01754540234</span>
        &nbsp; &#10072; &nbsp;
        <span>{mail} prashanta0234@gmail.com</span>
      </div>
      <div className="navBar">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand>
              <img
                src={logo}
                width="150"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="ms-auto navItem">
                <NavLink
                  to="/home"
                  className="navLink"
                  activeClassName="navActive"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/doctors"
                  className="navLink"
                  activeClassName="navActive"
                >
                  Doctors
                </NavLink>
                <NavLink
                  to="/services"
                  className="navLink"
                  activeClassName="navActive"
                >
                  Services
                </NavLink>
                <NavLink
                  to="/department"
                  className="navLink"
                  activeClassName="navActive"
                >
                  Depertment
                </NavLink>
                <NavLink to="/login">
                  <Button variant="danger">Login</Button>
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
