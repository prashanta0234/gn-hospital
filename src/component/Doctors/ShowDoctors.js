import React from "react";
import { Card, Col } from "react-bootstrap";

const ShowDoctors = ({ doctor }) => {
  console.log(doctor);
  const { name, image, degree } = doctor;
  return (
    <div className="doctor-cards">
      <Col>
        <Card className="doctor-card mx-auto">
          <Card.Img variant="top" src={image} className="mx-auto" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text className="degree">{degree}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default ShowDoctors;
