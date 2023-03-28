import React, { useState } from "react";
import "./skillsCard.css";
import "../skillsInput/skillsInput.css";

var desiredSkills = JSON.parse(localStorage.getItem("skillsInfo")) || [];
var desiredSkillsList = desiredSkills.map((skill) => (
  <li>{skill.skillsInput}</li>
));

function SkillsCard() {
  const [skillsInput, setSkillsInput] = useState("");

  function PlaceholderInfo() {
    const placeholderInfo = [
      {
        skillsInput: "Skills2"
      },
    ];
    localStorage.setItem("skillsInfo", JSON.stringify(placeholderInfo));
  };

  PlaceholderInfo();

  function SaveSkills() {
    const skillsInfo = [
      {
        skillsInput: skillsInput,
      },
    ];

    let stored = JSON.parse(localStorage.getItem("skillsInfo")) || [];
    console.log({ stored });
    stored = [...stored, ...skillsInfo];
    desiredSkills = stored;
    console.log(stored);
    localStorage.setItem("skillsInfo", JSON.stringify(stored));
    console.log({ stored });
  }

  return (
    <div>
      <div>
        <h2 className="banner text-center">Add skills you want gain</h2>
        <div className="card text-center">
          <div className="card-body text-dark">
            <input
              className="input"
              placeholder="Add a skill"
              onChange={(event) => {
                setSkillsInput(event.target.value);
              }}
            ></input>
            <button className="btn" onClick={SaveSkills}>
              Save your skill
            </button>
            <button className="btn">Clear your skills</button>
          </div>
        </div>
        /
      </div>

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
}


export default SkillsCard;
