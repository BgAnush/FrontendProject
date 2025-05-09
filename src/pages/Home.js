import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa'; // Import FontAwesome logout icon
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from localStorage or sessionStorage (or handle it based on your logic)
    localStorage.removeItem('user');
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div className="home-container">
      <h1>Welcome to Smart Farming App 🌾</h1>
      <p>Use technology to boost your farm's productivity.</p>

      {/* Logout Button */}
      <div className="logout-container">
        <button onClick={handleLogout} className="logout-btn">
          <FaSignOutAlt /> Logout
        </button>
      </div>

      <div className="card-container">
        <Link to="/crop" className="card-link">
          <div className="card">
            <h3>🌱 Crop Recommendation</h3>
            <p>Get the best crops to grow based on your soil and climate.</p>
          </div>
        </Link>

        <Link to="/weather" className="card-link">
          <div className="card">
            <h3>🌤️ Weather Info</h3>
            <p>Stay updated with the latest weather conditions.</p>
          </div>
        </Link>

        <Link to="/market" className="card-link">
          <div className="card">
            <h3>📈 Market Prices</h3>
            <p>Check current market prices for your crops.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
