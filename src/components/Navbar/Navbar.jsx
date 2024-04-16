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

        <button className="btn-hero">Contact</button>
      </ul>
      <img src={menuIcon} alt="menu icon" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
