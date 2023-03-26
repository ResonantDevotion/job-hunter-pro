import React from "react";
import "./profileCard.css";

var userSkills = ["API", "Bootstrap", "Javascript"];
var userSkillsList = userSkills.map((skill) => <li>{skill}</li>);

// const profileInfo = localStorage.getItem("userInfo");
// const userInfo = JSON.parse(profileInfo);
// console.log(userInfo);

// JSON.parse(window.localStorage.getItem("user"));

const ProfileCard = (props) => {
  return (
    <div>
      <h2 className="banner text-center">Your Profile</h2>
      <div className="container-fluid d-flex justify-content-center">
        <div className="profileCard text-center justify-content-center">
          <div className="profileCard-body">
            <h4 className="profileCard-title">Name</h4>
            <p className="card-text text-secondary">Bristol</p>
            <p className="card-text text-secondary">1 year xp</p>
            <ul className="skills text-center">{userSkillsList}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
