import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const SignupScreen = () => {
  const navigate = useNavigate();
  const [isAgency, setIsAgency] = useState(false);

  const handleSignup = () => {
    // Implement signup logic here
    navigate('/profile'); // Navigate to profile after signup
  };

  return (
    <div className="signup-screen">
      <h1 className="signup-title">Create your<br/>PopX account</h1>
      <form className="signup-form">
        <div className="input-group">
          <label htmlFor="fullName">Full Name*</label>
          <input type="text" id="fullName" placeholder="Mary Doe" />
        </div>
        <div className="input-group">
          <label htmlFor="phoneNumber">Phone number*</label>
          <input type="text" id="phoneNumber" placeholder="Mary Doe" />
        </div>
        <div className="input-group">
          <label htmlFor="emailAddress">Email Address*</label>
          <input type="email" id="emailAddress" placeholder="Mary Doe" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password*</label>
          <input type="password" id="password" placeholder="Mary Doe" />
        </div>
        <div className="input-group">
          <label htmlFor="companyName">Company Name*</label>
          <input type="text" id="companyName" placeholder="Mary Doe" />
        </div>
        <div className="input-group">
          <label>Are you an Agency?*</label>
          <div className="radio-group">
            <input type="radio" id="agencyYes" name="agency" value="yes" checked={isAgency} onChange={() => setIsAgency(true)} />
            <label htmlFor="agencyYes">Yes</label>
            <input type="radio" id="agencyNo" name="agency" value="no" checked={!isAgency} onChange={() => setIsAgency(false)} />
            <label htmlFor="agencyNo">No</label>
          </div>
        </div>
        <button type="submit" className="create-account-button" onClick={handleSignup}>Create Account</button>
      </form>
    </div>
  );
};

export default SignupScreen; 