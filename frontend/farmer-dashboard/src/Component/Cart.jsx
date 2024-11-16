import React, { useState, useEffect } from "react";
 
import "./Cart.css";

const Cart = ({ initialCart }) => {
  const [cart, setCart] = useState(initialCart || []);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  // Update quantity and unit
  const updateQuantity = (id, quantity, unit) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity, unit } : item
      )
    );
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calculate total price
  const calculateTotal = () => {
    const totalAmount = cart.reduce((acc, item) => {
      const multiplier = item.unit === "quintal" ? 100 : 1;
      return acc + item.pricePerKg * item.quantity * multiplier;
    }, 0);
    setTotal(totalAmount);
  };

  return (
    <>
     
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-details">
                <p className="item-name">{item.name}</p>
                <p className="item-price">Price per kg: ${item.pricePerKg}</p>
                <div className="quantity-controls">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value), item.unit)
                    }
                    className="quantity-input"
                  />
                  <select
                    value={item.unit}
                    onChange={(e) =>
                      updateQuantity(item.id, item.quantity, e.target.value)
                    }
                    className="unit-select"
                  >
                    <option value="kg">kg</option>
                    <option value="quintal">quintal</option>
                  </select>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="remove-button"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      <div className="cart-total">
        <h3>Total: ${total.toFixed(2)}</h3>
        <button className="make-payment-button">Make Payment</button>
      </div>
    </div>
    </>
  );
};

export default Cart;
