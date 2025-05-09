import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';
import Choose from './pages/Choose';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import CropRecommendation from './pages/CropRecommendation';
import WeatherInfo from './pages/WeatherInfo';
import MarketPrices from './pages/MarketPrices';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/choose" element={<Choose />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/crop" element={<CropRecommendation />} />
        <Route path="/weather" element={<WeatherInfo />} />
        <Route path="/market" element={<MarketPrices />} />
      </Routes>
    </Router>
  );
}

export default App;
