import React from "react";
import "./services.css";
import Carousel from "react-bootstrap/Carousel";

const Header = () => (
  <div className="services section__padding" id="home">
    <div className="services-content">
      <h1 className="gradient__text">Register Your Business</h1>
      <p>
        If you’re a registered business <br />
        and want to use the App to sell your services online,
        <br /> register free today!!
      </p>
    </div>
    <div className="services-image">
      <img src="./community.png" />
    </div>
  </div>
);

export default Header;
