import "./Skills.css";
import Marquee from "react-fast-marquee";
import { SkillsData } from "./SkillsData";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skillsHeader">
        <h2>Skills</h2>
      </div>
      <div className="skillsContainer">
        <div className="skill--scroll">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {SkillsData.map((skill, id) => (
              <div className="skill--box" key={id}>
                <img src={skill.image} />
                <h3>{skill.title}</h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Skills;
