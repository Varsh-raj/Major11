import React from 'react';
import './Productcard.css';
const Card = ({ product, onAddToCart }) => {
  return (
    <div className="card">
      <img
        src={product.image ? `http://localhost:3000/${product.image}` : '/placeholder.jpg'}
        alt={product.name}
        className="card-image"
      />
      <div className="card-content">
        <h3 className="card-title">Product: {product.name}</h3>
        <p className="card-description">Product type: {product.description}</p>
        <p className="card-location">Location: {product.location}</p>
        <p className="card-quantity">Available Quantity: {product.quantity} kg</p>
        <p className="card-price">Price: ${product.price} per kg</p>
        <button className="card-button" onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
