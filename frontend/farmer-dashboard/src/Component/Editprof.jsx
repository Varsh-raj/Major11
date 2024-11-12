import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import './Editprof.css';

function Editprof() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [farmingType, setFarmingType] = useState('');
  const [profilePic, setProfilePic] = useState(null);

  const handleFileChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send the updated data to your backend API
    const updatedProfile = { name, phone, farmingType, profilePic };
    console.log('Profile Updated:', updatedProfile);

    alert('Profile successfully updated!');
    // Reset form or redirect to another page if needed
  };

  return (
    <>
      < Header/>
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Phone Number Field */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            required
          />
        </div>

        {/* Farming Type Field */}
        <div className="form-group">
          <label htmlFor="farmingType">Farming Type:</label>
          <select
            id="farmingType"
            value={farmingType}
            onChange={(e) => setFarmingType(e.target.value)}
            required
          >
            <option value="">Select farming type</option>
            <option value="vegetable">Vegetable Farming</option>
            <option value="fruit">Fruit Farming</option>
            <option value="grain">Grain Farming</option>
            <option value="dairy">Dairy Farming</option>
          </select>
        </div>

        {/* Profile Picture Upload Field */}
        <div className="form-group">
          <label htmlFor="profilePic">Profile Picture:</label>
          <input
            type="file"
            id="profilePic"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Save Changes</button>
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default Editprof;
