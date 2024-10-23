import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Practiceapi from './Pages/Practiceapi';
import Admin from './Pages/Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/practiceapi" element={<Practiceapi />} />
        <Route path="/login" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
