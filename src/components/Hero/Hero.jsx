import React from 'react';
import Interface from '../../assets/images/interface.png';

const Hero = () => {
  return (
    <section id="inicio" className="hero-section" style={styles.hero}>
      <div style={styles.carouselWrapper}>
        <div style={styles.imageBox}>
          <img
            src={Interface}
            alt="Foto de Walter Cavalcante em ação"
            style={styles.carouselImage}
          />

          <div style={styles.overlay}>
            <div style={styles.overlayContent}>
              <div style={styles.actions}>
                <a href="#biografia" className="btn-primary" style={styles.button}>
                  Conheça minha trajetória
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    backgroundColor: 'var(--bg-light)',
    padding: '0',
    borderBottom: '4px solid var(--accent-orange)'
  },
  carouselWrapper: {
    width: '100vw',
    marginLeft: 'calc(50% - 50vw)',
    marginRight: 'calc(50% - 50vw)',
    marginTop: 0,
    marginBottom: 0
  },
  imageBox: {
    position: 'relative',
    width: '100%',
    maxHeight: '750px', // Trava de segurança para monitores gigantes (iMacs, etc)
    minHeight: '400px', // Trava de segurança para celulares
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#196B32' 
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Com a proporção travada acima, o cover funciona perfeitamente
    objectPosition: 'center 20%',
    display: 'block',
    transition: 'opacity 0.5s ease-in-out'
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    padding: '4rem 8%'
  },
  overlayContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  actions: {
    display: 'flex',
  },
  button: {
    backgroundColor: 'var(--primary-green, #196B32)',
    color: 'white',
    padding: '14px 28px',
    textDecoration: 'none',
    fontWeight: 'bold',
    borderRadius: '999px',
    display: 'inline-block',
    transition: 'all 0.3s',
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
    border: '2px solid white'
  }
};

export default Hero;