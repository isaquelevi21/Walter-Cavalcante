import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="hero-section" style={styles.hero}>
      <div className="container" style={styles.container}>
        <div className="hero-text" style={styles.text}>
          <span style={styles.tagline}>TRADIÇÃO E COMPROMISSO</span>
          <h1 style={styles.title}>Trabalhando ao lado do povo, todos os dias.</h1>
          <p style={styles.subtitle}>
            Uma trajetória marcada pelo respeito, lealdade e resultados reais para nossa gente.
          </p>
          <a href="#propostas" className="btn-primary" style={styles.button}>
            Conheça as Propostas
          </a>
        </div>
        <div className="hero-image" style={styles.imageBox}>
          {/* Placeholder para a foto oficial do candidato */}
          <div style={styles.placeholderImage}>
            [Foto Oficial do Candidato - Fundo Transparente]
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: { backgroundColor: 'var(--bg-light)', padding: '120px 0 80px 0', borderBottom: '4px solid var(--accent-gold)' },
  container: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px' },
  text: { flex: 1 },
  tagline: { color: 'var(--accent-gold)', fontWeight: 'bold', letterSpacing: '2px', fontSize: '0.9rem' },
  title: { fontSize: '3.5rem', lineHeight: '1.2', margin: '15px 0', color: 'var(--primary-blue)' },
  subtitle: { fontSize: '1.2rem', color: '#555', marginBottom: '30px' },
  button: { backgroundColor: 'var(--primary-blue)', color: 'white', padding: '15px 30px', textDecoration: 'none', fontWeight: 'bold', borderRadius: '4px', display: 'inline-block' },
  imageBox: { flex: 1, display: 'flex', justifyContent: 'center' },
  placeholderImage: { width: '100%', height: '400px', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', borderRadius: '8px' }
};

export default Hero;