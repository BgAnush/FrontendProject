import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Choose.css'; // Make sure this file exists

const Choose = () => {
  const navigate = useNavigate();

  return (
    <div className="choose-container">
      <div className="choose-box">
        <h2>Welcome to Smart Farming</h2>
        <p className="choose-text">Please choose an option to continue:</p>
        <div className="choose-buttons">
          <button onClick={() => navigate('/login')} className="choose-button">Login</button>
          <button onClick={() => navigate('/register')} className="choose-button">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Choose;
