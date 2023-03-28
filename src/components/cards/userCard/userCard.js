// importing various folders/libraries to use here
import React, { useState } from "react";
import "../../../utils/style.css";

//function that creates a user card element for the App
function UserCard() {
  // best practice to set default state to correct type even if empty
  const [userName, setUserName] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [userExperience, setUserExperience] = useState("");
  const [userSkills, setUserSkills] = useState("");

  function PlaceholderInfo() {
    const placeholderInfo = [
      {
        userName: "Name",
        userLocation: "Location",
        userExperience: "Experience",
        userSkills: "Skills",
      },
    ];
    localStorage.setItem("userInfo", JSON.stringify(placeholderInfo));
  };

  PlaceholderInfo();

  function SaveUserLS() {
    const userInfo = [
      {
        userName: userName,
        userLocation: userLocation,
        userExperience: userExperience,
        userSkills: userSkills,
      },
    ];

    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    let userI = localStorage.getItem("userInfo")
    console.log(userI);

    window.location.reload(false)
  }

  function ClearUserLS() {
    localStorage.setItem("userInfo", "");
  }

  return (
    <div>
      {" "}
      <h2 className="banner text-center">Create a Profile</h2>
      <div className="card text-center">
        <div className="card-body text-dark">
          <input
          className="input"
            placeholder="Your name"
            onChange={(event) => {
              setUserName(event.target.value);
              
            }}
          ></input>
          <input
          className="input"
            placeholder="Your location"
            onChange={(event) => {
              setUserLocation(event.target.value);
              
            }}
          ></input>
          <input
          className="input"
            placeholder="Your experience"
            onChange={(event) => {
              setUserExperience(event.target.value);
              
            }}
          ></input>
          <input
          className="input"
            placeholder="Your skills"
            onChange={(event) => {
              setUserSkills(event.target.value);
              
            }}
          ></input>
          <button className="btn" onClick={SaveUserLS}>Save your profile</button>
          <button className="btn" onClick={ClearUserLS}>Clear your data</button>
        </div>
      </div>
    </div>
  );
}

//exports the file to be used elsewhere
export default UserCard;
