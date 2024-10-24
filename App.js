import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/products/Products';
import Categories from './components/products/Categories';
import Shoppingcart from './components/products/Shoppingcart';
import Staff from './components/products/Staff';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Categories />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/Shoppingcart" element={<Shoppingcart/>} />
                <Route path="/Staff" element={<Staff/>}/>
            </Routes>
        </Router>
    );
}

export default App; 