import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShowServices = ({ services }) => {
  const { name, icon, description, id } = services;
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
              <Link to={`/servicedetail/${id}`}>
                <button>Details</button>
              </Link>
              &nbsp;
              <Link to="/book">
                <button>Book</button>
              </Link>
            </div>
          </div>
        </Card>
      </Col>
    </div>
  );
};

export default ShowServices;
