// importing various folders/libraries to use here
import React, { useState } from "react";

//function that creates a user card element for the App
function UserCard() {
  // best practice to set default state to correct type even if empty
  const [userName, setUserName] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [userExperience, setUserExperience] = useState("");
  const [userSkills, setUserSkills] = useState("");

  // placeholder info function
  function PlaceholderInfo() {
    const placeholderInfo = [
      {
        userName: "Name",
        userLocation: "Location",
        userExperience: "Experience",
        userSkills: "Skills",
      }
    ];
    localStorage.setItem("userInfo", JSON.stringify(placeholderInfo));
  };

  PlaceholderInfo();

  // function to save the user info to local storage and override the placeholder info.
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
    window.location.reload(false)
  }

  // function to clear user info from local storage
  function ClearUserLS() {
    localStorage.setItem("userInfo", "");
  }

  // returns the following to add to the document
  return (
    <div className="justify-content-center">
      {" "}
      <h2 className="banner text-center">Create a Profile</h2>
      <div className="user-card text-center justify-content-center">
        <div className="user-card-body text-dark justify-content-center">
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
