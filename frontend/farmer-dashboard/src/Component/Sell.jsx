import React, { useState } from 'react';
import Header from './Header';
import Footer from "./Footer"; // Adjust the path if needed
import "./Sell.css";

const Sell = () => {
  const [crops, setCrops] = useState([]);
  const [form, setForm] = useState({
    name: '',
    quantity: '',
    price: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleAddCrop = (e) => {
    e.preventDefault();
    const newCrop = {
      ...form,
      id: Date.now(),
      imageUrl: form.image ? URL.createObjectURL(form.image) : null,
    };
    setCrops([...crops, newCrop]);
    setForm({
      name: '',
      quantity: '',
      price: '',
      description: '',
      image: null,
    });
  };

  const handleRemoveCrop = (id) => {
    setCrops(crops.filter(crop => crop.id !== id));
  };

  return (
    <>
      <Header /> {/* Enclose elements with a fragment */}
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

        <h2>Products You Are Selling</h2>
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
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Sell;
