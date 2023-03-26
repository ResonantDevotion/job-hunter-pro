import React from "react";
import "../skillsInput/skillsInput.css";

function SkillsInput() {
  return (
    <div>
      <h2 className="banner text-center">Add skills you want gain</h2>
      <div className="card text-center">
        <div className="card-body text-dark">
          <input className="input" placeholder="Add a skill"></input>
          <button className="btn">Save your skill</button>
          <button className="btn">Clear your skills</button>
        </div>
      </div>
    </div>
  );
}

export default SkillsInput;
