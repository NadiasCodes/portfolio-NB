import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { Container, Row, Col } from "react-bootstrap";
import DevIcon from "../../assets/icons/dev.png";
import GitHubIcon from "../../assets/icons/github.png";
import LinkedinIcon from "../../assets/icons/linkedin.png";
import EmailIcon from "../../assets/icons/mail.svg";
import EmailEnvelope from "../../assets/icons/mail-envelope.png";
import "./Contact.css";

const Contact = () => {
  AOS.init();
  const { register, reset, handleSubmit } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const accessKey = "c632252e-b52c-44d0-96b5-02b2161df3e5";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "",
      subject: "New Message",
    },

    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
      setErrorMessage(null);
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
      setErrorMessage("Oops, something went wrong");
    },
  });

  return (
    <section className="contact" id="contact">
      <Container className="container-box">
        <Row>
          <Col xs={12} md={6} xl={7}>
            <h1 className="default-header contact-h1" data-aos="fade-down" ata-aos-duration="1500">
              Let's work together
            </h1>

            <p data-aos="fade-right" data-aos-duration="1200" data-aos-offset="300" data-aos-easing="ease-in-sine" className="contact-text">
              I am eager to connect with you for collaboration, feedback, or inquiries regarding my work. I look forward to hearing from you! Feel free to reach out via the contact form or directly through email, according to your preference.
            </p>

            <div className="social-icons-container" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <a href="https://github.com/NadiasCodes" target="blank">
                <img src={GitHubIcon} alt="" className="social-icon contact-icon" />
              </a>

              <a href="https://www.linkedin.com/in/nadia-bouli/" target="blank">
                <img src={LinkedinIcon} alt="" className="social-icon contact-icon" />
              </a>

              <a href="https://dev.to/nadiafedev" target="blank">
                <img src={DevIcon} alt="" className="social-icon contact-icon" />
              </a>
              <a href="mailto:nb.dev@hotmail.com" target="blank">
                <img src={EmailEnvelope} alt="" className="social-icon contact-icon" />
              </a>
            </div>
            <div>
              <img src={EmailIcon} alt="email-icon" className="img-fluid mail-icon" data-aos="fade-right" data-aos-duration="2400" data-aos-easing="ease-in-sine" />
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="contact-box" id="contact" data-aos="fade-right" data-aos-duration="2400" data-aos-easing="ease-in-sine">
                <label>Your Email</label>
                <input type="email" name="user-mail" placeholder="Enter your email" className="input-contact" {...register("email", { required: true })} />
                <label>Your Name</label>
                <input type="text" name="user-name" placeholder="Enter your name" className="input-contact" {...register("name", { required: true })} />
                <label>Write your message here</label>
                <textarea name="message" placeholder="Your Message" rows="8" {...register("message", { required: true })} />
                <button type="submit" className="submit-btn">
                  Submit
                </button>
                {isSuccess && <div className="success-message">Your email has been sent successfully!</div>}
                {errorMessage && <div className="error-message">{errorMessage}</div>}
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
