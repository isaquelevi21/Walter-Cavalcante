import React, { useState } from 'react';
import './Header.css'; 
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok, FaBars, FaTimes } from 'react-icons/fa';
import logoCampanha from '../../assets/images/logo_sem_numero.png';
import { candidato } from '../../data/candidato';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [menuMobileOpen, setMenuMobileOpen] = useState(false); // Estado para controlar o menu no celular
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
    // 1. MÁGICA: Previne o comportamento padrão (pulo seco) do navegador
    event.preventDefault();
    
    // Fecha o menu mobile ao clicar em qualquer link
    setMenuMobileOpen(false);

    // 2. Verifica se estamos na Home (raiz '/' ou no '/Walter-Cavalcante' do GitHub Pages)
    if (location.pathname === '/' || location.pathname.includes('/Walter-Cavalcante')) {
      scrollToSection(sectionId); // Força a rolagem suave
      // Atualiza a URL lá em cima sem recarregar a página
      window.history.pushState(null, '', `/#${sectionId}`);
    } else {
      // Se estiver em outra página (ex: Termos de Uso), navega para a Home na seção certa
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

        {/* Botão Hambúrguer que só aparece no celular */}
        <button 
          className="btn-menu-mobile" 
          onClick={() => setMenuMobileOpen(!menuMobileOpen)}
          aria-label="Menu"
        >
          {menuMobileOpen ? <FaTimes size={28} color="white" /> : <FaBars size={28} color="white" />}
        </button>
        
        {/* Lado Direito: Menu + Redes Sociais agrupados (Recebe a classe 'aberto' no celular) */}
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
              
              <li><a href="#acao-parlamentar" onClick={handleMenuClick('acao-parlamentar')}>Ação parlamentar</a></li>
              <li><a href="#propostas" onClick={handleMenuClick('propostas')}>Compromissos</a></li>
              <li><a href="#fala-walter" onClick={handleMenuClick('fala-walter')}>Fala Walter</a></li>
              {/* <li><a href="#contato" onClick={handleMenuClick('contato')}>Contato</a></li> */}
              
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