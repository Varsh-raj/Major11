import React from "react";
import "./Header.css"; // Import CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>FarmConnect</h1> {/* Website Name or Logo */}
      </div>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#buy">Buy Crops</a>
        <a href="#sell">Sell Crops</a>
        <a href="#cart">My Cart</a>
        <a href="#profile">Profile</a>
      </nav>

      <div className="auth-button">
        <button>Login</button> {/* Toggle Login/Logout */}
      </div>
    </header>
  );
};

export default Header;
