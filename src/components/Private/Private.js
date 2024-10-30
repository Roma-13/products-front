import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Private.css';  // Import the CSS file
import penIcon from '../../assets/pen-solid.svg'; // Correct path to the pen icon
import cameraIcon from '../../assets/camera-solid.svg'; // Correct path to the camera icon

const Private = () => {
  const [image, setImage] = useState('kvercxi 1'); // Default image
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [newImage, setNewImage] = useState('');

  const [name, setName] = useState('Johnathan');
  const [lastName, setLastName] = useState('Doesshvili');
  const [phone, setPhone] = useState('123 456 789');

  const [isNamePopupOpen, setNamePopupOpen] = useState(false);
  const [isLastNamePopupOpen, setLastNamePopupOpen] = useState(false);
  const [isPhonePopupOpen, setPhonePopupOpen] = useState(false);

  const [newName, setNewName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setImage(savedImage);
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
      localStorage.setItem('profileImage', newImage);
      setImagePopupOpen(false);
    }
  };

  const saveName = () => {
    setName(newName);
    setNamePopupOpen(false);
  };

  const saveLastName = () => {
    setLastName(newLastName);
    setLastNamePopupOpen(false);
  };

  const savePhone = () => {
    setPhone(newPhone);
    setPhonePopupOpen(false);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^[\d\s]*$/.test(value)) { // Allow only digits and spaces
      setNewPhone(value);
    }
  };

  const handleKeyDown = (e, saveFunc) => {
    if (e.key === 'Enter') {
      saveFunc();
    } else if (e.key === 'Escape') {
      e.stopPropagation(); // Prevent bubbling to other elements
      setImagePopupOpen(false);
      setNamePopupOpen(false);
      setLastNamePopupOpen(false);
      setPhonePopupOpen(false);
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
        <div className='profile' style={{ backgroundImage: `url(${image || ''})` }}>
          <span className='camera-icon' onClick={() => setImagePopupOpen(true)} />
        </div>

        <div className='name'>
          Name: {name}
          <span className='pen-icon' onClick={() => setNamePopupOpen(true)} />
        </div>
        
        <div className='name'>
          Last Name: {lastName}
          <span className='pen-icon' onClick={() => setLastNamePopupOpen(true)} />
        </div>

        <div className='number'>
          Phone: {phone}
          <span className='pen-icon' onClick={() => setPhonePopupOpen(true)} />
        </div>

        {/* Popup for image upload */}
        {isImagePopupOpen && (
          <div className='popup'>
            <div className='popup-content'>
              <h3>Upload New Profile Image</h3>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload} 
                onKeyDown={(e) => handleKeyDown(e, saveImage)} // Add key down event
              />
              {newImage && <img src={newImage} alt="Preview" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />}
              <div className="popup-buttons">
                <button onClick={saveImage}>Save</button>
                <button onClick={() => setImagePopupOpen(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        {/* Popup for changing name */}
        {isNamePopupOpen && (
          <div className='popup'>
            <div className='popup-content'>
              <h3>Change Name</h3>
              <input 
                type="text" 
                placeholder="Enter new name" 
                value={newName} 
                onChange={(e) => setNewName(e.target.value)} 
                onKeyDown={(e) => handleKeyDown(e, saveName)} // Add key down event
              />
              <div className="popup-buttons">
                <button onClick={saveName}>Save</button>
                <button onClick={() => setNamePopupOpen(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        {/* Popup for changing last name */}
        {isLastNamePopupOpen && (
          <div className='popup'>
            <div className='popup-content'>
              <h3>Change Last Name</h3>
              <input 
                type="text" 
                placeholder="Enter new last name" 
                value={newLastName} 
                onChange={(e) => setNewLastName(e.target.value)} 
                onKeyDown={(e) => handleKeyDown(e, saveLastName)} // Add key down event
              />
              <div className="popup-buttons">
                <button onClick={saveLastName}>Save</button>
                <button onClick={() => setLastNamePopupOpen(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        {/* Popup for changing phone number */}
        {isPhonePopupOpen && (
          <div className='popup'>
            <div className='popup-content'>
              <h3>Change Phone Number</h3>
              <input 
                type="text" 
                placeholder="Enter new phone number" 
                value={newPhone} 
                onChange={handlePhoneChange} 
                onKeyDown={(e) => handleKeyDown(e, savePhone)} // Add key down event
              />
              <div className="popup-buttons">
                <button onClick={savePhone}>Save</button>
                <button onClick={() => setPhonePopupOpen(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Private;
