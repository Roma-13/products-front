import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Private from './categories/Private';
import Company from './categories/Company';
import Security from './categories/Security';
import './App.css';

function App() {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<Private />} /> {/* Change component to element */}
        <Route path="/company" element={<Company />} /> {/* Change component to element */}
        <Route path="/security" element={<Security />} /> {/* Change component to element */}
        <Route path="*" element={<h2>404 Not Found</h2>} /> {/* Change component to element */}
      </Routes>
    </Router>
  );
}

export default App;
