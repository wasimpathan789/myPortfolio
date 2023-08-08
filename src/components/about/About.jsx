import "./About.css";
import wasim from "../../assets/wasim.jpg";
import { aboutData } from "./AboutData";

const About = () => {
  return (
    <div>
      <div
        className="about"
        id="about"
        // style={{ backgroundColor: theme.secondary }}
      >
        <div className="line-styling">
          <div
            className="style-circle"
            // style={{ backgroundColor: theme.primary }}
          ></div>
          <div
            className="style-circle"
            // style={{ backgroundColor: theme.primary }}
          ></div>
          <div
            className="style-line"
            // style={{ backgroundColor: theme.primary }}
          ></div>
        </div>
        <div className="about-body">
          <div className="about-description">
            <h2>{aboutData.title}</h2>
            <p>
              {aboutData.description1}
              <br />
              <br />
              {aboutData.description2}
            </p>
          </div>
          <div className="about-img">
            <img src={wasim} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
