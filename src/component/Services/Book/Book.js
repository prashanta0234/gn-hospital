import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./Book.css";

const Book = () => {
  return (
    <div>
      <Container className="booking-input mx-auto">
        <h3 className="py-4">Booking Data</h3>
        <Form>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Form.Control type="text" placeholder="Name" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Age" />
            </Col>
            <Col>
              <Form.Select aria-label="Default select example">
                <option>Class</option>
                <option value="1">1St Class</option>
                <option value="2">2nd Class</option>
                <option value="3">Normal</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Group controlId="duedate">
                <Form.Control
                  type="date"
                  name="duedate"
                  placeholder="Due date"
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="booking-btn">
            <button>Booking</button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Book;
