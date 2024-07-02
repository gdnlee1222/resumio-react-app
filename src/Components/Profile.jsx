// src/Components/Profile.jsx
import React from "react";
import { useBasicInfo } from "../Context/InfoProvider";
import "./Profile.css"; // Import external CSS file

const Profile = () => {
  const { profile, dispatch } = useBasicInfo();

  const handleProfileChange = (e) => {
    dispatch({ type: "SET_PROFILE", payload: e.target.value });
  };

  return (
    <div className="profile-container">
      <h2>Objective</h2>
      <p>Featuring a professional summary introduces you to hiring managers.</p>
      <textarea
        value={profile}
        minLength={50}
        placeholder="Write about yourself (at least 50 words)"
        rows={10}
        cols={80}
        name="profile"
        onChange={handleProfileChange}
      />
    </div>
  );
};

export default Profile;
