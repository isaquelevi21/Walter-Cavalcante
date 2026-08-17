import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Importações dos componentes
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CookieBanner from "./components/Cookies/CookieBanner";
import ScrollToTop from './components/Scroll/ScrollToTop'; 

// Importações das páginas
import Home from './pages/Home';
import Privacidade from './pages/Legal/PoliticaPrivacidade';
import Termos from './pages/Legal/TermosDeUso';
import BiografiaCompleta from './pages/BiografiaCompleta';
import Links from './pages/Links/Links'; 

// Criamos um componente interno para gerenciar a visibilidade
function AppContent() {
  // O useLocation descobre em qual página o usuário está agora
  const location = useLocation();
  
  // Criamos uma regra: "É a página de links?" (Verdadeiro ou Falso)
  const isLinksPage = location.pathname === '/links';

  return (
    <>
      <ScrollToTop />
      
      {/* O Header só vai aparecer se NÃO for a página de links */}
      {!isLinksPage && <Header />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politica-de-privacidade" element={<Privacidade />} />
        <Route path="/termos-de-uso" element={<Termos />} />
        <Route path="/biografia-completa" element={<BiografiaCompleta />} />
        <Route path="/links" element={<Links />} />
      </Routes>
      
      {/* O Footer e os Cookies só vão aparecer se NÃO for a página de links */}
      {!isLinksPage && <Footer />}
      {!isLinksPage && <CookieBanner />}
    </>
  );
}

// O componente principal App apenas empacota tudo dentro do Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;