import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated =  localStorage.getItem('authToken') ;
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;

// / import { useState, useEffect } from 'react';
// import {  Navigate } from 'react-router-dom';

// // Dummy authentication check (replace with actual API call)
// const isAuthenticated = () => {
//   // Replace with your actual authentication logic
//   // console.log("Ayyaaaa");
//   console.log(localStorage.getItem('authToken'))
//   return localStorage.getItem('authToken') != null;
// };



// const ProtectedRoute = ( {children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // var demo = isAuthenticated(); 
//     setIsLoggedIn(isAuthenticated());
//     // console.log(" bata de  "+ demo);
//   }, []);

//   return isLoggedIn ? children : <Navigate to="/login" />;
// };
// export default ProtectedRoute