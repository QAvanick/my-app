import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import AppartementsPage from './components/AppartementsPage';


import { FaWhatsapp } from 'react-icons/fa'; // ✅ Icône WhatsApp

function App() {
  return (
    <Router>
      <Navbar />

      {/* 🔻 Section principale de la page */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/a-propos" element={<AboutPage />} />
  
        <Route path="/appartements" element={<AppartementsPage />} />

      </Routes>

      <Footer />

      {/* ✅ Bouton WhatsApp avec vraie icône */}
      <a
        href="https://wa.me/237656947951"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#25D366',
          color: 'white',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '30px',
          textDecoration: 'none',
          zIndex: 9999,
          boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
        }}
        title="Discuter sur WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </Router>
  );
}

export default App;
