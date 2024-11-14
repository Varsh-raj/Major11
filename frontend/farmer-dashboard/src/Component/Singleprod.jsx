import React, { useState, useEffect } from "react";
//import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Singleprod.css";

const Singleprod = () => {
 // const { productId } = useParams(); // Assuming each product has a unique ID in the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details from API or database using the productId
    // Placeholder data for illustration; replace with actual fetch logic
    const fetchedProduct = {
      //id: productId,
      name: "Organic Tomatoes",
      description: "Fresh organic tomatoes, straight from the farm to your kitchen.",
      quantity: "200 kg",
      pricePerKg: "₹50",
      location: "Mumbai, India",
      address: "Farmers Market, Sector 22, Mumbai",
      seller: {
        name: "Ramesh Kumar",
        phone: "9876543210",
      },
      images: [
        "tomato1.jpg",
        "tomato2.jpg",
        "tomato3.jpg",
      ],
    };
    setProduct(fetchedProduct);
  });

  if (!product) return <p>Loading product details...</p>;

  return (
    <>
      <Header />
    <div className="single-product">
      <div className="product-details">
        <h1>{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <p><strong>Quantity Available:</strong> {product.quantity}</p>
        <p><strong>Price per Kg:</strong> {product.pricePerKg}</p>
        
        <div className="seller-info">
          <h2>Seller Information</h2>
          <p><strong>Name:</strong> {product.seller.name}</p>
          <p><strong>Phone:</strong> {product.seller.phone}</p>
          <p><strong>Location:</strong> {product.location}</p>
          <p><strong>Address:</strong> {product.address}</p>
          <button 
            className="chat-button" 
            onClick={() => alert(`Chat with ${product.seller.name} feature coming soon!`)}
          >
            Chat with Seller
          </button>
        </div>
        
        <button 
          className="add-to-cart-button" 
          onClick={() => alert(`${product.name} added to cart!`)}
        >
          Add to Cart
        </button>
      </div>

      <div className="product-images">
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={product.name} className="product-image"/>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Singleprod;
