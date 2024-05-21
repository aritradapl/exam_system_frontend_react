// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <p>&copy; {new Date().getFullYear()} Exam System. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
