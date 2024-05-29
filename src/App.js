// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import LoginOtpPage from './pages/LoginPage/LoginOtpPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login-otp" element={<LoginOtpPage />} />  
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
