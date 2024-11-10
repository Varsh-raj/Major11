import React from "react";
import "./Profile.css"; // Import the CSS file for styling

const Profile = () => {
  // Example user data
  const user = {
    name: "John Doe",
    mobile: "123-456-7890",
    email: "john.doe@example.com",
    farmingType: "Organic Farming",
    location: "Village Greenfield, XYZ District",
    username: "johndoe123",
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>User Profile</h1>
      </div>
      <div className="profile-info">
        <div className="profile-item">
          <strong>Name:</strong>
          <p>{user.name}</p>
        </div>
        <div className="profile-item">
          <strong>Mobile Number:</strong>
          <p>{user.mobile}</p>
        </div>
        <div className="profile-item">
          <strong>Email Address:</strong>
          <p>{user.email}</p>
        </div>
        <div className="profile-item">
          <strong>Farming Type:</strong>
          <p>{user.farmingType}</p>
        </div>
        <div className="profile-item">
          <strong>Location:</strong>
          <p>{user.location}</p>
        </div>
        <div className="profile-item">
          <strong>Username:</strong>
          <p>{user.username}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
