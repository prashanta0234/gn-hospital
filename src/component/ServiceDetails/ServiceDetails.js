import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { id } = useParams();

  const [detailsService, setDetailsService] = useState([]);
  const [show, setShow] = useState({});

  useEffect(() => {
    fetch("/fake-services.json")
      .then((res) => res.json())
      .then((data) => setDetailsService(data));
  }, []);

  useEffect(() => {
    const findServices = detailsService.find((services) => services.id === id);
    console.log(findServices);
    setShow(findServices);
  }, [detailsService]);
  // console.log(show);
  // const { name, description, image } = show;
  return (
    <div className="show-service">
      <img src={show?.image} alt="" />
      <h3>{show?.name}</h3>
      <h6>{show?.description}</h6>
    </div>
  );
};

export default ServiceDetails;
