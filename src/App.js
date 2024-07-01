import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Correct import for React Router v6
import Home from './pages/Home';
import ProductList from './components/ProductList'; // Correct path
import ProductDetails from './pages/ProductDetails'; // Correct path
import Cart from './components/Cart'; // Correct path
import Navbar from './components/Navbar'; // Import Navbar

const App = () => {
  return (
    <div>
      <Navbar /> {/* Include Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
