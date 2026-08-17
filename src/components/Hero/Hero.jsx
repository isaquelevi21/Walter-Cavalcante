import React from 'react';
import './Hero.css';
import Interface from '../../assets/images/abertura_site.jpg';

const Hero = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-container">
        
        {/* NOME DA CLASSE CORRIGIDO AQUI PARA "hero-image" */}
        <img 
          src={Interface} 
          alt="Walter Cavalcante" 
          className="hero-image" 
        />
        
        {/* A caixa que segura o botão */}
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