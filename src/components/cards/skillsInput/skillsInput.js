import React, { useState } from "react";
import "../skillsInput/skillsInput.css";

function SkillsInput() {

  const [skillsInput, setSkillsInput] = useState("");

  function PlaceholderInfo() {
    const placeholderInfo = [
      {
        skillsInput: "Skills"
      },
    ];
    localStorage.setItem("skillsInfo", JSON.stringify(placeholderInfo));
  };

  function SaveSkills() {
    const skillsInfo = [
      {
        skillsInput: skillsInput,
      },
    ];
    localStorage.setItem("skillsInfo", JSON.stringify(skillsInfo));
  }

  function ClearSkills() {
    localStorage.setItem("skillsInfo", "");
  }
  return (
    <div>
      <h2 className="banner text-center">Add skills you want gain</h2>
      <div className="card text-center">
        <div className="card-body text-dark">
          <input
            className="input"
            placeholder="Add a skill"
            onChange={(event) => {
              setSkillsInput(event.target.value);
            }}></input>
          <button className="btn" onClick={SaveSkills}>Save your skill</button>
          <button className="btn" onClick={ClearSkills}>Clear your skills</button>
        </div>
      </div>
    </div>
  );
}

export default SkillsInput;
