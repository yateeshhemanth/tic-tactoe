// Import necessary modules and components
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from './components/Nav';
import Home from './components/Home';
import Contact from './components/Contact'; // Import the Contact component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Create a root element for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<App />} />
        <Route path="/contact" element={<Contact />} /> {/* Add this route */}
      </Routes>
    </React.StrictMode>
  </Router>
);
