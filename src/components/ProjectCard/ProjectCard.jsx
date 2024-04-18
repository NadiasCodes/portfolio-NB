import { Col } from "react-bootstrap";
import "./ProjectCard.css";
import gitHub from "../../assets/icons/github-tab.png";
import previewProject from "../../assets/icons/preview.png";
import { BsArchiveFill } from "react-icons/bs";

export const ProjectCard = ({ title, description, imgUrl, repo, preview }) => {
  AOS.init();
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgBox" data-aos="fade-right" data-aos-duration="2000">
        <img src={imgUrl} className="img-fluid" />
        <div className="proj-txt">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="repository-links">
            <a href={repo} target="blank">
              <img src={gitHub} alt="" className="image-responsive" />
            </a>
            <a href={preview} target="blank">
              <img src={previewProject} alt="" className="image-responsive" />
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
