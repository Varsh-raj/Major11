import React, { useState } from 'react';
import Header from './Header';
import Footer from "./Footer"; // Adjust the path if needed
import "./Sell.css";
import axios from 'axios';
const Sell = () => {
 
  const [form, setForm] = useState({
    name: '',
    quantity: '',
    price: '',
    description: '',
    image: null,
    location:''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleAddCrop = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');
    console.log("Token retrieved:", token);
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('quantity', form.quantity);
    formData.append('price', form.price);
    formData.append('description', form.description);
    formData.append('location', form.location);
    if (form.image) {
      formData.append('image', form.image);
    }
    try {
     
      const response = await axios.post('http://localhost:3000/user/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-auth-token': `Bearer ${token}`,
        },
      });
      setForm({
        name: '',
        quantity: '',
        price: '',
        description: '',
        image: null,
        location: '',
      });
      console.log('crop Updated:', response.data);
      alert('crop successfully updated!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    }

  };

  return (
    <>
      <Header />  
      <div className="container">
        <h1>Add Crop to Sell</h1>
        
        <form id="add-crop-form" onSubmit={handleAddCrop}>
          <label htmlFor="crop-name">Crop Name:</label>
          <input
            type="text"
            id="crop-name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="crop-quantity">Quantity (kg):</label>
          <input
            type="number"
            id="crop-quantity"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            required
          />

          <label htmlFor="crop-price">Price per kg ($):</label>
          <input
            type="number"
            id="crop-price"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
          />

          <label htmlFor="crop-description">Description:</label>
          <textarea
            id="crop-description"
            name="description"
            rows="4"
            value={form.description}
            onChange={handleChange}
            required
          ></textarea>

           <label htmlFor="crop-description">Location:</label>
          <textarea
            id="crop-description"
            name="location"
            rows="1"
            value={form.location}
            onChange={handleChange}
            required
          ></textarea>


          <label htmlFor="crop-image">Upload Image:</label>
          <input
            type="file"
            id="crop-image"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />

          <button type="submit">Add Crop</button>
        </form>
{/* ? why this code needed here ?????? */}
        {/* <h2>Products You Are Selling</h2>
        <div id="sell-here-section">
          {crops.map((crop) => (
            <div key={crop.id} className="crop-card">
              {crop.imageUrl && <img src={crop.imageUrl} alt={crop.name} />}
              <h3>{crop.name}</h3>
              <p>Quantity: {crop.quantity} kg</p>
              <p>Price per kg: ${crop.price}</p>
              <p>Description: {crop.description}</p>
              <button className="remove-btn" onClick={() => handleRemoveCrop(crop.id)}>Remove</button>
            </div>
          ))}
        </div> */}
      </div>
      <Footer/>
    </>
  );
};

export default Sell;
