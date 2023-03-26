import React, { useState } from "react";
import "../skillsInput/skillsInput.css";

function SkillsInput() {

    const [skillsInput, setSkillsInput] =useState("");

    function SaveSkills(){
        const skillsInfo = [
        {
            skillsInput: skillsInput,
        },
    ];
    localStorage.setItem("skillsInfo", JSON.stringify(skillsInfo));

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
          <button className="btn">Clear your skills</button>
        </div>
      </div>
    </div>
  );
}

export default SkillsInput;
