import React from "react";
import "../pages/pages.css";
import UserCard from "../components/cards/userCard/userCard";
import ProfileCard from "../components/cards/profileCard/profileCard";

function Profile() {
  return (
    <div className="profile">
      <UserCard />
      <ProfileCard />
    </div>
  );
}

export default Profile;
