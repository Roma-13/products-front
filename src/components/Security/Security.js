import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Security.css'; // Import the Security CSS file
import penIcon from '../../assets/pen-solid.svg'; // Correct path to the pen icon

const Security = () => {
  const [isPasswordPopupOpen, setPasswordPopupOpen] = useState(false);
  const [isEmailPopupOpen, setEmailPopupOpen] = useState(false);

  // States for email
  const [email, setEmail] = useState('johnathan@example.com');
  const [newEmail, setNewEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  // States for password
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Load saved email from local storage when component mounts
  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    if (savedEmail) setEmail(savedEmail);
  }, []);

  const togglePasswordPopup = () => {
    setPasswordPopupOpen(!isPasswordPopupOpen); // Toggle the password popup
  };

  const toggleEmailPopup = () => {
    setEmailPopupOpen(!isEmailPopupOpen); // Toggle the email popup
  };

  // Email validation
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    return regex.test(email);
  };

  const saveEmail = () => {
    if (validateEmail(newEmail)) {
      setEmail(newEmail);
      localStorage.setItem('email', newEmail); // Save new email to local storage
      setEmailError('');
      setEmailPopupOpen(false);
    } else {
      setEmailError('Please enter a valid email address.');
    }
  };

  // Password validation
  const validatePassword = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordError('All fields must be filled out.');
      return false;
    }
    if (newPassword.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
      return false;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError('Passwords do not match.');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const savePassword = () => {
    if (validatePassword()) {
      console.log('Password changed successfully!');
      setPasswordPopupOpen(false);
      // Reset password fields
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }
  };

  // Key down handler for popup interactions
  const handleKeyDown = (e, saveFunction, closePopup) => {
    if (e.key === 'Enter') {
      saveFunction();
    } else if (e.key === 'Escape') {
      closePopup();
    }
  };

  return (
    <div className="main-box">
      <div className='categories'>
        <Link to="/" className='cat1'>Profile</Link>
        <Link to="/company" className='cat2'>Company</Link>
        <Link to="/security" className='cat3'>Security</Link>
      </div>

      <div className='box'>
        <div className='change-password'>
          Change Password: 
          <span className='pen-icon' onClick={togglePasswordPopup} />
        </div>
        <div className='change-email'>
          Email: {email}
          <span className='pen-icon' onClick={toggleEmailPopup} />
        </div>

        {/* Popup for changing password */}
        {isPasswordPopupOpen && (
          <div className='popup'>
            <div className='popup-content' onKeyDown={(e) => handleKeyDown(e, savePassword, togglePasswordPopup)} tabIndex={0}>
              <h3>Change Password</h3>
              <label>
                Current Password:
                <input 
                  type="password" 
                  placeholder="Enter current password" 
                  value={currentPassword} 
                  onChange={(e) => setCurrentPassword(e.target.value)} 
                />
              </label>
              <label>
                New Password:
                <input 
                  type="password" 
                  placeholder="Enter new password" 
                  value={newPassword} 
                  onChange={(e) => setNewPassword(e.target.value)} 
                />
              </label>
              <label>
                Confirm Password:
                <input 
                  type="password" 
                  placeholder="Confirm new password" 
                  value={confirmPassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)} 
                />
              </label>
              {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>} {/* Show password error if any */}
              <div className="popup-buttons">
                <button onClick={savePassword}>Submit</button>
                <button onClick={togglePasswordPopup}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        {/* Popup for changing email */}
        {isEmailPopupOpen && (
          <div className='popup'>
            <div className='popup-content' onKeyDown={(e) => handleKeyDown(e, saveEmail, toggleEmailPopup)} tabIndex={0}>
              <h3>Change Email</h3>
              <label>
                New Email:
                <input 
                  type="email" 
                  placeholder="Enter new email" 
                  value={newEmail} 
                  onChange={(e) => setNewEmail(e.target.value)} 
                />
              </label>
              {emailError && <p style={{ color: 'red' }}>{emailError}</p>} {/* Show email error if any */}
              <div className="popup-buttons">
                <button onClick={saveEmail}>Save</button>
                <button onClick={toggleEmailPopup}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Security;
