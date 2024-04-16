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
  AOS.init();
  return (
    <section className="hero" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
              Welcome to my Portfolio
            </span>
            <h1 data-aos="fade-right" data-aos-duration="1500">
              Hi, I'm Nadia a
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("Front-End developer").pauseFor(100).deleteAll().typeString("React developer").start();
                }}
              />
            </h1>
            <p data-aos="fade-right" data-aos-duration="1200" data-aos-offset="300" data-aos-easing="ease-in-sine">
              Junior front-end developer, proficient in React, with a keen interest in expanding skills in Tailwind CSS, Next.js, and Framer Motion. Dedicated to creating visually appealing, user-friendly web experiences through clean, organized code and a passion for continuous learning.
            </p>

            <div className="social-icons-container" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
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
            <button className="btn-hero " data-aos="zoom-in-up" data-aos-duration="900">
              Contact Me <BsArrowRightCircle size={25} className="arrow" />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={coder} alt="hero image" className="coder" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
