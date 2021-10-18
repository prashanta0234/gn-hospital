import React from "react";
import { Card, Col } from "react-bootstrap";

const ShowServices = ({ services }) => {
  console.log(services);
  const { name, icon, description } = services;
  return (
    <div>
      <Col>
        <Card className="service-card mx-auto">
          <div className="serviceCard">
            <div className="item">
              <img src={icon} width="150" height="150" alt="img" />
            </div>
            <div className="item">
              <h4>{name}</h4>
              <h6>{description.slice(0, 50)}</h6>
              <button>Details</button>
            </div>
          </div>
        </Card>
      </Col>
    </div>
  );
};

export default ShowServices;
