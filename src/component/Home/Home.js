import React from "react";
import Banner from "./Banner/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import Doctorshome from "./DoctorsHome/DoctorsHome";
import HomeService from "./HomeService/HomeService";
import AboutUs from "./AboutUs/AboutUs";
import Counter from "./Counter/Counter";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Doctorshome></Doctorshome>
      <HomeService></HomeService>
      <AboutUs></AboutUs>
      <Counter></Counter>
    </div>
  );
};

export default Home;
