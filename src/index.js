import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Check if you're using the correct ReactDOM method for React 18 (new root API)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
