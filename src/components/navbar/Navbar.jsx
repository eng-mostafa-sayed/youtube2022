import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faFlagUsa } from "@fortawesome/free-solid-svg-icons";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Booking.com</span>
        <div className="navItems">
          <stong>EGP</stong>
          <FontAwesomeIcon icon={faFlagUsa} />
          <FontAwesomeIcon icon={faCircleQuestion} />
          <button className="navButton">Register</button>
          <button className="navButton">login</button>
        </div>
      </div>
    </div>
  );
};
