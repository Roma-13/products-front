import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Company.css';  // Import the Company CSS file
import penIcon from '../assets/pen-solid.svg'; // Correct path to the pen icon
import cameraIcon from '../assets/camera-solid.svg'; // Correct path to the camera icon

const Company = () => {
  const [image, setImage] = useState('Gm.png'); // Default profile photo
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [newImage, setNewImage] = useState('');

  // Company details states
  const [companyName, setCompanyName] = useState('GM Electronics');
  const [identificationNumber, setIdentificationNumber] = useState('123456789');
  const [position, setPosition] = useState('Developer');

  // Popup states
  const [isCompanyNamePopupOpen, setCompanyNamePopupOpen] = useState(false);
  const [isIdentificationNumberPopupOpen, setIdentificationNumberPopupOpen] = useState(false);
  const [isPositionPopupOpen, setPositionPopupOpen] = useState(false);

  // New values for popups
  const [newCompanyName, setNewCompanyName] = useState('');
  const [newIdentificationNumber, setNewIdentificationNumber] = useState('');
  const [newPosition, setNewPosition] = useState('');

  // Load saved data from local storage when component mounts
  useEffect(() => {
    const savedImage = localStorage.getItem('companyImage');
    const savedCompanyName = localStorage.getItem('companyName');
    const savedIdentificationNumber = localStorage.getItem('identificationNumber');
    const savedPosition = localStorage.getItem('position');

    if (savedImage) {
      setImage(savedImage);
    }
    if (savedCompanyName) {
      setCompanyName(savedCompanyName);
    }
    if (savedIdentificationNumber) {
      setIdentificationNumber(savedIdentificationNumber);
    }
    if (savedPosition) {
      setPosition(savedPosition);
    }
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const saveImage = () => {
    if (newImage) {
      setImage(newImage);
      localStorage.setItem('companyImage', newImage); // Save to local storage
      setImagePopupOpen(false);
    }
  };

  const saveCompanyName = () => {
    setCompanyName(newCompanyName);
    localStorage.setItem('companyName', newCompanyName); // Save to local storage
    setCompanyNamePopupOpen(false);
  };

  const saveIdentificationNumber = () => {
    setIdentificationNumber(newIdentificationNumber);
    localStorage.setItem('identificationNumber', newIdentificationNumber); // Save to local storage
    setIdentificationNumberPopupOpen(false);
  };

  const savePosition = () => {
    setPosition(newPosition);
    localStorage.setItem('position', newPosition); // Save to local storage
    setPositionPopupOpen(false);
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
        <div className='company-profile' >
          <span className='camera-icon' onClick={() => setImagePopupOpen(true)} />
        </div>
        <div className='name'>
          Company Name: {companyName}
          <span className='pen-icon' onClick={() => setCompanyNamePopupOpen(true)} />
        </div>
        <div className='number'>
          Identification Number: {identificationNumber}
          <span className='pen-icon' onClick={() => setIdentificationNumberPopupOpen(true)} />
        </div>
        <div className='position'>
          Position: {position}
          <span className='pen-icon' onClick={() => setPositionPopupOpen(true)} />
        </div>

        {/* Popup for image upload */}
        {isImagePopupOpen && (
          <div className='popup'>
            <div className='popup-content' onKeyDown={(e) => handleKeyDown(e, saveImage, () => setImagePopupOpen(false))} tabIndex={0}>
              <h3>Upload New Company Profile Image</h3>
              <input type="file" accept="image/*" onChange={handleImageUpload} />
              {newImage && <img src={newImage} alt="Preview" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />}
              <div className="popup-buttons">
                <button onClick={saveImage}>Save</button>
                <button onClick={() => setImagePopupOpen(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        {/* Popup for changing company name */}
        {isCompanyNamePopupOpen && (
          <div className='popup'>
            <div className='popup-content' onKeyDown={(e) => handleKeyDown(e, saveCompanyName, () => setCompanyNamePopupOpen(false))} tabIndex={0}>
              <h3>Change Company Name</h3>
              <input 
                type="text" 
                placeholder="Enter new company name" 
                value={newCompanyName} 
                onChange={(e) => setNewCompanyName(e.target.value)} 
              />
              <div className="popup-buttons">
                <button onClick={saveCompanyName}>Save</button>
                <button onClick={() => setCompanyNamePopupOpen(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        {/* Popup for changing identification number */}
        {isIdentificationNumberPopupOpen && (
          <div className='popup'>
            <div className='popup-content' onKeyDown={(e) => handleKeyDown(e, saveIdentificationNumber, () => setIdentificationNumberPopupOpen(false))} tabIndex={0}>
              <h3>Change Identification Number</h3>
              <input 
                type="text" 
                placeholder="Enter new identification number" 
                value={newIdentificationNumber} 
                onChange={(e) => setNewIdentificationNumber(e.target.value)} 
              />
              <div className="popup-buttons">
                <button onClick={saveIdentificationNumber}>Save</button>
                <button onClick={() => setIdentificationNumberPopupOpen(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        {/* Popup for changing position */}
        {isPositionPopupOpen && (
          <div className='popup'>
            <div className='popup-content' onKeyDown={(e) => handleKeyDown(e, savePosition, () => setPositionPopupOpen(false))} tabIndex={0}>
              <h3>Change Position</h3>
              <input 
                type="text" 
                placeholder="Enter new position" 
                value={newPosition} 
                onChange={(e) => setNewPosition(e.target.value)} 
              />
              <div className="popup-buttons">
                <button onClick={savePosition}>Save</button>
                <button onClick={() => setPositionPopupOpen(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Company;
