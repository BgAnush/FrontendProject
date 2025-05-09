import React, { useState } from 'react';
import './dash.css';

const WeatherInfo = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (e) => {
    e.preventDefault();
    
    // Placeholder: Replace this with actual API call later (e.g., OpenWeatherMap API)
    if (city.toLowerCase() === 'delhi') {
      setWeatherData({
        temperature: '32°C',
        condition: 'Sunny',
        humidity: '60%',
      });
    } else if (city.toLowerCase() === 'mumbai') {
      setWeatherData({
        temperature: '29°C',
        condition: 'Rainy',
        humidity: '85%',
      });
    } else {
      setWeatherData(null);
    }
  };

  return (
    <div style={styles.container}>
      <h2>☁️ Weather Information</h2>
      <form onSubmit={fetchWeather} style={styles.form}>
        <input
          type="text"
          placeholder="Enter city name (e.g., Delhi)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Get Weather</button>
      </form>

      {weatherData ? (
        <div style={styles.weatherData}>
          <p>Temperature: {weatherData.temperature}</p>
          <p>Condition: {weatherData.condition}</p>
          <p>Humidity: {weatherData.humidity}</p>
        </div>
      ) : city ? (
        <p>No data available for this city</p>
      ) : null}
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
  weatherData: {
    marginTop: '1.5rem',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#2e7d32',
  },
};

export default WeatherInfo;
