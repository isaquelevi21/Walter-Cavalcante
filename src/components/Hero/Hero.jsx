import React from 'react';
import './Hero.css';
import Interface from '../../assets/images/abertura_site.jpeg';

const Hero = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-container">
        
        {/* A imagem do banner */}
        <img 
          src={Interface} 
          alt="Walter Cavalcante" 
          className="hero-imagem" 
        />
        
        {/* A caixa que segura o botão ajustada para evitar o bug de tela branca */}
        <div className="hero-box-botao">
          <button 
            onClick={() => document.getElementById('biografia')?.scrollIntoView({ behavior: 'smooth' })}
            className="hero-btn"
          >
            Conheça minha trajetória
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;