// src/pages/LoginPage/LoginPage.js
import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LoginOtp from '../../features/auth/components/LoginOtp';
import './LoginOtpPage.css';

const LoginOtpPage = () => {
  const handleOtp = (data) => {
    console.log('Otp Verification successful:', data);
  };

  return (
    <div className="login-page">
      <Header />
      <main>
        <h1>Login OTP</h1>
        <LoginOtp onSubmit={handleOtp} />
      </main>
      <Footer />
    </div>
  );
};

export default LoginOtpPage;
