import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from "./components/Products/Products";
import Categories from "./components/Categories/Categories";
import Company from "./components/Company/Company";
import Private from "./components/Private/Private";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import Security from "./components/Security/Security";
import ShoppingCart from "./components/Shoppingcart/Shoppingcart";
import Staff from "./components/Staff/Staff";
function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Categories />} /> 
        <Route path="/Products" element={<Products />} /> 
        <Route path="/ShoppingCart" element={<ShoppingCart />} /> 
        <Route path="/Company" element={<Company/>}/>
        <Route path="/Private" element={<Private/>}/>
        <Route path="/RegistrationForm" element={<RegistrationForm/>}/>
        <Route path="/Security" element={<Security/>}/>
        <Route path="/Staff" element={<Staff/>}/>
        <Route path="*" element={<h2>გვერდი არ მოიძებნა</h2>} /> 
      </Routes>
    </Router>
  );
}

export default App;
