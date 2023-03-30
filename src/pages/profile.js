// importing various folders/libraries to use here
import React from "react";
import "../pages/pages.css";
import UserCard from "../components/cards/userCard/userCard";
import ProfileCard from "../components/cards/profileCard/profileCard";
import SkillsCard from "../components/cards/skillsCard/skillsCard";

// function to create profile webpage and pull in the Usercard, ProfileCard and SkillsCard components
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
