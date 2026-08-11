import React from 'react';
import './Hero.css';
import Interface from '../../assets/images/interface.png';

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
        
        {/* A caixa que segura o botão */}
        <div className="hero-box-botao">
          <a href="#biografia" className="hero-btn">
            Conheça minha trajetória
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;