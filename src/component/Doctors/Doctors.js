import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./Doctors.css";
import ShowDoctors from "./ShowDoctors";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("fake-doctor.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div className="doctors">
      <Container>
        <h2>Our Doctors</h2>
        <Row xs={1} md={3} className="g-4">
          {doctors.map((doctor) => (
            <ShowDoctors doctor={doctor} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Doctors;
