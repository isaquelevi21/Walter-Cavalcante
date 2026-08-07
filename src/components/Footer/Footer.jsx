import React from 'react';
import { Link } from 'react-router-dom';
import logoCampanha from '../../assets/images/logo_header.png';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from 'react-icons/fa';
import { candidato } from '../../data/candidato';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="container footer-grid">
        
        {/* Coluna 1: Identidade Visual */}
        <div className="footer-col logo-col">
          <img src={logoCampanha} alt="Logo Walter Cavalcante" className="footer-logo" />
        </div>

        {/* Coluna 2: Informações Obrigatórias TSE e Contato */}
        <div className="footer-col info-col">
          <h4 className="footer-title">Informações</h4>
          <ul className="footer-list">
            <li><strong>Candidato:</strong> {candidato.nomeCompleto} - {candidato.numero}</li>
            <li><strong>Partido:</strong> {candidato.partidoNomeCompleto} ({candidato.partido})</li>
            <li><strong>Cargo disputado:</strong> {candidato.cargo}</li>
            <li><strong>CNPJ da campanha:</strong> {candidato.cnpjCampanha}</li>
            <li className="contact-item"><strong>E-mail:</strong> {candidato.emailOficial}</li>
          </ul>
        </div>

        {/* Coluna 3: Redes Sociais e Páginas Legais */}
        <div className="footer-col social-col">
          <h4 className="footer-title">Siga-nos nas redes</h4>
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
          <div className="legal-links">
            <Link to="/politica-de-privacidade">Política de Privacidade</Link>
            <Link to="/termos-de-uso">Termos de Uso</Link>
          </div>
        </div>

      </div>

      {/* Barra Inferior: Direitos Autorais e Regra de IA do TSE */}
      <div className="footer-bottom">
        <div className="container bottom-content">
          <p>{candidato.nomeCompleto} © 2026 - Todos os direitos reservados.</p>
          <p className="ai-notice">
            Material de propaganda eleitoral.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;