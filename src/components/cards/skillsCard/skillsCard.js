import React, { useState, useEffect } from "react";

import "./skillsCard.css";

function SkillsCard() {
  const [chalk, setChalk] = useState("");
  const [notes, setNotes] = useState(() => {
    const savedState = localStorage.getItem("stateString");
    const notes = JSON.parse(savedState);
    return notes || [];
  });

  useEffect(() => {
    localStorage.setItem("stateString", JSON.stringify(notes));
  }, [notes]);

  const updateChalk = (event) => {
    setChalk(event.target.value);
  };

  const updateNotes = (event) => {
    event.preventDefault();
    var newNotes = notes.slice();
    newNotes.push(chalk);
    setChalk("");
    setNotes(newNotes);
  };

  const refreshNotes = () => {
    setNotes([]);
  };

  const notesList = notes.map((note) => <li>{note}</li>);

  return (
    <div className="App">
      <h2 className="banner text-center">Desired SKills</h2>
      <form onSubmit={updateNotes}>
        <input
        className="input"
          type="text"
          placeholder="Enter Skill"
          value={chalk}
          onChange={updateChalk}
        />

        <input className="btn" type="submit" />
        <button className="btn" onClick={refreshNotes}>Clear Desired Skills</button>
      </form>
      <div className="container-fluid d-flex justify-content-center">
      <div className="skills-card">
      <ul className="notes text-center">{notesList}</ul>
      </div>
      </div>
    
    </div>
  );
}

export default SkillsCard;