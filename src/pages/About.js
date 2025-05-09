import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h2>About Smart Farming App</h2>
      <p>
        The Smart Farming App aims to assist farmers by providing technology-driven solutions for crop
        recommendations, weather forecasts, and market price tracking.
      </p>
      <h3>Our Mission</h3>
      <p>
        Our goal is to help farmers make informed decisions using data and technology, ultimately increasing
        crop yield and improving market access.
      </p>
      <h3>Features</h3>
      <ul style={styles.features}>
        <li>🌱 Crop Recommendations based on soil and weather conditions</li>
        <li>☁️ Real-time Weather Information</li>
        <li>📈 Market Price updates for various crops</li>
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
  features: {
    listStyleType: 'none',
    padding: 0,
  },
};

export default About;
