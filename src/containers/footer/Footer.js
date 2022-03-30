import React from "react";
import gpt3Logo from "../../logo.svg";
import "./footer.css";

const Footer = () => (
  <div className="footer section__padding">
    {/* <div className="footer-heading">
      <h1>Connect with your local community in one place</h1>
    </div> */}

    <div className="footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="footer-links">
      <div className="footer-links_logo">
        {/* <img src= alt="gpt3_logo" /> */}
        <p>
          {/* Crechterwoord K12 182 DK Alknjkcb,  */}
          <br /> All Rights Reserved
        </p>
      </div>
      <div className="footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Get in touch</h4>
      </div>
    </div>

    <div className="footer-copyright">
      <p>@2022 Hollar. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
