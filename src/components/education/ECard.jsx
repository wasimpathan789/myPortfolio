import "./ECard.css";
import cap from "../../assets/educaiton/cap.svg";
const ECard = ({ id, institution, course, startYear, endYear }) => {
  return (
    <div key={id} className="education-card">
      <div className="educard-img">
        <img src={cap} alt="" />
      </div>
      <div className="education-details">
        <h6 className="educationDetailsH60">
          {startYear}-{endYear}
        </h6>
        <h4>{course}</h4>
        <h5>{institution}</h5>
      </div>
    </div>
  );
};

export default ECard;
