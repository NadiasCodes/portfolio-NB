import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./CertificateSlider.css";

const CertificateSlider = () => {
  return (
    <Carousel fade interval={null} className="carousel" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine">
      <Carousel.Item>
        <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/123/491/original/front-end-developerpng.png?1713346400" className=" img-responsive" alt="web development certificate" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/123/492/original/Introduction_to_Coding.png?1713346407" className=" img-responsive" alt="web development certificate" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/123/497/original/Web_Development.png?1713346446" className=" img-responsive" alt="web development certificate" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/123/487/original/Advanced_web_development.png?1713346370" className=" img-responsive" alt="web development certificate" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/123/496/original/responsive.png?1713346437" className=" img-responsive" alt="web development certificate" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/123/486/original/Advanced_responsive_web_development.jpg?1713346328" className=" img-responsive" alt="web development certificate" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/123/494/original/React.png?1713346423" className=" img-responsive" alt="web development certificate" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/123/495/original/React-Add-On.png?1713346429" className=" img-responsive" alt="web development certificate" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/123/489/original/Canva_Graphic_Design_Mastercalss.jpg?1713346384" className=" img-responsive" alt="web development certificate" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/123/490/original/Digital_Marketing_Masterclass.jpg?1713346393" className=" img-responsive" alt="web development certificate" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CertificateSlider;
