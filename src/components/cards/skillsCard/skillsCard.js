import React, { useState } from "react";
import "./skillsCard.css";

const SkillsCard = (props) => {
  const [skillsInput, setSkillsInput] = useState("");

  // Clear Skills
  function ClearSkills() {
    localStorage.setItem("skillsInfo", "");
  }

  function PlaceholderInfo() {
    if (JSON.parse(localStorage.getItem("skillsInfo")) === [""]) {
      const placeholderInfo = [
        {
          skillsInput: "Skills",
        },
      ];
      localStorage.setItem("skillsInfo", JSON.stringify(placeholderInfo));
    }
  }
  PlaceholderInfo();
  // Save Skills
  function SaveSkills(event) {
    event.preventDefault();
    const skillsInfo = [
      {
        skillsInput: skillsInput,
      },
    ];

    // Skills Placeholder

    let stored = JSON.parse(localStorage.getItem("skillsInfo")) || [];

    stored = [...stored, ...skillsInfo];
    console.log(stored);
    localStorage.setItem("skillsInfo", JSON.stringify(stored));
    console.log(skillsInfo);

    window.location.reload(false);
  }

  // Get Skills and Map
  const skillsInfo = localStorage.getItem("skillsInfo");
  console.log(skillsInfo);
  const skills = JSON.parse(skillsInfo);
  console.log(skills);
  var desiredSkillsList = skills.map((skill) => (
    <li className="skill-li">{skill.skillsInput}</li>
  ));

  // Return
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
            <button className="btn" onClick={ClearSkills}>
              Clear your skills
            </button>
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default SkillsCard;
