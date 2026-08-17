import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaInstagram, 
  FaWhatsapp, 
  FaFacebookF, 
  FaYoutube, 
  FaTiktok, 
  FaGlobe 
} from 'react-icons/fa';
import './Links.css';

// Importe a foto do candidato ou use a logo
import fotoPerfil from '../../assets/images/foto_oficial.jpeg';// Ajuste o caminho da sua foto se necessário

export default function Links() {
  const links = [
    {
      id: 1,
      titulo: 'Acessar Site Oficial',
      subtitulo: 'Conheça nossa história e propostas',
      url: '/',
      interno: true,
      icone: <FaGlobe />,
      destaque: true
    },
    // {
    //   id: 2,
    //   titulo: 'WhatsApp Oficial',
    //   subtitulo: 'Fale diretamente com nossa equipe',
    //   url: 'https://wa.me/5585999999999', // Substitua pelo número oficial
    //   interno: false,
    //   icone: <FaWhatsapp className="icon-wpp" />
    // },
    {
      id: 3,
      titulo: 'Instagram',
      subtitulo: '@walterlfcavalcante',
      url: 'https://www.instagram.com/walterlfcavalcante?igsh=MWQwYWNtdm1tYWh4', // Substitua pelo link correto
      interno: false,
      icone: <FaInstagram className="icon-insta" />
    },
    {
      id: 4,
      titulo: 'Facebook',
      subtitulo: 'Acompanhe nossas publicações',
      url: 'https://www.facebook.com/depwaltercavalcante', // Substitua pelo link correto
      interno: false,
      icone: <FaFacebookF className="icon-face" />
    },
    {
      id: 5,
      titulo: 'Canal no YouTube',
      subtitulo: 'Assista aos nossos vídeos e discursos',
      url: 'https://www.youtube.com/@walterlfcavalcante', // Substitua pelo link correto
      interno: false,
      icone: <FaYoutube className="icon-yt" />
    },
    {
      id: 6,
      titulo: 'TikTok',
      subtitulo: 'Vídeos curtos e bastidores',
      url: 'https://www.tiktok.com/@walterlfcavalcante?_r=1&_t=ZS-98fEqpppcgP', // Substitua pelo link correto
      interno: false,
      icone: <FaTiktok className="icon-tk" />
    }
  ];

  return (
    <main className="bio-container">
      <div className="bio-card">
        {/* Cabeçalho com Foto e Identidade */}
        <header className="bio-header">
          <div className="bio-avatar-wrapper">
            <img src={fotoPerfil} alt="Walter Cavalcante" className="bio-avatar" />
          </div>
          <h1 className="bio-name">Walter Cavalcante</h1>
          <span className="bio-badge">Deputado Estadual • 43.640</span>
          <p className="bio-tagline">Conecte-se com as nossas redes e faça parte da mudança!</p>
        </header>

        {/* Lista de Botões */}
        <section className="bio-links-list">
          {links.map((item) => (
            item.interno ? (
              <Link key={item.id} to={item.url} className={`bio-btn ${item.destaque ? 'destaque' : ''}`}>
                <span className="bio-btn-icon">{item.icone}</span>
                <div className="bio-btn-text">
                  <strong>{item.titulo}</strong>
                  <small>{item.subtitulo}</small>
                </div>
              </Link>
            ) : (
              <a 
                key={item.id} 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`bio-btn ${item.destaque ? 'destaque' : ''}`}
              >
                <span className="bio-btn-icon">{item.icone}</span>
                <div className="bio-btn-text">
                  <strong>{item.titulo}</strong>
                  <small>{item.subtitulo}</small>
                </div>
              </a>
            )
          ))}
        </section>

        {/* Rodapé Minimalista */}
        <footer className="bio-footer">
          <p>© 2026 Walter Cavalcante • Todos os direitos reservados</p>
        </footer>
      </div>
    </main>
  );
}