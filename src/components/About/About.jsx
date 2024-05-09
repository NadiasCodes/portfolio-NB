import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import CertificateSlider from "../Carousel/CertificateSlider";

import "./About.css";

const About = () => {
  AOS.init();
  return (
    <section className="MyStory" id="about">
      <Container className="container-box">
        <Row className="align-items-center row-responsive">
          <Col xs={12} md={6} xl={6}>
            <CertificateSlider />
          </Col>

          <Col xs={12} md={6} xl={6} className="col-component">
            <h1 className="default-header " data-aos="fade-up" data-aos-duration="3000">
              About Me:
            </h1>
            <p data-aos="fade-left" data-aos-duration="360" data-aos-easing="ease-in-sine">
              I'm Nadia, originally from Greece but having spent the last seven years abroad, immersing myself in diverse cultures and professional experiences. My journey started in Amsterdam, where I honed my leadership skills as a Store Manager for two years. However, it was my move to Germany in 2019 that marked a pivotal transformation in my career.
              <br />
              <br />
              My relocation to Germany was very challenging. I started learning German immediately but my plans got changed due to pandemic and unforeseen natural disasters. Despite these obstacles, I was keep moving forward. While I initially pursued various mini-jobs to sustain myself, sadly I barely had any career opportunities, but I knew my potential was far greater. <br />
              <br />I was always a creative person. I was spenting countless hours designing and creating stuff using Canva but I always felt that I can do more. In 2023, I decided to pursue coding, a field where I could leverage my creativity and energy to the fullest. Investing my time in a rigorous BootCamp, I delved into the world of programming, graduating in February as a Front-end developer.
              <br />
              <br />
              Now, armed with a diversed of skills & experiences, fluent in English and advanced in German, I am trying to finally make a significant impact. I'm eager to explore diverse opportunities that align with my aspirations for personal and professional growth.
              <br />
              <br />I am determined to pursue my dreams and goals, and I am more than willing to relocate for the right opportunity. All I am seeking is a chance, where I can channel my skills, energy, and determination towards meaningful endeavors.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
