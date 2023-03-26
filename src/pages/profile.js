import React from "react";
import "../pages/pages.css";
import UserCard from "../components/cards/userCard/userCard";
import ProfileCard from "../components/cards/profileCard/profileCard";
import SkillsCard from "../components/cards/skillsCard/skillsCard";
import SkillsInput from "../components/cards/skillsInput/skillsInput";

function Profile() {
  return (
    <div className="profile">
      <UserCard />
      <ProfileCard />
      <SkillsInput />
      <SkillsCard />
    </div>
  );
}

export default Profile;
