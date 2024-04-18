import React from "react";
import "./Contact.css";
import { Container, Row, Col } from "react-bootstrap";
import DevIcon from "../../assets/icons/dev.png";
import GitHubIcon from "../../assets/icons/github.png";
import LinkedinIcon from "../../assets/icons/linkedin.png";

const Contact = () => {
  AOS.init();
  return (
    <section className="contact" id="contact">
      <Container className="container-box">
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1 className="default-header">Contact Me</h1>

            <p data-aos="fade-right" data-aos-duration="1200" data-aos-offset="300" data-aos-easing="ease-in-sine">
              I am currently looking a place that I can grow as developer.
            </p>

            <div className="social-icons-container" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <a href="https://github.com/NadiasCodes" target="blank">
                <img src={GitHubIcon} alt="" className="social-icon" />
              </a>

              <a href="https://www.linkedin.com/in/nadia-bouli/" target="blank">
                <img src={LinkedinIcon} alt="" className="social-icon" />
              </a>

              <a href="https://dev.to/nadiafedev" target="blank">
                <img src={DevIcon} alt="" className="social-icon" />
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            Here goes the form
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
