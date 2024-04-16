import React, { useState } from "react";
import "./Navbar.css";
import menuIcon from "../../assets/icons/menu-icon.png";
import DevIcon from "../../assets/icons/dev.png";
import GitHubIcon from "../../assets/icons/github.png";
import LinkedinIcon from "../../assets/icons/linkedin.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className="nav-container">
      <h1 className="nav-h1">NB</h1>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <a a href="https://github.com/NadiasCodes" target="blank">
          <li>
            <img src={GitHubIcon} alt="" className="social-icon" />
          </li>
        </a>
        <a a href="https://www.linkedin.com/in/nadia-bouli/" target="blank">
          <li>
            <img src={LinkedinIcon} alt="" className="social-icon" />
          </li>
        </a>
        <a a href="https://dev.to/nadiafedev" target="blank">
          <li>
            <img src={DevIcon} alt="" className="social-icon" />
          </li>
        </a>
        <li>
          <button className="btn-hero">Contact</button>
        </li>
      </ul>
      <img src={menuIcon} alt="menu icon" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
