import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>🌾 SmartFarming</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/recommend" style={styles.link}>Crop Recommendation</Link>
        <Link to="/weather" style={styles.link}>Weather Info</Link>
        <Link to="/prices" style={styles.link}>Market Prices</Link>
        <Link to="/about" style={styles.link}>About</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2e7d32',
    padding: '1rem 2rem',
  },
  logo: {
    color: 'white',
    margin: 0,
  },
  links: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Navbar;
