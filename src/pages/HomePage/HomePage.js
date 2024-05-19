// src/pages/HomePage/HomePage.js
import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <h1>Welcome to the Exam System</h1>
      <p>This is the home page.</p>
      <Footer/>
    </div>
  );
};

export default HomePage;
