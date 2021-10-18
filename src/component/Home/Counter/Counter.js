import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import "./Counter.css";
const Counter = () => {
  return (
    <div className="counter">
      <Container>
        <div className="counterMain">
          <Row xs={2} md={4} className="g-4">
            <Col>
              <div className="counterItem">
                <h4>
                  <CountUp start={0} end={5000} duration={5} />
                </h4>
                <h3>Happy Clint</h3>
              </div>
            </Col>
            <Col>
              <div className="counterItem">
                <h4>
                  <CountUp start={0} end={80} duration={5} />
                </h4>
                <h3>Doctors</h3>
              </div>
            </Col>
            <Col>
              <div className="counterItem">
                <h4>
                  <CountUp start={0} end={20} duration={5} />
                </h4>
                <h3>Departments</h3>
              </div>
            </Col>
            <Col>
              <div className="counterItem">
                <h4>
                  <CountUp start={0} end={50} duration={5} />
                </h4>
                <h3>Service</h3>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Counter;
