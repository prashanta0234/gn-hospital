import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Container>
          <Row xs={1} md={3} className="g-4">
            <Col>
              <h4>Mail US</h4>
              <input type="email" placeholder="Your Email" /> <br />
              <input type="text" placeholder="Your message" />
              <br />
              <button>Send</button>
              <p>--------------------------</p>
              <a href="https://www.facebook.com/prashanta.chakraborty.14">
                <i className="fab fa-facebook"></i>
              </a>{" "}
              &nbsp;
              <a href="https://twitter.com/Prashantachak11/likes">
                <i className="fab fa-twitter-square"></i>
              </a>
            </Col>
            <Col className="mx-auto">
              <h3>Opening Hour</h3>
              <div className="openingTime">
                <h6>sat-sun</h6>
                <h6>10am-4am</h6>
              </div>
              <div className="openingTime">
                <h6>mon-tue</h6>
                <h6>8am-4am</h6>
              </div>
              <div className="openingTime">
                <h6>wed-thu</h6>
                <h6>8am-4am</h6>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="copyRight">
        <h6> &copy; GN Hospital</h6>
      </div>
    </div>
  );
};

export default Footer;
