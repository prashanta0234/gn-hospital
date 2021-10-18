import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./AboutUs.css";
import image from "../../../image/Green Hospital or Doctor Logo.png";
const AboutUs = () => {
  return (
    <div className="aboutUs">
      <Container>
        <h2>About Us</h2>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <div className="about-item">
              <img src={image} alt="" />
            </div>
          </Col>
          <Col>
            <div className="about-item">
              <h3>GN Hospital</h3>
              <p>
                Due to changes in the family structure — from the
                multi-generation family under one roof, to the nuclear family —
                many of us are facing challenges in caring for our elderly
                parents. This challenge increases if the children live in one
                part of the world, and the parents in another. Distance can make
                it difficult to assess a parent’s needs and get them the care
                they deserve. Capital Health Care is committed to helping you
                care for the health and well-being of your loved ones. We
                understand that nothing is better than being in the comfort of
                home, surrounded by family and friends. We can be there, when
                you can’t, to help your aging parents and other elderly family
                members live their golden years at home. Whether recovering from
                surgery, living with a chronic condition that may require
                on-going care, or for assistance with activities of daily
                living, Capital Health Care can help. Our expert, caring teams
                include: Registered and associate nurses Visiting doctors and
                medical consultants Medical care takers Physical and
                occupational therapist Trained attendants…and more. Our
                professional teams meet the highest quality health care
                standards because we take extra steps to ensure clinical
                excellence and safety.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
