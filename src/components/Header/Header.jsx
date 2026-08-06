import React from 'react';
import './Header.css'; 
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from 'react-icons/fa';

// 1. IMPORTAÇÃO CORRETA DA IMAGEM
// Voltamos duas pastas (../../) para sair de 'Header' e 'components', caindo em 'src'
import logoCampanha from '../../assets/images/logo_header.png';

const Header = () => {
  return (
    <header className="header-fixed">
      <div className="container header-content">
        
        {/* Área da Logo Atualizada */}
        <div className="logo-area">
          {/* 2. USO DA VARIÁVEL IMPORTADA COM CHAVES */}
          <img
            src={logoCampanha} 
            alt="Logo da Campanha" 
            className="header-logo" 
          />
        </div>
        
        <nav className="main-nav">
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#biografia">Quem Sou</a></li>
            <li><a href="#propostas">Compromissos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>

        <div className="redes-sociais">
            <a 
              href="https://www.instagram.com/walterlfcavalcante?igsh=MWQwYWNtdm1tYWh4" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="icone-social"
            >
              <FaInstagram size={24} />
            </a>

            <a 
              href="https://www.facebook.com/depwaltercavalcante" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="icone-social"
            >
              <FaFacebookF size={24} />
            </a>

            <a 
              href="https://www.youtube.com/@walterlfcavalcante" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="icone-social"
            >
              <FaYoutube size={24} />
            </a>

            <a 
              href="https://www.tiktok.com/@walterlfcavalcante?_r=1&_t=ZS-98fEqpppcgP" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="icone-social"
            >
              <FaTiktok size={24} />
            </a>
          </div>
        
      </div>
    </header>
  );
};

export default Header;