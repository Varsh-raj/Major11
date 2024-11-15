 
import Header from "./Header";
import Footer from "./Footer";
import "./Profile.css"; // Import the CSS file for styling
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
const Profile = () => {
  // Example user data
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    bio: "",
    address: "",
    profile: ""
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('authToken');  
        const response = await axios.get('http://localhost:3000/user/getprofile', {
          headers: {
            'x-auth-token': `Bearer ${token}`,
          }
        });
        console.log("data" , response.data);
        setUser(response.data);  
      } catch (error) {
        console.error("Error fetching user data:", error);
        alert("Failed to load profile. Please try again.");
      }
    };

    fetchUserData();
  }, []);
  return (
    <>
      <Header />
    <div className="profile-container">
      <div className="profile-header">
        {/* <h1>User Profile</h1> */}
      </div>

      <div className="profile-picture-container">
        <img  
          src={`http://localhost:3000/${user.profile.replace(/\\/g, '/')}`} 
        alt="Profile" className="profile-picture" />
      </div>

      <div className="profile-info">
        <div className="profile-item">
          <strong>Name:</strong>
          <p>{user.name}</p>
        </div>
        <div className="profile-item">
          <strong>Contact:</strong>
          <p>{user.phone}</p>
        </div>
        <div className="profile-item">
          <strong>Email Address:</strong>
          <p>{user.email}</p>
        </div>
        <div className="profile-item">
          <strong>Details:</strong>
          <p>{user.bio}</p>
        </div>
        <div className="profile-item">
          <strong>Location:</strong>
          <p>{user.address}</p>
        </div>
        
      </div>

      <div className="profile-actions">
        <button className="edit-profile-button"><Link to="/editprof">Edit Profile</Link></button>
        <button className="sell-here-button"><Link to="/sell">Sell Here</Link></button>
      </div>
     
    </div>
    < Footer/>
    </>
  );
};

export default Profile;
