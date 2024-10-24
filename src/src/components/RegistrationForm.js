import React from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  return (
    <form className="registration-form">
      <h2>Sign Up</h2> {/* Added Sign Up title */}
    
      <div className="form-group">
        <input
          type="text"
          placeholder="Company Name"
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          placeholder="Identification Number"
          className="form-input"
          required
        />
      </div>
    
      <div className="form-group">
        <input
          type="text"
          placeholder="Name"
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          placeholder="Last Name"
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          placeholder="Position"
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          placeholder="Email"
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <input
          type="text" 
          placeholder="Phone Number"
          className="form-input"
          required
        />
      </div>
      
      <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          placeholder="Confirm Password"
          className="form-input"
          required
        />
      </div>

      <button type="submit" className="form-button">
        Sign Up
      </button>
      
      {/* Added Log in text */}
      <p className="login-text">Already have an account? <a href="/login">Log in</a></p>
    </form>
  );
};

export default RegistrationForm;
