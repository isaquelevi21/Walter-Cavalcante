import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importação dos componentes fixos
import Header from './components/Header/Header.jsx'; // ou './components/Header/index.jsx' dependendo de como você nomeou
import Footer from './components/Footer/Footer.jsx';
import CookieBanner from './components/Cookies/CookieBanner.jsx';

// Importação das Páginas
import Home from './pages/Home.jsx';
import PoliticaPrivacidade from './pages/Legal/PoliticaPrivacidade.jsx';
import TermosDeUso from './pages/Legal/TermosDeUso.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/termos-de-uso" element={<TermosDeUso />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </BrowserRouter>
  );
}