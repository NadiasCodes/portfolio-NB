import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { BsArrowRightCircle } from "react-icons/bs";
import coder from "../../assets/hero-images/nadia2.png";
import DevIcon from "../../assets/icons/dev.png";
import GitHubIcon from "../../assets/icons/github.png";
import LinkedinIcon from "../../assets/icons/linkedin.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              Hi, I'm Nadia a
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("Front-End developer").pauseFor(100).deleteAll().typeString("React developer").start();
                }}
              />
            </h1>
            <p>Junior front-end developer, proficient in React, with a keen interest in expanding skills in Tailwind CSS, Next.js, and Framer Motion. Dedicated to creating visually appealing, user-friendly web experiences through clean, organized code and a passion for continuous learning."</p>

            <div className="social-icons-container">
              <a href="#">
                <img src={GitHubIcon} alt="" className="social-icon" />
              </a>

              <a href="#">
                <img src={LinkedinIcon} alt="" className="social-icon" />
              </a>

              <a href="#">
                <img src={DevIcon} alt="" className="social-icon" />
              </a>
            </div>
            <button className="main-button">
              Contact Me <BsArrowRightCircle size={25} className="arrow" />
            </button>
            <div className="button-container">
              <button className="main-button">
                My Projects <BsArrowRightCircle size={25} className="arrow" />
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={coder} alt="hero image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
