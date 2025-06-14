import React from 'react';
import '../App.css';
import profile from '../images/profile.png'
const ProfileScreen = () => {
  return (
    <div className="profile-screen">
      <div className="account-settings-header">
        <h2>Account Settings</h2>
      </div>
      <div className="profile-header">
        <img src={profile} alt="Profile" className="profile-image" /> {/* Placeholder for image */}
        <div className="profile-info">
          <h1 className="profile-name">Mary Doe</h1>
          <p className="profile-email">Mary@gmail.com</p>
        </div>
      </div>
      <div className="profile-details">
        <p className="profile-description">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
      </div>
    </div>
  );
};

export default ProfileScreen; 