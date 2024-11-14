import React from "react";
import Header from "../Component/Header"; // Importing the Header component
import Page from "../Component/Page";
//import ProductCard from "../Component/ProductCard"; // Importing the ProductCard component
//import Page from "../Component/Page";

const Home = () => {
  return (
    <div>
      {/* Render the Header */}
      
      <Header/>
      {/* Product Card Section */}
      <Page/>
    </div>
  );
};

export default Home;
