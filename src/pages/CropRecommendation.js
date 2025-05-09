import React, { useState } from 'react';
import './dash.css';
const CropRecommendation = () => {
  const [soilType, setSoilType] = useState('');
  const [weather, setWeather] = useState('');
  const [recommendation, setRecommendation] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Placeholder logic (you can connect to AI/Flask backend later)
    if (soilType.toLowerCase() === 'loamy' && weather.toLowerCase() === 'sunny') {
      setRecommendation('Recommended Crop: Wheat 🌾');
    } else if (soilType.toLowerCase() === 'clay' && weather.toLowerCase() === 'rainy') {
      setRecommendation('Recommended Crop: Rice 🌾');
    } else {
      setRecommendation('Recommended Crop: Maize 🌽');
    }
  };

  return (
    <div style={styles.container}>
      <h2>🌱 Crop Recommendation</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Enter soil type (e.g., loamy)"
          value={soilType}
          onChange={(e) => setSoilType(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Enter weather (e.g., sunny)"
          value={weather}
          onChange={(e) => setWeather(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Get Recommendation</button>
      </form>
      {recommendation && <p style={styles.result}>{recommendation}</p>}
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    marginTop: '1rem',
  },
  input: {
    padding: '0.5rem',
    width: '300px',
    fontSize: '1rem',
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#2e7d32',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  result: {
    marginTop: '1.5rem',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#2e7d32',
  },
};

export default CropRecommendation;
