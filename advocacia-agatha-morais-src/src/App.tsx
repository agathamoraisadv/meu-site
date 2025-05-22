import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SobrePage from './pages/SobrePage';
import AreasAtuacaoPage from './pages/AreasAtuacaoPage';
import ContatoPage from './pages/ContatoPage';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/areas-atuacao" element={<AreasAtuacaoPage />} />
          <Route path="/contato" element={<ContatoPage />} />
        </Routes>
        <WhatsAppButton phoneNumber="+5585999324821" message="Olá, gostaria de uma consultoria jurídica." />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
