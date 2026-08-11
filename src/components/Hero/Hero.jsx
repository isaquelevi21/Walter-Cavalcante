import React, { useState, useEffect } from 'react';
import foto1 from '../../assets/images/Carrosel.png';
import foto2 from '../../assets/images/Carrosel02.png';
import foto3 from '../../assets/images/Carrosel03.png';
import foto5 from '../../assets/images/teste.png';
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
    // A MÁGICA ACONTECE AQUI:
    aspectRatio: '16 / 9', // Trava na proporção padrão de monitores/artes horizontais
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
    objectPosition: 'center top',
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
  },
  navArrowLeft: {
    position: 'absolute',
    left: '2%',
    top: '50%',
    transform: 'translateY(-50%)', 
    zIndex: 10
  },
  navArrowRight: {
    position: 'absolute',
    right: '2%',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10
  },
  navButton: {
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: 'rgba(255,255,255,0.9)',
    color: '#196B32',
    fontSize: '1.2rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    transition: 'background-color 0.2s'
  }
};

export default Hero;