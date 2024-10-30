import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Company.module.css';
import penIcon from '../../assets/pen-solid-1.svg';
import cameraIcon from '../../assets/camera-solid.svg';

const Company = () => {
  const [image, setImage] = useState('Gm.png');
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [newImage, setNewImage] = useState('');

  const [companyName, setCompanyName] = useState('GM Electronics');
  const [identificationNumber, setIdentificationNumber] = useState('123456789');
  const [position, setPosition] = useState('Developer');

  const [isCompanyNamePopupOpen, setCompanyNamePopupOpen] = useState(false);
  const [isIdentificationNumberPopupOpen, setIdentificationNumberPopupOpen] = useState(false);
  const [isPositionPopupOpen, setPositionPopupOpen] = useState(false);

  const [newCompanyName, setNewCompanyName] = useState('');
  const [newIdentificationNumber, setNewIdentificationNumber] = useState('');
  const [newPosition, setNewPosition] = useState('');

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
      localStorage.setItem('companyImage', newImage);
      setImagePopupOpen(false);
    }
  };

  const saveCompanyName = () => {
    setCompanyName(newCompanyName);
    localStorage.setItem('companyName', newCompanyName);
    setCompanyNamePopupOpen(false);
  };

  const saveIdentificationNumber = () => {
    setIdentificationNumber(newIdentificationNumber);
    localStorage.setItem('identificationNumber', newIdentificationNumber);
    setIdentificationNumberPopupOpen(false);
  };

  const savePosition = () => {
    setPosition(newPosition);
    localStorage.setItem('position', newPosition);
    setPositionPopupOpen(false);
  };

  const handleKeyDown = (e, saveFunction, closePopup) => {
    if (e.key === 'Enter') {
      saveFunction();
    } else if (e.key === 'Escape') {
      closePopup();
    }
  };

  return (
    <div className={styles.mainBox}>
      <div className={styles.categories}>
        <Link to="/" className={styles.cat1}>Profile</Link>
        <Link to="/company" className={styles.cat2}>Company</Link>
        <Link to="/security" className={styles.cat3}>Security</Link>
      </div>

      <div className={styles.box}>
        <div className={styles.companyProfile}>
          <span className={styles.cameraIcon} onClick={() => setImagePopupOpen(true)} />
        </div>
        <div className={styles.name}>
          Company Name: {companyName}
          <span className={styles.penIcon} onClick={() => setCompanyNamePopupOpen(true)} />
        </div>
        <div className={styles.number}>
          Identification Number: {identificationNumber}
          <span className={styles.penIcon} onClick={() => setIdentificationNumberPopupOpen(true)} />
        </div>
        <div className={styles.position}>
          Position: {position}
          <span className={styles.penIcon} onClick={() => setPositionPopupOpen(true)} />
        </div>

        {/* Image upload popup */}
        {isImagePopupOpen && (
          <div className={styles.popup}>
            <div className={styles.popupContent} onKeyDown={(e) => handleKeyDown(e, saveImage, () => setImagePopupOpen(false))} tabIndex={0}>
              <h3>Upload New Company Profile Image</h3>
              <input type="file" accept="image/*" onChange={handleImageUpload} />
              {newImage && <img src={newImage} alt="Preview" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />}
              <div className={styles.popupButtons}>
                <button onClick={saveImage}>Save</button>
                <button onClick={() => setImagePopupOpen(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        {/* Company name popup */}
        {isCompanyNamePopupOpen && (
          <div className={styles.popup}>
            <div className={styles.popupContent} onKeyDown={(e) => handleKeyDown(e, saveCompanyName, () => setCompanyNamePopupOpen(false))} tabIndex={0}>
              <h3>Change Company Name</h3>
              <input 
                type="text" 
                placeholder="Enter new company name" 
                value={newCompanyName} 
                onChange={(e) => setNewCompanyName(e.target.value)} 
              />
              <div className={styles.popupButtons}>
                <button onClick={saveCompanyName}>Save</button>
                <button onClick={() => setCompanyNamePopupOpen(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        {/* Identification number popup */}
        {isIdentificationNumberPopupOpen && (
          <div className={styles.popup}>
            <div className={styles.popupContent} onKeyDown={(e) => handleKeyDown(e, saveIdentificationNumber, () => setIdentificationNumberPopupOpen(false))} tabIndex={0}>
              <h3>Change Identification Number</h3>
              <input 
                type="text" 
                placeholder="Enter new identification number" 
                value={newIdentificationNumber} 
                onChange={(e) => setNewIdentificationNumber(e.target.value)} 
              />
              <div className={styles.popupButtons}>
                <button onClick={saveIdentificationNumber}>Save</button>
                <button onClick={() => setIdentificationNumberPopupOpen(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        {/* Position popup */}
        {isPositionPopupOpen && (
          <div className={styles.popup}>
            <div className={styles.popupContent} onKeyDown={(e) => handleKeyDown(e, savePosition, () => setPositionPopupOpen(false))} tabIndex={0}>
              <h3>Change Position</h3>
              <input 
                type="text" 
                placeholder="Enter new position" 
                value={newPosition} 
                onChange={(e) => setNewPosition(e.target.value)} 
              />
              <div className={styles.popupButtons}>
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
