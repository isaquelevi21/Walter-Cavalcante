import React, { useState, useEffect } from 'react';
import foto1 from '../../assets/images/Carrosel.png';
import foto2 from '../../assets/images/Carrosel02.png';
import foto3 from '../../assets/images/Carrosel03.png';
import foto5 from '../../assets/images/Carrosel05.png';
import { candidato } from '../../data/candidato';

const Hero = () => {
  const imagensCarrossel = [foto5, foto3, foto1, foto2];
  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    const duracao = indiceAtual === 0 ? 8000 : 5000;
    const timeout = setTimeout(() => {
      setIndiceAtual((indiceAnterior) =>
        indiceAnterior === imagensCarrossel.length - 1 ? 0 : indiceAnterior + 1
      );
    }, duracao);

    return () => clearTimeout(timeout);
  }, [indiceAtual, imagensCarrossel.length]);

  const irParaAnterior = () => {
    setIndiceAtual((indiceAnterior) =>
      indiceAnterior === 0 ? imagensCarrossel.length - 1 : indiceAnterior - 1
    );
  };

  const irParaProximo = () => {
    setIndiceAtual((indiceAnterior) =>
      indiceAnterior === imagensCarrossel.length - 1 ? 0 : indiceAnterior + 1
    );
  };

  return (
    <section id="inicio" className="hero-section" style={styles.hero}>
      <div style={styles.carouselWrapper}>
        <div style={styles.imageBox}>
          <img
            src={imagensCarrossel[indiceAtual]}
            alt={`Foto de Walter Cavalcante em ação ${indiceAtual + 1}`}
            style={styles.carouselImage}
          />

          <div style={styles.overlay}>
            <div style={styles.overlayContent}>
              <span style={styles.tagline}>CONHEÇA UM POUCO DA MINHA HISTÓRIA</span>
              <h1 style={styles.title}>{candidato.nomeCompleto}</h1>
              <p style={styles.description}>
                Experiência pública, compromisso social e um mandato voltado para o desenvolvimento do Ceará.
              </p>
              <div style={styles.actions}>
                <a href="#biografia" className="btn-primary" style={styles.button}>
                  Conheça minha trajetória
                </a>
              </div>
            </div>
          </div>
          <div style={styles.navArrowLeft}>
            <button type="button" onClick={irParaAnterior} style={styles.navButton} aria-label="Imagem anterior">←</button>
          </div>
          <div style={styles.navArrowRight}>
            <button type="button" onClick={irParaProximo} style={styles.navButton} aria-label="Próxima imagem">→</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    backgroundColor: 'var(--bg-light)',
    padding: '0 0 60px 0',
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
    height: 'calc(60vh + 4cm)',
    minHeight: '600px',
    maxHeight: '760px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  carouselImage: {
    width: '150%',
    height: '150%',
    objectFit: 'cover',
    objectPosition: 'center',
    transition: 'opacity 0.5s ease-in-out'
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.32) 55%, rgba(0,0,0,0.18) 100%)',
    display: 'flex',
    alignItems: 'center',
    padding: '2rem 5%'
  },
  overlayContent: {
    maxWidth: '700px',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px'
  },
  tagline: {
    color: 'var(--accent-orange)',
    fontWeight: 'bold',
    letterSpacing: '1.5px',
    fontSize: '0.85rem',
    textTransform: 'uppercase'
  },
  title: {
    fontSize: '3rem',
    lineHeight: '1.1',
    margin: '0',
    color: '#fff'
  },
  description: {
    fontSize: '1.05rem',
    lineHeight: '1.7',
    color: '#f3f4f6',
    margin: 0,
    maxWidth: '560px'
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flexWrap: 'wrap',
    marginTop: '10px'
  },
  button: {
    backgroundColor: 'var(--primary-green)',
    color: 'white',
    padding: '12px 25px',
    textDecoration: 'none',
    fontWeight: 'bold',
    borderRadius: '999px',
    display: 'inline-block',
    transition: 'opacity 0.3s',
    boxShadow: '0 10px 22px rgba(0,0,0,0.18)'
  },
  navArrowLeft: {
    position: 'absolute',
    left: '2%',
    top: '16%',
    zIndex: 10
  },
  navArrowRight: {
    position: 'absolute',
    right: '2%',
    top: '16%',
    zIndex: 10
  },
  navButtons: {
    display: 'flex',
    gap: '10px'
  },
  navButton: {
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: 'rgba(255,255,255,0.9)',
    color: 'var(--primary-green)',
    fontSize: '1.1rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
  }
};

export default Hero;