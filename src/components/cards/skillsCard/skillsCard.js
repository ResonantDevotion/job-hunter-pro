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
      <form onSubmit={updateNotes}>
        <input
          type="text"
          placeholder="type here"
          value={chalk}
          onChange={updateChalk}
        />

        <input type="submit" />
        <button onClick={refreshNotes}>Refresh Notes</button>
      </form>
      <ul className="notes">{notesList}</ul>
    
    </div>
  );
}

export default SkillsCard;