import { React, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./DoctorsHome.css";
import ShowDoctorsHome from "./ShowDoctorsHome";
const Doctorshome = () => {
  const [homeDoctor, sethomeDoctor] = useState([]);
  useEffect(() => {
    fetch("fake-doctor.json")
      .then((res) => res.json())
      .then((data) => sethomeDoctor(data));
  }, []);
  console.log(homeDoctor);
  const sliceHomeDoctor = homeDoctor.slice(0, 3);
  return (
    <div className="homeDoctor">
      <Container>
        <h2>Our Best Doctors</h2>
        <Row xs={1} md={3} className="g-4">
          {sliceHomeDoctor.map((doctors) => (
            <ShowDoctorsHome doctors={doctors} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Doctorshome;
