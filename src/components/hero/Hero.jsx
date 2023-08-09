import "./Hero.css";
import wasimphoto from "../../assets/wasimphoto.jpg";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaBlogger,
} from "react-icons/fa";
import { socialsData, headerData } from "./HeroData";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="landing">
      <div className="landingContainer">
        <div className="landingContainerLeft">
          <div className="lcl--content">
            {socialsData.linkedIn && (
              <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                <FaLinkedin className="landing--social" aria-label="LinkedIn" />
              </a>
            )}
            {socialsData.github && (
              <a href={socialsData.github} target="_blank" rel="noreferrer">
                <FaGithub className="landing--social" aria-label="GitHub" />
              </a>
            )}
            {socialsData.twitter && (
              <a href={socialsData.twitter} target="_blank" rel="noreferrer">
                <FaTwitter className="landing--social" aria-label="Twitter" />
              </a>
            )}
            {socialsData.youtube && (
              <a href={socialsData.youtube} target="_blank" rel="noreferrer">
                <FaYoutube className="landing--social" aria-label="YouTube" />
              </a>
            )}
            {socialsData.blogger && (
              <a href={socialsData.blogger} target="_blank" rel="noreferrer">
                <FaBlogger className="landing--social" aria-label="Blogger" />
              </a>
            )}
          </div>
        </div>
        <img src={wasimphoto} alt="" className="landing--img" />
        <div className="landingContainerRight">
          <div className="landingContent">
            <h6>{headerData.title}</h6>
            <h1>{headerData.name}</h1>
            <p>{headerData.desciption}</p>

            <div className="landingContentButton">
              {headerData.resumePdf && (
                <a
                  href={headerData.resumePdf}
                  download="resume"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="download-btn">Download CV</button>
                </a>
              )}
              <Link to="/#contacts" smooth={true} spy="true" duration={2000}>
                <button className="contact-btn">Contact </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
