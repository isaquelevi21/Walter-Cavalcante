import React, { useState, useEffect, useRef } from 'react';

// --- COMPONENTE DE ANIMAÇÃO ---
// Este componente cuida exclusivamente de fazer o número subir até o valor final
const AnimatedCounter = ({ finalValue, suffix }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  // 1. Verifica se o elemento apareceu na tela
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Só ativa quando 50% do card estiver visível
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  // 2. Faz a animação de contagem quando estiver visível
  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = null;
    const duration = 2000; // Tempo da animação: 2 segundos (2000ms)

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Atualiza o estado com o número arredondado
      setCount(Math.floor(progress * finalValue));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, finalValue]);

  return (
    <h3 ref={elementRef} style={styles.statNumber}>
      {count}{suffix}
    </h3>
  );
};


// --- COMPONENTE PRINCIPAL ---
const Trajetoria = () => {
  // Separei o número do sufixo ("+", "%") para o contador funcionar apenas na matemática
  const statsData = [
    { finalValue: 25, suffix: "+", label: "Anos de Vida Pública" },
    { finalValue: 150, suffix: "", label: "Projetos Aprovados" },
    { finalValue: 100, suffix: "%", label: "Compromisso com o Povo" },
  ];

  const projetosLei = [
    {
      id: "LEI 16.473/2017 ",
      categoria: "PROJETOS DE LEI",
      descricao: "CONSIDERA DE UTILIDADE PÚBLICA A ASSOCIAÇÃO DESPORTIVA, RECREATIVA E CULTURAL DO ESTADO DO CEARÁ (LIFEC), COM SEDE NO MUNICÍPIO DE FORTALEZA, ESTADO DO CEARÁ.",
      data: "2017"
    },
    {
      id: "LEI 16.823/2019",
      categoria: "LEIS ESTADUAIS",
      descricao: "INSTITUI A OBRIGATORIEDADE NA REALIZAÇÃO DE PROCESSO SELETIVO PARA CONTRATAÇÃO DE MENOR APRENDIZ E ESTAGIÁRIO PELOS ÓRGÃOS PÚBLICOS ESTADUAIS, A RESERVA DE ATÉ 10% DAS VAGAS AOS PORTADORES DE NECESSIDADE ESPECIAL, NA FORMA QUE INDICA.",
      data: "2019"
    },
    {
      id: "Indicação 45/2026",
      categoria: "PROPOSIÇÕES",
      descricao: "Solicita a reforma e ampliação do Hospital Geral, visando melhorar o atendimento de emergência e aumentar o número de leitos de UTI disponíveis para a população.",
      data: "20/05/2026"
    },
    {
      id: "PL 03/2026",
      categoria: "PROJETOS DE LEI",
      descricao: "Cria o programa 'Educação do Amanhã', que viabiliza a construção de novas creches em tempo integral nas periferias de Fortaleza.",
      data: "10/06/2026"
    },
    {
      id: "Indicação 46/2026",
      categoria: "PROPOSIÇÕES",
      descricao: "Propõe a implementação de sistema de iluminação inteligente e câmeras de monitoramento em praças públicas para aumentar a segurança nos bairros.",
      data: "18/07/2026"
    },
    {
      id: "PL 04/2026",
      categoria: "PROJETOS DE LEI",
      descricao: "Estabelece diretrizes para a preservação de áreas verdes urbanas e a criação de parques municipais focados na sustentabilidade ambiental.",
      data: "05/08/2026"
    }
  ];

  return (
    <section id="biografia" style={styles.section}>
      
      {/* Bloco de Números Dinâmicos */}
      <div style={styles.statsBanner}>
        <div className="container" style={styles.statsContainer}>
          {statsData.map((stat, index) => (
            <div key={index} style={styles.statCard}>
              <AnimatedCounter finalValue={stat.finalValue} suffix={stat.suffix} />
              <p style={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container" style={styles.projetosContainer}>
        <h2 style={styles.sectionTitle}>Ação Parlamentar</h2>
        
        <div style={styles.gridCards}>
          {projetosLei.map((projeto, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.cardHeader}>
                <h3 style={styles.cardTitle}>{projeto.id}</h3>
                <span style={styles.badge}>{projeto.categoria}</span>
              </div>
              <p style={styles.cardDesc}>{projeto.descricao}</p>
              <div style={styles.cardFooter}>
                <span style={styles.cardDate}>📅 {projeto.data}</span>
                <button style={styles.cardButton}>CLIQUE E VEJA MAIS</button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

// --- ESTILOS ---
const styles = {
  section: { 
    backgroundColor: '#FFFFFF', 
    paddingBottom: '80px' 
  },
  statsBanner: { 
    backgroundColor: 'var(--primary-green, #196B32)', 
    padding: '40px 0', 
    color: 'white' 
  },
  statsContainer: { 
    display: 'flex', 
    justifyContent: 'space-around', 
    gap: '20px', 
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  statCard: { 
    textAlign: 'center', 
    flex: '1 1 200px' 
  },
  statNumber: { 
    color: 'var(--accent-orange, #EF7C00)', 
    fontSize: '3.5rem', 
    margin: '0',
    fontWeight: 'bold'
  },
  statLabel: { 
    fontSize: '1.1rem', 
    fontWeight: '500', 
    marginTop: '5px' 
  },
  projetosContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '60px 5% 0 5%'
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    color: 'var(--primary-green, #196B32)',
    marginBottom: '40px'
  },
  gridCards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '25px'
  },
  card: {
    backgroundColor: '#F9FAFB', 
    borderRadius: '8px',
    padding: '30px', 
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    border: '1px solid #E5E7EB'
  },
  cardHeader: {
    marginBottom: '20px' 
  },
  cardTitle: {
    fontSize: '1.75rem',
    color: '#111827',
    marginBottom: '10px'
  },
  badge: {
    display: 'inline-block',
    backgroundColor: 'var(--primary-green, #196B32)',
    color: 'white',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    padding: '4px 8px',
    borderRadius: '4px'
  },
  cardDesc: {
    fontSize: '1rem', 
    color: '#4B5563',
    lineHeight: '1.6',
    flexGrow: 1, 
    marginBottom: '25px'
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid #E5E7EB',
    paddingTop: '20px' 
  },
  cardDate: {
    fontSize: '0.85rem',
    color: '#6B7280'
  },
  cardButton: {
    backgroundColor: '#6B7280', 
    color: 'white',
    border: 'none',
    padding: '8px 16px', 
    borderRadius: '20px', 
    fontSize: '0.8rem', 
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  }
};

export default Trajetoria;