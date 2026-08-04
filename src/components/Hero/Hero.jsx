import React, { useState, useEffect } from 'react';
import foto1 from '../../assets/images/Carrosel.png';
import foto2 from '../../assets/images/Carrosel02.png';
import foto3 from '../../assets/images/Carrosel03.png';
import foto4 from '../../assets/images/Carrosel04.png';
const Hero = () => {
  // 1. Array com as imagens do carrossel
  // Substitua estes links pelas imagens reais da campanha futuramente.
  // Você também pode importar imagens locais da sua pasta src/assets.
   const imagensCarrossel = [foto1, foto2, foto3,foto4];

  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceAtual((indiceAnterior) => 
        indiceAnterior === imagensCarrossel.length - 1 ? 0 : indiceAnterior + 1
      );
    }, 5000);

    return () => clearInterval(intervalo);
  }, [imagensCarrossel.length]);

  return (
    <section id="inicio" className="hero-section" style={styles.hero}>
      <div className="container" style={styles.container}>
        
        {/* Bloco de Texto (Esquerda) com a Biografia */}
        <div className="hero-text" style={styles.text}>
          <span style={styles.tagline}>CONHEÇA UM POUCO DA MINHA HISTÓRIA</span>
          <h1 style={styles.title}>Walter Cavalcante</h1>
          
          <div style={styles.bioContainer}>
            <p style={styles.shortIntro}>Uma vida dedicada ao trabalho, à família e ao desenvolvimento do Ceará:</p>
            
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <strong>✓ Valores Firmes:</strong> Cristão, casado, pai de dois filhos e defensor da vida e da família.
              </li>
              <li style={styles.listItem}>
                <strong>✓ Gestão e Habitação:</strong> De office boy a fundador da COHABECE, responsável por milhares de moradias populares.
              </li>
              <li style={styles.listItem}>
                <strong>✓ Por Fortaleza:</strong> Vereador por 5 mandatos, Presidente da Câmara (2013-2014) e criador da Sala de Direitos Humanos.
              </li>
              <li style={styles.listItem}>
                <strong>✓ Pelo Ceará:</strong> Deputado Estadual reeleito, líder atuante e criador da pioneira Sala do Empreendedor.
              </li>
            </ul>

            <p style={styles.highlightText}>
              Para continuarmos esse trabalho pelo povo cearense, peço o seu voto. <strong>Sou candidato à reeleição: 43.640.</strong>
            </p>
          </div>

          <a href="#propostas" className="btn-primary" style={styles.button}>
            Conheça as Propostas
          </a>
        </div>
        
        {/* Bloco do Carrossel Automático (Direita) */}
        <div className="hero-image" style={styles.imageBox}>
          <img 
            src={imagensCarrossel[indiceAtual]} 
            alt={`Foto de Walter Cavalcante em ação ${indiceAtual + 1}`} 
            style={styles.carouselImage} 
          />
        </div>

      </div>
    </section>
  );
};

const styles = {
  hero: { 
    backgroundColor: 'var(--bg-light)', 
    padding: '40px 5% 80px 5%', // Reduzido de 120px para 40px
    borderBottom: '4px solid var(--accent-orange)' 
  },
  container: { 
    maxWidth: '1250px', // Aumentado para dar mais espaço geral
    margin: '0 auto', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    gap: '40px', // Diminuído para aproximar um pouco o texto da imagem
    flexWrap: 'wrap'
  },
  text: { 
    flex: '1 1 450px' // Ajustado para balancear com a nova largura da imagem
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
    margin: '10px 0 15px 0', 
    color: 'var(--primary-green)' 
  },
  bioContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px'
  },
  shortIntro: {
    fontSize: '1rem',
    color: '#333',
    marginBottom: '12px',
    fontWeight: '500'
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: '0 0 15px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  listItem: { 
    fontSize: '0.95rem', 
    lineHeight: '1.4', 
    color: '#333',
    backgroundColor: '#FFFFFF', // Fundo branco para destacar do fundo cinza claro
    padding: '10px 15px',
    borderRadius: '6px',
    borderLeft: '4px solid var(--primary-green)', // Linha verde na lateral de cada tópico
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)' // Sombrinha bem leve
  },
  highlightText: {
    fontSize: '1rem',
    lineHeight: '1.4',
    color: 'var(--primary-green)',
    borderLeft: '4px solid var(--accent-orange)',
    paddingLeft: '15px',
    marginTop: '10px'
  },
  paragraph: { 
    fontSize: '0.95rem', 
    lineHeight: '1.4', // REDUZIDO: Deixa as linhas do texto mais próximas umas das outras
    color: '#333',
    textAlign: 'justify' 
  },
  highlightText: {
    fontSize: '1rem',
    lineHeight: '1.4',
    color: 'var(--primary-green)',
    borderLeft: '4px solid var(--accent-orange)',
    paddingLeft: '15px',
    marginTop: '5px' // Ajustado para ficar mais harmônico com o texto de cima
  },
  button: { 
    backgroundColor: 'var(--primary-green)', 
    color: 'white', 
    padding: '12px 25px', 
    textDecoration: 'none', 
    fontWeight: 'bold', 
    borderRadius: '4px', 
    display: 'inline-block',
    transition: 'opacity 0.3s',
    marginTop: '10px'
  },
  imageBox: { 
    flex: '1 1 550px', // AUMENTADO: Garante que a imagem ocupe mais espaço horizontal
    display: 'flex', 
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: '12px', // Bordas um pouco mais arredondadas para dar um ar moderno
    boxShadow: '0 15px 40px rgba(0,0,0,0.15)' // Sombra um pouco mais forte para destacar a foto
  },
  carouselImage: { 
    width: '100%', 
    height: '550px', // AUMENTADO: Imagem bem mais alta, ganhando imponência na tela
    objectFit: 'cover', 
    transition: 'opacity 0.5s ease-in-out' 
  }
};

export default Hero;