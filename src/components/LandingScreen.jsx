import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Assuming App.css contains base styles

const LandingScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-screen">
      <div className="welcome-section">
        <h1 className="welcome-text">Welcome to PopX</h1>
        <p className="welcome-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="button-group">
        <button className="create-account-button" onClick={() => navigate('/signup')}><span>Create Account</span></button>
        <button className="already-registered-button" onClick={() => navigate('/login')}>Already Registered? Login</button>
      </div>
    </div>
  );
};

export default LandingScreen; 