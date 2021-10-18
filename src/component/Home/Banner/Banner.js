import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../image/banner/banner1.jpg";
import banner2 from "../../../image/banner/banner2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospitalAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Banner = () => {
  const hospital = (
    <FontAwesomeIcon
      icon={faHospitalAlt}
      style={{ color: "#2ec1e5" }}
    ></FontAwesomeIcon>
  );
  return (
    <div className="banner">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <div className="banner-text">
            <h1>We Ensure</h1>
            <div className="weEnsure">
              <span>{hospital} Good service</span>
              <span> {hospital} 24/7 Suport</span>
              <span>{hospital} Free Madicen</span>
              <span>{hospital} Free Ambulance Services</span>
            </div>
            <Link to="/services">
              <button>Services</button>
            </Link>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <div className="banner-text">
            <h1>Doctors</h1>
            <h6>
              Our all doctors have exprience more than 4 years. <br /> They all
              are MBBS Doctor.
            </h6>
            <Link to="/doctors">
              <button>Doctors</button>
            </Link>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
