import React from "react";
import "./Skills.css";
import api from "../../assets/tech/api.png";
import bootstrap from "../../assets/tech/bootstrap.png";
import canva from "../../assets/tech/canva.png";
import css from "../../assets/tech/css.png";
import figma from "../../assets/tech/figma.png";
import git from "../../assets/tech/git.png";
import html from "../../assets/tech/html.png";
import invision from "../../assets/tech/invision.png";
import javascript from "../../assets/tech/javascript.png";
import reactjs from "../../assets/tech/reactjs.png";
import responsive from "../../assets/tech/responsive.png";
import tailwind from "../../assets/tech/tailwind.png";

const Skills = () => {
  AOS.init();
  return (
    <section className="skills-box">
      <div className="container-box container text-center">
        <h1 className="default-header  text-center" data-aos="fade-down" ata-aos-duration="1500">
          My Skills:
        </h1>
        <div className="skills-icons-box" data-aos="fade-right" data-aos-duration="2400" data-aos-easing="ease-in-sine">
          <div className="row mt-5">
            <div className="col-lg col-md-2 mb-5">
              <img src={html} className="img-fluid icon-skill icon-hover" />
            </div>

            <div className="col-lg col-md-2 mb-5">
              <img src={css} className="img-fluid icon-skill" />
            </div>
            <div className="col-lg col-md-2 mb-4">
              <img src={javascript} className="img-fluid icon-skill" />
            </div>

            <div className="col-lg col-md-2 mb-4">
              <img src={bootstrap} className="img-fluid icon-skill" />
            </div>

            <div className="col-lg col-md-2 mb-4">
              <img src={tailwind} className="img-fluid icon-skill" />
            </div>

            <div className="col-lg col-md-2 mb-4">
              <img src={responsive} className="img-fluid icon-skill" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg  col-md-2 mb-4">
              <img src={reactjs} className="img-fluid icon-skill" />
            </div>
            <div className="col-lg col-md-2 mb-4">
              <img src={git} className="img-fluid icon-skill" />
            </div>
            <div className="col-lg col-md-2 mb-4">
              <img src={api} className="img-fluid icon-skill" />
            </div>

            <div className="col-lg col-md-2 mb-4">
              <img src={canva} className="img-fluid icon-skill" />
            </div>

            <div className="col-lg col-md-2 mb-4">
              <img src={figma} className="img-fluid icon-skill" />
            </div>
            <div className="col-lg col-md-2 mb-4">
              <img src={invision} className="img-fluid icon-skill" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
