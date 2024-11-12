import React, { useState } from "react";
//import Header from "./Header";
import Footer from "./Footer";
import "./Page.css"; // Consolidated CSS file for all components

const Page = () => {
  const [location, setLocation] = useState("");
  const [cropType, setCropType] = useState("");

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleCropTypeChange = (e) => {
    setCropType(e.target.value);
  };

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to FarmFresh</h1>
            <p>Your one-stop platform for farmers to sell crops directly to the market, eliminating middlemen for better prices and transparency.</p>
            <div className="buttons">
              <button onClick={() => alert("Explore feature coming soon!")}>Explore</button>
              <button onClick={() => alert("Learn More feature coming soon!")}>Learn More</button>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <h3>Step 1: Register Your Farm</h3>
              <p>Easy sign-up process to get started.</p>
            </div>
            <div className="step">
              <h3>Step 2: List Your Products</h3>
              <p>Showcase your produce directly to buyers.</p>
            </div>
            <div className="step">
              <h3>Step 3: Negotiate with Buyers</h3>
              <p>Communicate and set fair prices.</p>
            </div>
            <div className="step">
              <h3>Step 4: Receive Payments</h3>
              <p>Secure and fast payment transfer.</p>
            </div>
          </div>
        </section>

        {/* Product Listing Section */}
        <section id="product-listing">
          <h2>Available Products</h2>

          {/* Filters Section */}
          <div className="filters">
            <label htmlFor="location">Location:</label>
            <select id="location" value={location} onChange={handleLocationChange}>
              <option value="">Select Location</option>
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
              <option value="location3">Location 3</option>
            </select>

            <label htmlFor="cropType">Crop Type:</label>
            <select id="cropType" value={cropType} onChange={handleCropTypeChange}>
              <option value="">Select Crop Type</option>
              <option value="vegetables">Vegetables</option>
              <option value="fruits">Fruits</option>
              <option value="grains">Grains</option>
            </select>
          </div>

          <div className="product-grid" id="productGrid">
            {/* Product Item */}
            <div className="product-item" data-type="vegetables">
              <img src="tomato.jpg" alt="Tomato" />
              <h3>Tomatoes</h3>
              <p>Quantity Available: 200 kg</p>
              <p>Fresh organic tomatoes from local farms.</p>
              <button className="btn-know-more">Know More</button>
            </div>
            <div className="product-item" data-type="fruits">
              <img src="apple.jpg" alt="Apple" />
              <h3>Apples</h3>
              <p>Quantity Available: 150 kg</p>
              <p>Juicy and fresh apples harvested from orchards.</p>
              <button className="btn-know-more">Know More</button>
            </div>
            <div className="product-item" data-type="grains">
              <img src="rice.jpg" alt="Rice" />
              <h3>Rice</h3>
              <p>Quantity Available: 500 kg</p>
              <p>High-quality grains of rice, perfect for your meals.</p>
              <button className="btn-know-more">Know More</button>
            </div>
          </div>
        </section>
      </main>
      < Footer/>
    </>
  );
};

export default Page;
