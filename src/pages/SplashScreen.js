import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SplashScreen.css'; // Import the CSS file for better styling

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the choose page after 3 seconds
    setTimeout(() => {
      navigate('/choose');
    }, 3000); // Show splash screen for 3 seconds
  }, [navigate]);

  return (
    <div className="splash-container">
      <div className="splash-content">
        <h1>🌱 Welcome to Smart Farming 🌾</h1>
        <p>Your sustainable farming journey starts here! 🚜</p>
      </div>
    </div>
  );
};

export default SplashScreen;
