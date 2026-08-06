import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Quando o site carregar, verifica se o usuário já aceitou os cookies antes
    const consent = localStorage.getItem('cookieConsent_walter');
    if (!consent) {
      // Se não aceitou (ou é a primeira visita), mostra o banner
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    // Salva a permissão no navegador do usuário
    localStorage.setItem('cookieConsent_walter', 'true');
    // Esconde o banner
    setIsVisible(false);
  };

  // Se isVisible for falso, o componente não renderiza nada na tela
  if (!isVisible) return null;

  return (
    <div style={styles.banner}>
      <div style={styles.container}>
        <p style={styles.text}>
          Utilizamos cookies para oferecer melhor experiência, melhorar o desempenho, analisar como você interage em nosso site e personalizar conteúdo. Ao utilizar este site, você concorda com o uso de cookies e com nossa{' '}
          <Link to="/politica-de-privacidade" style={styles.link}>
            Política de Privacidade
          </Link>.
        </p>
        <button onClick={handleAccept} style={styles.button}>
          Prosseguir e Aceitar
        </button>
      </div>
    </div>
  );
};

const styles = {
  banner: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#111827', // Fundo escuro igual ao sub-footer
    color: '#F9FAFB',
    padding: '20px',
    boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.15)',
    zIndex: 9999, // Garante que fique por cima de tudo
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '20px',
    flexWrap: 'wrap', // Permite quebrar linha no celular
  },
  text: {
    margin: 0,
    fontSize: '0.9rem',
    lineHeight: '1.5',
    flex: '1 1 300px',
  },
  link: {
    color: 'var(--accent-orange, #EF7C00)',
    textDecoration: 'underline',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'var(--primary-green, #196B32)',
    color: '#FFFFFF',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    whiteSpace: 'nowrap',
  }
};

export default CookieBanner;