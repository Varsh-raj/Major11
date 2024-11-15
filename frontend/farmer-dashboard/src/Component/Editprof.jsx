import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import './Editprof.css';
import axios from 'axios';

function Editprof() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [Bio, setBio] = useState('');
  const [Address, setAddress] = useState('');
  const [profile, setProfile] = useState(null);
//  we have another methode to store data  by only one state that is  const [form, setForm] 

  const handleFileChange = (e) => {
    setProfile(e.target.files[0]);
  };
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');
    console.log("Token retrieved:", token);
    const formData = new FormData();
      formData.append('name', name);
      formData.append('phone', phone);
      formData.append('Address', Address);
      formData.append('Bio', Bio);
      if (profile) {
        formData.append('profile', profile);
      }
     
    try {
     
      const response = await axios.put('http://localhost:3000/user/update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-auth-token': `Bearer ${token}`,
        },
      });
      const updatedProfile = { name, phone , profile , Address , Bio };
      console.log('Profile Updated update :', updatedProfile);
      console.log('Profile Updated:', response.data);
      alert('Profile successfully updated!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    }
  
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
          <label htmlFor="Bio">Details:</label>
          <input
            type="text"
            id="Bio"
            value={Bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Enter some more information "
            required
          />
        </div>
  {/*  address */}

  <div className="form-group">
          <label htmlFor="Address">Address:</label>
          <input
            type="text"
            id="Address"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter some more information "
            required
          />
        </div>

        {/* Profile Picture Upload Field */}
        <div className="form-group">
          <label htmlFor="profile">Profile Picture:</label>
          <input
            type="file"
            id="profile"
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
