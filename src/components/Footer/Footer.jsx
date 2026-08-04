import React from 'react';
import { Link } from 'react-router-dom';
import logoCampanha from '../../assets/images/logo_header.png';
import './Footer.css'; // Vamos criar este arquivo no próximo passo

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
            <li><strong>Candidato:</strong> Walter Cavalcante - 43.640</li>
            <li><strong>Partido:</strong> Partido Verde (PV)</li>
            <li><strong>Cargo disputado:</strong> Deputado Estadual</li>
            <li><strong>CNPJ da campanha:</strong> 00.000.000/0000-00</li>
            <li className="contact-item"><strong>E-mail:</strong> contato@walter43640.com.br</li>
          </ul>
        </div>

        {/* Coluna 3: Redes Sociais e Páginas Legais */}
        <div className="footer-col social-col">
          <h4 className="footer-title">Siga-nos nas redes</h4>
          <div className="social-icons">
            {/* Mantive as siglas, mas com o formato circular da sua referência */}
            <a href="#" aria-label="YouTube" className="icon-circle">YT</a>
            <a href="#" aria-label="Instagram" className="icon-circle">IG</a>
            <a href="#" aria-label="Facebook" className="icon-circle">FB</a>
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
          <p>Walter Cavalcante © 2026 - Todos os direitos reservados.</p>
          <p className="ai-notice">
            Material de propaganda eleitoral.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;