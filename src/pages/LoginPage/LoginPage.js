// src/pages/LoginPage/LoginPage.js
import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LoginForm from '../../features/auth/components/LoginForm';
import './LoginPage.css';

const LoginPage = () => {
  const handleLogin = (data) => {
    console.log('Login successful:', data);
  };

  return (
    <div className="login-page">
      <Header />
      <main>
        <h1>Login</h1>
        <LoginForm onLogin={handleLogin} />
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
