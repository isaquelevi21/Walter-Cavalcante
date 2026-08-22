import React, { useState } from 'react';
import './Header.css'; 
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok, FaBars, FaTimes } from 'react-icons/fa';
import logoCampanha from '../../assets/images/logo_header.png';
import { candidato } from '../../data/candidato';
// Importamos o componente 'Link' aqui na linha abaixo
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [menuMobileOpen, setMenuMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleMenuClick = (sectionId) => (event) => {
    event.preventDefault();
    setMenuMobileOpen(false);

    if (location.pathname === '/' || location.pathname.includes('/Walter-Cavalcante')) {
      scrollToSection(sectionId);
      window.history.pushState(null, '', `/#${sectionId}`);
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <header className="header-fixed">
      <div className="header-content">
        
        <div className="logo-area">
          <img
            src={logoCampanha} 
            alt="Logo da Campanha" 
            className="header-logo" 
          />
        </div>

        <button 
          className="btn-menu-mobile" 
          onClick={() => setMenuMobileOpen(!menuMobileOpen)}
          aria-label="Menu"
        >
          {menuMobileOpen ? <FaTimes size={28} color="white" /> : <FaBars size={28} color="white" />}
        </button>
        
        <div className={`header-direita ${menuMobileOpen ? 'aberto' : ''}`}>
          <nav className="main-nav">
            <ul>
              <li><a href="#inicio" onClick={handleMenuClick('inicio')}>Início</a></li>
              <li
                className={`nav-dropdown ${submenuOpen ? 'open' : ''}`}
                onMouseEnter={() => setSubmenuOpen(true)}
                onMouseLeave={() => setSubmenuOpen(false)}
              >
                <a href="#biografia" onClick={handleMenuClick('biografia')}>
                  Quem Sou
                </a>
              </li>
              
              <li><a href="#acao-parlamentar" onClick={handleMenuClick('acao-parlamentar')}>Ações Parlamentares</a></li>
              <li><a href="#propostas" onClick={handleMenuClick('propostas')}>Bandeiras Que Defendo</a></li>
              <li><a href="#fala-walter" onClick={handleMenuClick('fala-walter')}>Fala Walter</a></li>
              
              {/* Substituímos a tag <a> normal pelo <Link> do React Router para essa página externa */}
              <li>
                <Link 
                  to="/materiais" 
                  className="link-destaque" 
                  onClick={() => setMenuMobileOpen(false)}
                >
                  Baixar Materiais
                </Link>
              </li>
              <li>
                {/* <Link to="/crie-seu-avatar" className="link-avatar" onClick={() => setMenuMobileOpen(false)}>
                  Crie seu Avatar
                </Link> */}
              </li>
              
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
        
      </div>
    </header>
  );
};

export default Header;