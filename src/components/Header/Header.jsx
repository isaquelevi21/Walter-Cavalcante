import React from 'react';
import './Header.css'; 

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

        <div className="social-links">
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="Facebook">FB</a>
          <a href="#" aria-label="WhatsApp">WA</a>
        </div>
        
      </div>
    </header>
  );
};

export default Header;