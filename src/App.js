import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';

import { WhatsAppWidget } from 'react-whatsapp-widget'; // ✅ correction ici
import 'react-whatsapp-widget/dist/index.css';

function App() {
  return (
    <Router>
      <Navbar />

      {/* 🔻 Section principale de la page */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />

      {/* ✅ Bouton WhatsApp toujours visible en bas à droite */}
      <WhatsAppWidget
        phoneNumber="237656947951" // Remplace par ton vrai numéro
        companyName="AppartEase"
        message="Bonjour 👋, comment pouvons-nous vous aider ?"
        sendButton="Envoyer"
        replyTimeText="Réponse généralement en quelques minutes"
      />
    </Router>
  );
}

export default App;
