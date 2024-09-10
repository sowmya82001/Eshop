import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext

const LogoutPage = () => {
  const { setIsLoggedIn } = useContext(AuthContext); // Use context to update login state
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear login state or tokens here
    localStorage.removeItem('authToken'); // Remove token from localStorage
    localStorage.removeItem('userType'); // Remove user type from localStorage
    localStorage.removeItem('loggedIn'); // Remove login status from localStorage
    setIsLoggedIn(false); // Update the authentication state
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Are you sure you want to logout?</h5>
              <button className="btn btn-danger w-100" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;
