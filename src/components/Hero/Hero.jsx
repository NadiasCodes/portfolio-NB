import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { BsArrowRightCircle } from "react-icons/bs";
import coder from "../../assets/hero-images/nadia2.png"
import "./Hero.css";


const Hero = () => {
  return (
    <section className="hero" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              Hi I'm Nadia a
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("Front-End developer").pauseFor(100).deleteAll().typeString("React developer").start();
                }}
              />
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, obcaecati nemo soluta quidem error possimus cum? Praesentium atque, asperiores harum id tempora sunt ullam quasi cupiditate nostrum assumenda maiores distinctio.</p>

            <button>
              Contact Me <BsArrowRightCircle size={25} />
            </button>
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
