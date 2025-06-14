import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const LoginScreen = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement login logic here
    navigate('/profile'); // Navigate to profile after login
  };

  return (
    <div className="login-screen">
      <h1 className="login-title">Signin to your<br/>PopX account</h1>
      <p className="login-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <form className="login-form">
        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter email address" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" />
        </div>
        <button type="submit" className="login-button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default LoginScreen; 