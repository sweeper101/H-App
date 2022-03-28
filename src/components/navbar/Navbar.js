import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import {
  AiOutlineSearch,
  AiOutlineSetting,
  AiOutlineLogin,
} from "react-icons/ai";

import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar_container">
      <div className="navbar">
        <div className="navbar_links_left">
          <a href="/" className="navbar_links_logo">
            <img src="./H.png" />
            <h1>Hollar</h1>
          </a>
          <div className="navbar_links_middle">
            <div className="navbar_links_middle_section">
              <div className="navbar_links_middle_input">
                <div className="svg">
                  <div className="svg_img">
                    <AiOutlineSearch />
                  </div>
                </div>
              </div>
              <input placeholder="Search post code" className="input" />
            </div>
          </div>
        </div>

        <ul className="navbar_links_container">
          <div className="navbar_links_container_links">
            <li>
              <a href="/market">About</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <Link to="/contact">
              <li>
                <a>Contact</a>
              </li>
            </Link>
          </div>
        </ul>
      </div>
      <div className="navbar-sign">
        <Link to="/login">
          <button type="button" className="login">
            login
          </button>
        </Link>
        <Link to="/register">
          <button type="button" className="signup">
            Sign up
          </button>
        </Link>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#ec0000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#ec0000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <p>
                <Link to="/market">
                  {" "}
                  <a href="#home">About us</a>{" "}
                </Link>
              </p>
              <p>
                <a href="#wgpt3">Services</a>
              </p>
              <p>
                <Link to="/login">
                  <a href="#possibility">Contact us</a>{" "}
                </Link>
              </p>
            </div>
            <div className="navbar-menu_container-links-sign">
              <Link to="/login">
                <p>Account</p>{" "}
              </Link>
              <Link to="/login">
                <button type="button">Settings</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
