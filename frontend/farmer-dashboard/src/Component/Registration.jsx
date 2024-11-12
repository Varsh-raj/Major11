// Registration.jsx
import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import './Registration.css'; // Import the CSS file

const Registration = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    farmType: 'vegetables',
  });

  // Handle change in form input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.name || !formData.email || !formData.password || !formData.phone || !formData.address) {
      alert('Please fill out all fields');
      return;
    }

    // Assuming you will submit this data to a server
    console.log('Form submitted with data: ', formData);
  };

  return (
    <>
      <Header />
    <section id="registration-form">
      <h2>Farmer Registration</h2>
      <form id="regForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Farm Address</label>
          <textarea
            id="address"
            name="address"
            placeholder="Enter your farm address"
            rows="3"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="farm-type">Type of Farming</label>
          <select
            id="farm-type"
            name="farmType"
            value={formData.farmType}
            onChange={handleChange}
            required
          >
            <option value="vegetables">Vegetables</option>
            <option value="fruits">Fruits</option>
            <option value="grains">Grains</option>
            <option value="dairy">Dairy</option>
          </select>
        </div>
        <button type="submit" className="btn-register">Register</button>
      </form>
    </section>
    <Footer/>
    </>
  );
};

export default Registration;
