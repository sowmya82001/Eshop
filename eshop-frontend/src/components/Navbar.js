import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext
import './Navbar.css';

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext); // Use context here

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('authToken');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">E-Shop</Link>
        <div className="navbar-toggle">
          ☰
        </div>
        <ul className="navbar-menu">
          <li><Link to="/" className="navbar-item">Home</Link></li>
          <li><Link to="/products" className="navbar-item">Products</Link></li>
          <li><Link to="/cart" className="navbar-item">Cart</Link></li>
          <li><Link to="/checkout" className="navbar-item">Checkout</Link></li>
          <li><Link to="/contact" className="navbar-item">Contact</Link></li>
        </ul>
        <div className="navbar-actions">
          {isLoggedIn ? (
            <Link to="/" className="navbar-button" onClick={handleLogout}>Logout</Link>
          ) : (
            <>
              <Link to="/login" className="navbar-button">Login</Link>
              <Link to="/signup" className="navbar-button">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
