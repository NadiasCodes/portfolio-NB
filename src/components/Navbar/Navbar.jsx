import React from "react";
import "./Navbar.css";
import logo from "../../assets/hero-images/logo.png"

const Navbar = () => {
  return (
    <nav className="nav-container">
      <h1>NB</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
