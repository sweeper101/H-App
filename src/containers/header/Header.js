import React from "react";
import "./header.css";

const Header = () => (
  <div className="section">
    <div className="circle"></div>
    <div className="header section__padding" id="home">
      <div className="header-content">
        <h1 className="gradient__text">
          The Delivery Platform For All Services.
        </h1>
        <p>
          Your Favourite Neighborhood services <br />
          right at your fingerprints
        </p>

        <div className="header-content__input">
          <button type="button">Get Started</button>
        </div>
      </div>

      <div className="header-image">
        <img src="./PinClipart.com_no-cell-phone-clip_2129001.png" />
      </div>
    </div>
  </div>
);

export default Header;
