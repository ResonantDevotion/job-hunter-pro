import React from "react";
import "./profileCard.css";


const profileInfo = localStorage.getItem("userInfo");
const userInfo = JSON.parse(profileInfo);

const ProfileCard = (props) => {
  return (
    <div>
      <h2 className="banner text-center">Your Profile</h2>
      <div className="container-fluid d-flex justify-content-center">
        <div className="profileCard text-center justify-content-center">
          <div className="profileCard-body justify-content-center">
            <h4 className="profileCard-title">{userInfo[0].userName}</h4>
            <p className="location text-center">{userInfo[0].userLocation}</p>
            <p className="experience text-center">{userInfo[0].userExperience}</p>
            <p className="skills text-center">{userInfo[0].userSkills}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
