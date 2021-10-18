import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ShowHomeServices from "./ShowHomeServices";
import "./HomeService.css";

const HomeService = () => {
  const [homeServices, setHomeServices] = useState([]);
  useEffect(() => {
    fetch("fake-services.json")
      .then((res) => res.json())
      .then((data) => setHomeServices(data));
  }, []);
  const sliceService = homeServices.slice(0, 6);
  return (
    <div className="homeService">
      <Container>
        <h2>Our Services</h2>
        <Row xs={1} md={3} className="g-4">
          {sliceService.map((services) => (
            <ShowHomeServices services={services} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeService;
