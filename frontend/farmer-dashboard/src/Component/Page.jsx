// import React, { useState } from "react";
// //import Header from "./Header";
// import Footer from "./Footer";
// import "./Page.css"; // Consolidated CSS file for all components

// const Page = () => {
//   const [location, setLocation] = useState("");
//   const [cropType, setCropType] = useState("");

//   const handleLocationChange = (e) => {
//     setLocation(e.target.value);
//   };

//   const handleCropTypeChange = (e) => {
//     setCropType(e.target.value);
//   };

//   return (
//     <>
//       <main>
//         {/* Hero Section */}
//         <section className="hero">
//           <div className="hero-content">
//             <h1>Welcome to FarmFresh</h1>
//             <p>Your one-stop platform for farmers to sell crops directly to the market, eliminating middlemen for better prices and transparency.</p>
//             <div className="buttons">
//               <button onClick={() => alert("Explore feature coming soon!")}>Explore</button>
//               <button onClick={() => alert("Learn More feature coming soon!")}>Learn More</button>
//             </div>
//           </div>
//         </section>

//         {/* How It Works Section */}
//         <section id="how-it-works">
//           <h2>How It Works</h2>
//           <div className="steps">
//             <div className="step">
//               <h3>Step 1: Register Your Farm</h3>
//               <p>Easy sign-up process to get started.</p>
//             </div>
//             <div className="step">
//               <h3>Step 2: List Your Products</h3>
//               <p>Showcase your produce directly to buyers.</p>
//             </div>
//             <div className="step">
//               <h3>Step 3: Negotiate with Buyers</h3>
//               <p>Communicate and set fair prices.</p>
//             </div>
//             <div className="step">
//               <h3>Step 4: Receive Payments</h3>
//               <p>Secure and fast payment transfer.</p>
//             </div>
//           </div>
//         </section>

//         {/* Product Listing Section */}
//         <section id="product-listing">
//           <h2>Available Products</h2>

//           {/* Filters Section */}
//           <div className="filters">
//             <label htmlFor="location">Location:</label>
//             <select id="location" value={location} onChange={handleLocationChange}>
//               <option value="">Select Location</option>
//               <option value="location1">Location 1</option>
//               <option value="location2">Location 2</option>
//               <option value="location3">Location 3</option>
//             </select>

//             <label htmlFor="cropType">Crop Type:</label>
//             <select id="cropType" value={cropType} onChange={handleCropTypeChange}>
//               <option value="">Select Crop Type</option>
//               <option value="vegetables">Vegetables</option>
//               <option value="fruits">Fruits</option>
//               <option value="grains">Grains</option>
//             </select>
//           </div>

//           <div className="product-grid" id="productGrid">
//             {/* Product Item */}
//             <div className="product-item" data-type="vegetables">
//               <img src="tomato.jpg" alt="Tomato" />
//               <h3>Tomatoes</h3>
//               <p>Quantity Available: 200 kg</p>
//               <p>Fresh organic tomatoes from local farms.</p>
//               <button className="btn-know-more">Know More</button>
//             </div>
//             <div className="product-item" data-type="fruits">
//               <img src="apple.jpg" alt="Apple" />
//               <h3>Apples</h3>
//               <p>Quantity Available: 150 kg</p>
//               <p>Juicy and fresh apples harvested from orchards.</p>
//               <button className="btn-know-more">Know More</button>
//             </div>
//             <div className="product-item" data-type="grains">
//               <img src="rice.jpg" alt="Rice" />
//               <h3>Rice</h3>
//               <p>Quantity Available: 500 kg</p>
//               <p>High-quality grains of rice, perfect for your meals.</p>
//               <button className="btn-know-more">Know More</button>
//             </div>
//           </div>
//         </section>
//       </main>
//       < Footer/>
//     </>
//   );
// };

// export default Page;


 import React, { useState, useEffect } from "react";
 
 import Footer from "./Footer";
 import "./Page.css";
 import Card from './Productcard'
 

const Page = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [location, setLocation] = useState("");
  const [bio, setbio] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/user/getallproduct");
        const data = await response.json();
        console.log("data" , data);
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const matchesLocation = location ? product.location === location : true;
      const matchesDescription = bio ? (product.description && product.description.toLowerCase() === bio.toLowerCase()) : true;

      return matchesLocation &&  matchesDescription;
    });
    setFilteredProducts(filtered);
  }, [location, bio, products]);

  const handleAddToCart = (product) => {
    alert(`${product.name} added to cart!`);
    
  };

  return (
    <>
      <main className="main-container">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Welcome to FarmFresh</h1>
            <p>
              Your one-stop platform for farmers to sell crops directly to the
              market, eliminating middlemen for better prices and transparency.
            </p>
            <div className="buttons">
              <button onClick={() => alert("Explore feature coming soon!")}>
                Explore
              </button>
              <button onClick={() => alert("Learn More feature coming soon!")}>
                Learn More
              </button>
            </div>
          </div>
        </section>

        <section className="product-section">
          <h2>Available Products</h2>
          <div className="filters">
            <label htmlFor="location">Location:</label>
            <select
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">All Locations</option>
              <option value="Indore">Indore</option>
              <option value="Dewas">Dewas</option>
              <option value="Ujjain">Ujjain</option>
            </select>
            <label htmlFor="bio">Food Type:</label>
            <select
              id="bio"
              value={bio}
              onChange={(e) => setbio(e.target.value)}
            >
              <option value="">All Food Types</option>
              <option value="vegetables">Vegetables</option>
              <option value="fruits">Fruits</option>
              <option value="grains">Grains</option>
            </select>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <Card key={product._id} product={product} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Page;
