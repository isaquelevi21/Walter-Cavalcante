import React, { useState } from 'react';
import './Header.css'; 
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from 'react-icons/fa';
import logoCampanha from '../../assets/images/logo_header.png';
import { candidato } from '../../data/candidato';

const Header = () => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

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
            <li
              className={`nav-dropdown ${submenuOpen ? 'open' : ''}`}
              onMouseEnter={() => setSubmenuOpen(true)}
              onMouseLeave={() => setSubmenuOpen(false)}
            >
              <a href="#biografia">
                Quem Sou
                <span
                  className="dropdown-arrow"
                  role="button"
                  tabIndex={0}
                  onClick={(e) => {
                    e.preventDefault();
                    setSubmenuOpen((prev) => !prev);
                  }}
                >▾</span>
              </a>
              <ul className="dropdown-menu">
                <li><a href="#biografia">Ação Parlamentar</a></li>
              </ul>
            </li>
            <li><a href="#propostas">Compromissos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>

        <div className="redes-sociais">
            <a 
              href={candidato.redesSociais.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="icone-social"
            >
              <FaInstagram size={24} />
            </a>

            <a 
              href={candidato.redesSociais.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="icone-social"
            >
              <FaFacebookF size={24} />
            </a>

            <a 
              href={candidato.redesSociais.youtube} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="icone-social"
            >
              <FaYoutube size={24} />
            </a>

            <a 
              href={candidato.redesSociais.tiktok} 
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