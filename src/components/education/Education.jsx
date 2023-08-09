import "./Education.css";
import { EducationData } from "./EducationData";
import education from "../../assets/education.png";
import ECard from "./ECard";
const Education = () => {
  return (
    <div className="education" id="resume">
      <div className="education-body">
        <div className="education-description">
          <h1>Education</h1>
          {/* <ECard /> */}
          {EducationData.map((edu) => (
            <ECard
              key={edu.id}
              id={edu.id}
              institution={edu.institution}
              course={edu.course}
              startYear={edu.startYear}
              endYear={edu.endYear}
            />
          ))}
        </div>
        <div className="education-image">
          <img src={education} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Education;
