import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import "./Projects.css";
import project1 from "../../assets/projects/project1.jpg";
import project2 from "../../assets/projects/project2.jpg";
import project3 from "../../assets/projects/project3.jpg";
import project4 from "../../assets/projects/project4.jpg";
import project5 from "../../assets/projects/project5.jpg";
import project6 from "../../assets/projects/project6.jpg";
import project7 from "../../assets/projects/project7.jpg";
import tabColor from "../../assets/tab-color/tab-color1.png";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import TrackVisibility from "react-on-screen";
import "animate.css";

const Projects = () => {
  AOS.init();
  const figmaProjects = [
    {
      title: "Photography Portfolio",
      description: "Built in React",
      imgUrl: project7,
      repo: "https://github.com/NadiasCodes/Figma-Design-Into-Code-Photography-Portfolio",
      preview: "https://photography-portfolio-psi-rose.vercel.app/",
    },
  ];

  const projects = [
    {
      title: "Weather React Application",
      description: "Built in | React",
      imgUrl: project1,
      repo: "https://github.com/NadiasCodes/react-forecast-application",
      preview: "https://react-forecast-app.vercel.app/",
    },
    {
      title: "E-Commerce React Website",
      description: "Built in | React",
      imgUrl: project2,
      repo: "https://github.com/NadiasCodes/e-commerce-website-react",
      preview: "https://e-commerce-clothing-store-react.vercel.app/",
    },

    {
      title: "Dictionary React Application",
      description: "Built in | React",
      imgUrl: project3,
      repo: "https://github.com/NadiasCodes/dictionary-project",
      preview: "https://react-dictionary-project.vercel.app/",
    },

    {
      title: "AI Book Quote Generator Application",
      description: "Built with | HTML, CSS and, JavaScript",
      imgUrl: project4,
      repo: "https://github.com/NadiasCodes/AI-Quote-Generator",
      preview: "https://ai-quote-generator-pied.vercel.app/",
    },
    {
      title: "Landing Travel Page",
      description: "Built with | HTML & CSS",
      imgUrl: project5,
      repo: "https://github.com/NadiasCodes/Responsive-Add-On-Project",
      preview: "https://travel-destination-project.vercel.app/",
    },

    {
      title: "Landing Interior Design Services Page",
      description: "Built with | HTML, CSS and, JavaScript",
      imgUrl: project6,
      repo: "https://github.com/NadiasCodes/Responsive-Website---Interior-Design-Services",
      preview: "https://responsive-website-interior-design-services.vercel.app/",
    },
  ];

  return (
    <section className="project-box" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1 className="default-header text-center pb-3" data-aos="fade-up" data-aos-duration="3000">
                    My Projects
                  </h1>
                  <hr />
                  <p className="project-text" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    My portfolio showcases a diverse range of web development projects built using technologies such as HTML, CSS, JavaScript, React, and Bootstrap. Each project demonstrates a strong understanding of UI/UX principles, responsive design, and seamless user experiences. As I continue to expand my skill set, the portfolio will evolve to include advanced projects leveraging cutting-edge frameworks like Tailwind CSS, Framer Motion, and Next.js, highlighting my commitment to staying up-to-date with the latest industry trends and best practices.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">My Work</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Figma into Code</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {figmaProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
