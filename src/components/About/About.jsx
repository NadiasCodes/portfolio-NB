import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import CertificateSlider from "../Carousel/CertificateSlider";

import "./About.css";

const About = () => {
  AOS.init();
  return (
    <section className="MyStory">
      <Container className="container-box">
        <Row className="align-items-center row-responsive">
          <Col xs={12} md={6} xl={6}>
            <CertificateSlider />
          </Col>

          <Col xs={12} md={6} xl={6} className="col-component">
            <h1 className="default-header " data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="600" data-aos-easing="ease-in-sine">
              About Me:
            </h1>
            <p data-aos="fade-right" data-aos-duration="360" data-aos-easing="ease-in-sine">
              After completing my front-end developer Bootcamp and earning my certification, I discovered a deep affinity for React. Since then, I have devoted myself to refining my skills and broadening my knowledge of React, while exploring complementary frameworks such as Tailwind CSS, Next.js, and Framer Motion to expand my skill set and build more versatile, high-performance applications.
              <br />
              <br />
              My primary goal is to contribute my skills in creating visually captivating and user-friendly web experiences. I consistently ensure that my code is clean and well-organized. Driven by a passion for continuous learning and self-improvement, I am committed to staying up-to-date with the latest industry trends and best practices.
              <br />
              <br />
              During my free time, I mainly like to pursue personal coding projects. Aside that, I love going for walks, exercising, improving my German skills, watching TV series, reading books & playing video games. Lastly, I have a deep love for cats and plants.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
