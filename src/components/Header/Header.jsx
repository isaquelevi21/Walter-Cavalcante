import React from 'react';
import './Header.css'; // Crie um arquivo Header.css se preferir separar os estilos

const Header = () => {
  return (
    <header className="header-fixed">
      <div className="container header-content">
        <div className="logo-area">
          {/* O selo circular sugerido na identidade visual */}
          <div className="number-seal">00000</div>
          <h2 className="candidate-name">Nome do Candidato</h2>
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
          {/* Adicione ícones reais depois (ex: react-icons ou FontAwesome) */}
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="Facebook">FB</a>
          <a href="#" aria-label="WhatsApp">WA</a>
        </div>
      </div>
    </header>
  );
};

export default Header;