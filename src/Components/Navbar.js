import React, { useState } from "react";
import { Link } from "react-router-dom";
import Guitar from "../guitar.jpg";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/">
          <img src={Guitar} alt="guitarLogo" className="logoImage" />
        </Link>

        <span style={{ fontSize: "20px", fontWeight: "600" }}>Heyaband</span>
      </div>

      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/tour">Tour</Link>
        <Link to="/">Album</Link>
        <Link to="/">Contact</Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
