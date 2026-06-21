import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Absolute path imports
import LandingPage from '/src/components/LandingPage';
import Signup from '/src/pages/Signup';
import Signin from '/src/pages/Signin';
import Construction from '/src/pages/Construction';
import Interior from '/src/pages/Interior';
import Products from '/src/pages/Products';
import Contact from '/src/pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/interior" element={<Interior />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}