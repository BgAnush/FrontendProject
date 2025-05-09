import React, { useState } from 'react';
import './dash.css';
const MarketPrices = () => {
  const [crop, setCrop] = useState('');
  const [prices, setPrices] = useState(null);

  const fetchPrices = (e) => {
    e.preventDefault();

    // Placeholder: Replace with actual API call to fetch market prices
    if (crop.toLowerCase() === 'wheat') {
      setPrices({
        price: '₹ 25/kg',
        market: 'Delhi Market',
      });
    } else if (crop.toLowerCase() === 'rice') {
      setPrices({
        price: '₹ 30/kg',
        market: 'Kolkata Market',
      });
    } else {
      setPrices(null);
    }
  };

  return (
    <div style={styles.container}>
      <h2>📈 Market Prices</h2>
      <form onSubmit={fetchPrices} style={styles.form}>
        <input
          type="text"
          placeholder="Enter crop name (e.g., Wheat)"
          value={crop}
          onChange={(e) => setCrop(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Get Price</button>
      </form>

      {prices ? (
        <div style={styles.prices}>
          <p>Price: {prices.price}</p>
          <p>Market: {prices.market}</p>
        </div>
      ) : crop ? (
        <p>No data available for this crop</p>
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
  prices: {
    marginTop: '1.5rem',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#2e7d32',
  },
};

export default MarketPrices;
