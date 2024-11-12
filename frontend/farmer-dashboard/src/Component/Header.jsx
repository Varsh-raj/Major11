 
// import React from "react";
// import "./Header.css"; // Import CSS file for styling
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="logo">
//         <h1>FarmConnect</h1> {/* Website Name or Logo */}
//       </div>

//       <nav className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/buy">Buy Crops</Link>
//         <Link to="/sell">Sell Crops</Link>
//         <Link to="/cart">My Cart</Link>
//         <Link to="/profile">Profile</Link>
//       </nav>

//       <div className="auth-button">
//         <button>Login</button> {/* Toggle Login/Logout */}
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useState } from "react";
import "./Header.css"; // Import CSS file for styling
import { Link } from 'react-router-dom';

const Header = () => {
  // Assume `isAuthenticated` determines if a user is logged in
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle logout
  const handleLogout = () => {
    // Logic to log out the user
    setIsAuthenticated(false);
    // You may also want to remove tokens, etc., here
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>FarmConnect</h1> {/* Website Name or Logo */}
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/buy">Buy Crops</Link>
        <Link to="/sell">Sell Crops</Link>
        <Link to="/cart">My Cart</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <div className="auth-button">
        {isAuthenticated ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/#"><button>Login</button></Link>
        )}
      </div>
    </header>
  );
};

export default Header;
