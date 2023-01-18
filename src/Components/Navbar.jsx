import React from "react";
import "./css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" id="checkIcon">
        ≡
      </label>
      <ul className="menuList">
        <li>
          <Link to="/Agency-Website/">Home</Link>
        </li>
        <li>
          <Link to="/Agency-Website/Services">Services</Link>
        </li>
        <li>
          <Link to="/Agency-Website/AboutUs">About Us</Link>
        </li>
        <li>
          <Link to="/Agency-Website/ContactUs">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
