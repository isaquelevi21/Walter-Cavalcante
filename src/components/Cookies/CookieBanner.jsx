import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Verifica se o usuário já aceitou os cookies anteriormente
  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  // Se já aceitou, não renderiza nada na tela
  if (!isVisible) return null;

  return (
    <div style={styles.banner}>
      <p style={styles.text}>
        Usamos cookies para melhorar sua experiência de navegação e entender como você interage com nosso site. Ao continuar, você concorda com nossa{' '}
        <Link to="/politica-de-privacidade" style={styles.link}>
          Política de Privacidade
        </Link>.
      </p>
      <button onClick={handleAccept} style={styles.button}>
        Aceitar
      </button>
    </div>
  );
};

const styles = {
  banner: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#F8F9FA',
    borderTop: '2px solid var(--accent-gold, #C08A2E)',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 -4px 10px rgba(0,0,0,0.05)',
    zIndex: 9999,
    flexWrap: 'wrap',
    gap: '15px'
  },
  text: {
    margin: 0,
    fontSize: '0.9rem',
    color: '#333',
    flex: '1 1 300px'
  },
  link: {
    color: 'var(--primary-blue, #16294D)',
    textDecoration: 'underline',
    fontWeight: 'bold'
  },
  button: {
    padding: '10px 25px',
    backgroundColor: 'var(--primary-blue, #16294D)',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s'
  }
};

export default CookieBanner;