import "./Experience.css";
import ECard from "../education/ECard";
import { ExperienceData } from "./ExperienceData";
import experience from "../../assets/experience.png";
import cap from "../../assets/educaiton/cap.svg";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <div className="experience-body">
        <div className="experience-image">
          <img src={experience} alt="" />
        </div>
        <div className="experience-description">
          <h1>Experience</h1>
          <div className="experienceWrapper">
            {ExperienceData.map((exp) => (
              <ECard
                key={exp.id}
                id={exp.id}
                institution={exp.institution}
                course={exp.course}
                startYear={exp.startYear}
                endYear={exp.endYear}
              />
            ))}
            <div className="experience-response">
              <h1>Responsibilties</h1>

              <div className="experience-roles">
                <p>Having a good knowledge of React js.</p>
                <p>Fetching api data.</p>
                <p>
                  Ensure that the website front end is free from errors and
                  bugs.
                </p>
                <p>
                  Responsive web design by using React, Tailwind CSS, HTML5,
                  CSS3.
                </p>
              </div>
            </div>
            <div className="experience-response">
              <h1>Responsibilties</h1>

              <div className="experience-roles">
                <p>Co-ordinated with web development team and design team.</p>
                <p>Pushing and pulling code to GitHub repo.</p>
                <p>Ensuring web design is optimised for smartphones.</p>
                <p>Optimizing web page for maximum speed and stability.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
