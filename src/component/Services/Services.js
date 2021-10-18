import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./Services.css";
import ShowServices from "./ShowServices";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("fake-services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="services">
      <Container>
        <h2>Our Services</h2>
        <Row xs={1} md={3} className="g-4">
          {services.map((services) => (
            <ShowServices services={services} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
