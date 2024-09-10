import React, { useState } from 'react';
import './HomePage.css'; // Ensure the path is correct

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search submission
    console.log('Search for:', searchTerm);
  };

  return (
    <div className="homepage">
      <header className="homepage-header">
        <div className="header-content">
          <h1>Welcome to E-Shop</h1>
          <p>Find your favorite products here!</p>
        </div>
        <form onSubmit={handleSearchSubmit} className="homepage-search-form">
          <div className="input-group">
            <input 
              type="text" 
              className="form-control homepage-search-input" 
              placeholder="Search for products..." 
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <div className="input-group-append">
              <button type="submit" className="btn btn-primary homepage-search-button">
                Search
              </button>
            </div>
          </div>
        </form>
      </header>

      {/* Why Shop With Us Section */}
      <section className="why-shop-section">
        <h2>Why Shop With Us</h2>
        <div className="why-shop-content">
          <div className="why-shop-item">
            <h3>Quality Products</h3>
            <p>We offer high-quality products that meet your expectations and standards.</p>
          </div>
          <div className="why-shop-item">
            <h3>Best Prices</h3>
            <p>Our prices are competitive, providing you with the best value for your money.</p>
          </div>
          <div className="why-shop-item">
            <h3>Excellent Service</h3>
            <p>Our customer service team is dedicated to providing prompt and helpful assistance.</p>
          </div>
          <div className="why-shop-item">
            <h3>Fast Shipping</h3>
            <p>Enjoy quick and reliable shipping to get your products as soon as possible.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
