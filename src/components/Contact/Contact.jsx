import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DevIcon from "../../assets/icons/dev.png";
import GitHubIcon from "../../assets/icons/github.png";
import LinkedinIcon from "../../assets/icons/linkedin.png";
import "./Contact.css";

const Contact = () => {
  AOS.init();
  return (
    <section className="contact" id="contact">
      <Container className="container-box">
        <Row >
          <Col xs={12} md={6} xl={7}>
            <h1 className="default-header">Let's work together</h1>

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
            <form>
              <div className="contact-box" id="contact">
                <label>Your email</label>
                <input type="email" name="user-mail" placeholder="Enter your email" className="input-contact" required />
                <label>Your name</label>
                <input type="text" name="user-name" placeholder="Enter your name" className="input-contact" required />
                <label>Your message</label>
                <textarea name="message" placeholder="Your Message" rows="8" />
                <button type="submit" className="contact-button">
                  Submit{" "}
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
