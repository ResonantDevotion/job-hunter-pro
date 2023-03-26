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
            placeholder="Your name"
            onChange={(event) => {
              setUserName(event.target.value);
              console.log(userName);
            }}
          ></input>
          <input
            placeholder="Your location"
            onChange={(event) => {
              setUserLocation(event.target.value);
              console.log(userLocation);
            }}
          ></input>
          <input
            placeholder="Your experience"
            onChange={(event) => {
              setUserExperience(event.target.value);
              console.log(userExperience);
            }}
          ></input>
          <input
            placeholder="Your skills"
            onChange={(event) => {
              setUserSkills(event.target.value);
              console.log(userSkills);
            }}
          ></input>
          <button onClick={SaveUserLS}>Save your profile</button>
          <button onClick={ClearUserLS}>Clear your data</button>
        </div>
      </div>
    </div>
  );
}

//exports the file to be used elsewhere
export default UserCard;
