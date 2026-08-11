import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CookieBanner from "./components/Cookies/CookieBanner"; // 1. Importe aqui
import Home from './pages/Home';
import Privacidade from './pages/Legal/PoliticaPrivacidade';
import Termos from './pages/Legal/TermosDeUso';
import BiografiaCompleta from './pages/BiografiaCompleta';
function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politica-de-privacidade" element={<Privacidade />} />
        <Route path="/termos-de-uso" element={<Termos />} />
        <Route path="/biografia-completa" element={<BiografiaCompleta />} />
      </Routes>
      
      <Footer />
      
      {/* 2. Coloque o banner aqui, para que ele sobreponha todas as páginas */}
      <CookieBanner />
    </Router>
  );
}

export default App;