import React, { useState } from "react";
import "./Navbar.css";
import menuIcon from "../../assets/icons/menu-icon.png";
import { Link, animateScroll as scroll, scrollSpy } from "react-scroll";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className="nav-container">
      <h1 className="nav-h1">NB</h1>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={0} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} offset={0} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="project" smooth={true} offset={0} duration={500}>
            Projects{" "}
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={0} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <img src={menuIcon} alt="menu icon" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
