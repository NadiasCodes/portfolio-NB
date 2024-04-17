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
      <div class="container-box container text-center">
        <h1 class="default-header  text-center" data-aos="flip-up" data-aos-duration="2000" data-aos-offset="400">
          My Skills:
        </h1>
        <div className="skills-icons-box" data-aos="fade-right" data-aos-duration="1200" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <div class="row mt-5">
            <div class="col-lg mb-5">
              <img src={html} className="img-fluid icon-skill icon-hover" />
            </div>

            <div class="col-lg mb-5">
              <img src={css} className="img-fluid icon-skill" />
            </div>
            <div class="col-lg mb-4">
              <img src={javascript} className="img-fluid icon-skill" />
            </div>

            <div class="col-lg mb-4">
              <img src={bootstrap} className="img-fluid icon-skill" />
            </div>

            <div class="col-lg mb-4">
              <img src={tailwind} className="img-fluid icon-skill" />
            </div>

            <div class="col-lg mb-4">
              <img src={responsive} className="img-fluid icon-skill" />
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-lg mb-4">
              <img src={reactjs} className="img-fluid icon-skill" />
            </div>
            <div class="col-lg mb-4">
              <img src={git} className="img-fluid icon-skill" />
            </div>
            <div class="col-lg mb-4">
              <img src={api} className="img-fluid icon-skill" />
            </div>

            <div class="col-lg mb-4">
              <img src={canva} className="img-fluid icon-skill" />
            </div>

            <div class="col-lg mb-4">
              <img src={figma} className="img-fluid icon-skill" />
            </div>
            <div class="col-lg mb-4">
              <img src={invision} className="img-fluid icon-skill" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
