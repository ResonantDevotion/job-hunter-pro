import React from "react";
import "../pages/pages.css";
import UserCard from "../components/cards/userCard/userCard";

import ProfileCard from "../components/cards/profileCard/profileCard";
import SkillsCard from "../components/cards/skillsCard/skillsCard";


function Profile() {
  

  return (
    <div className="profile">
      <UserCard />
      <ProfileCard />   
      <SkillsCard />
    </div>
  );
}


export default Profile;
