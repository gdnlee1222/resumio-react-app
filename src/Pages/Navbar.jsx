import React from "react";
import logo from "../assets/resumio-logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import external CSS file

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-auto image-logo">
            <Link to="/">
              <img src={logo} alt="Resumio Logo" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
