import React from "react";
import "./skillsCard.css";

var desiredSkills = ["API", "Bootstrap", "Javascript", "Node", "React"];
var desiredSkillsList = desiredSkills.map((skill) => <li>{skill}</li>);

const SkillsCard = (props) => {
  return (
    <div>
      <h2 className="banner text-center">Desired Skills</h2>
      <div className="container-fluid d-flex justify-content-center">
        <div className="profileCard text-center justify-content-center">
          <div className="profileCard-body">
            <ul className="skills text-center">{desiredSkillsList}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
