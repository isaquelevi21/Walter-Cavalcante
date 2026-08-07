import React, { useState, useEffect, useRef } from 'react';
import { candidato } from '../../data/candidato';

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
      id: "LEI 16.473/2017",
      categoria: "PROJETOS DE LEI",
      descricao: "Considera de utilidade pública a Associação Desportiva, Recreativa e Cultural do Estado do Ceará (LIFEC), com sede no município de Fortaleza, Estado do Ceará.",
      data: "2017",
      link: "https://www.al.ce.gov.br"
    },
    {
      id: "LEI 16.823/2019",
      categoria: "LEIS ESTADUAIS",
      descricao: "Institui a obrigatoriedade na realização de processo seletivo para contratação de menor aprendiz e estagiário pelos órgãos públicos estaduais, com reserva de até 10% das vagas aos portadores de necessidade especial, na forma que indica.",
      data: "2019",
      link: "https://www.al.ce.gov.br"
    },
    {
      id: "Indicação 45/2026",
      categoria: "PROPOSIÇÕES",
      descricao: "Solicita a reforma e ampliação do Hospital Geral, visando melhorar o atendimento de emergência e aumentar o número de leitos de UTI disponíveis para a população.",
      data: "2026",
      link: "https://www.al.ce.gov.br"
    },
    {
      id: "PL 03/2026",
      categoria: "PROJETOS DE LEI",
      descricao: "Cria o programa 'Educação do Amanhã', que viabiliza a construção de novas creches em tempo integral nas periferias de Fortaleza.",
      data: "2026",
      link: "https://www.al.ce.gov.br"
    },
    {
      id: "Lei nº 15.847/2015",
      categoria: "LEIS ESTADUAIS",
      descricao: "Adequação e destinação de 5% das unidades habitacionais construídas pelo Estado do Ceará para famílias de pessoas com necessidades especiais.",
      data: "2015",
      link: "https://www.al.ce.gov.br"
    },
    {
      id: "PL 04/2026",
      categoria: "PROJETOS DE LEI",
      descricao: "Estabelece diretrizes para a preservação de áreas verdes urbanas e a criação de parques municipais focados na sustentabilidade ambiental.",
      data: "2026",
      link: "https://www.al.ce.gov.br"
    },
    {
      id: "LEI 16.823/2019",
      categoria: "LEIS ESTADUAIS",
      descricao: "Reserva de até 10% das vagas para pessoas com deficiência em processos seletivos de estágio e menor aprendiz nos órgãos públicos estaduais.",
      data: "2019",
      link: "https://www.al.ce.gov.br"
    },
    {
      id: "LEI 17.226/2020",
      categoria: "LEIS ESTADUAIS",
      descricao: "Proibição do uso de cerol, linha chilena e outros materiais cortantes em pipas, com criação de semana estadual de conscientização.",
      data: "2020",
      link: "https://www.al.ce.gov.br"
    },
    {
      id: "LEI 16.605/2018",
      categoria: "LEIS ESTADUAIS",
      descricao: "Alteração dos prazos das licenças ambientais para postos de combustíveis, simplificando o licenciamento e fortalecendo a atividade econômica do setor.",
      data: "2018",
      link: "https://www.al.ce.gov.br"
    }
  ];

  return (
    <section id="biografia" style={styles.section}>
      <div className="container" style={styles.bioSummaryContainer}>
        <div style={styles.bioCard}>
          <span style={styles.bioEyebrow}>Quem Sou</span>
          <h2 style={styles.bioTitle}>Uma trajetória construída com compromisso e serviço</h2>
          <p style={styles.bioText}>
            Uma vida dedicada ao trabalho, à família e ao desenvolvimento do Ceará. Walter Cavalcante construiu sua história com dedicação à gestão pública, à habitação, aos direitos humanos e ao fortalecimento do empreendedorismo.
          </p>

          <ul style={styles.bioList}>
            <li><strong>Valores firmes:</strong> cristão, casado, pai de dois filhos e defensor da vida e da família.</li>
            <li><strong>Gestão e habitação:</strong> de office boy a fundador da COHABECE, responsável por milhares de moradias populares.</li>
            <li><strong>Por Fortaleza:</strong> vereador por 5 mandatos, presidente da Câmara e criador da Sala de Direitos Humanos.</li>
            <li><strong>Pelo Ceará:</strong> deputado estadual reeleito, líder atuante e criador da Sala do Empreendedor.</li>
          </ul>

          <p style={styles.bioHighlight}>
            Para continuarmos esse trabalho pelo povo cearense, peço o seu voto. <strong>Sou candidato à reeleição: {candidato.numero}.</strong>
          </p>
        </div>
      </div>
      
      {/* Bloco de Números Dinâmicos */}
      <div style={styles.statsBanner}>
        <div className="container" style={styles.statsContainer}>
          <div style={styles.statsIntro}>
            <h2 style={styles.statsName}>{candidato.nomeCompleto}</h2>
            <p style={styles.statsSubtitle}>em números</p>
          </div>
          <div style={styles.statsGrid}>
            {statsData.map((stat, index) => (
              <div key={index} style={styles.statCard}>
                <AnimatedCounter finalValue={stat.finalValue} suffix={stat.suffix} />
                <p style={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
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
                {projeto.link ? (
                  <a
                    href={projeto.link}
                    target="_blank"
                    rel="noreferrer"
                    style={styles.cardButton}
                  >
                    CLIQUE E VEJA MAIS
                  </a>
                ) : (
                  <button style={styles.cardButton}>CLIQUE E VEJA MAIS</button>
                )}
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
  bioSummaryContainer: {
    padding: '60px 0 20px'
  },
  bioCard: {
    background: 'linear-gradient(135deg, #f8faf8 0%, #ffffff 100%)',
    border: '1px solid #e5e7eb',
    borderRadius: '18px',
    padding: '36px',
    boxShadow: '0 14px 35px rgba(0,0,0,0.06)'
  },
  bioEyebrow: {
    display: 'inline-block',
    color: 'var(--accent-orange, #EF7C00)',
    fontWeight: '700',
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    marginBottom: '10px',
    fontSize: '0.8rem'
  },
  bioTitle: {
    fontSize: '2rem',
    color: 'var(--primary-green, #196B32)',
    margin: '0 0 16px',
    lineHeight: '1.2'
  },
  bioText: {
    fontSize: '1rem',
    color: '#4B5563',
    lineHeight: '1.7',
    marginBottom: '18px'
  },
  bioList: {
    paddingLeft: '20px',
    color: '#374151',
    lineHeight: '1.8',
    marginBottom: '18px'
  },
  bioHighlight: {
    fontSize: '1rem',
    color: 'var(--primary-green, #196B32)',
    borderLeft: '4px solid var(--accent-orange, #EF7C00)',
    paddingLeft: '15px',
    margin: 0
  },
  statsBanner: { 
    backgroundColor: 'var(--primary-green, #196B32)', 
    padding: '40px 0', 
    color: 'white',
    borderRadius: '24px',
    overflow: 'hidden'
  },
  statsContainer: { 
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'space-between', 
    gap: '30px', 
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  statsIntro: {
    flex: '0 0 280px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '8px',
    alignItems: 'flex-start'
  },
  statsName: {
    fontSize: '3rem',
    lineHeight: '1.02',
    margin: 0,
    color: '#FFFFFF',
    fontWeight: '900',
    fontFamily: 'Georgia, serif',
    letterSpacing: '0.02em',
    textTransform: 'capitalize'
  },
  statsSubtitle: {
    fontSize: '1rem',
    margin: 0,
    color: '#E5E7EB',
    fontStyle: 'italic',
    fontFamily: 'Georgia, serif',
    letterSpacing: '0.08em'
  },
  statsGrid: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    flex: '1 1 560px',
    flexWrap: 'wrap'
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
    alignItems: 'center',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    border: '1px solid #E5E7EB'
  },
  cardHeader: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px'
  },
  cardTitle: {
    fontSize: '1.5rem',
    color: '#111827',
    margin: 0,
    lineHeight: '1.2'
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
    lineHeight: '1.7',
    flexGrow: 1, 
    margin: '0 auto 25px',
    maxWidth: '100%'
  },
  cardFooter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: '1px solid #E5E7EB',
    paddingTop: '20px',
    gap: '10px'
  },
  cardDate: {
    fontSize: '0.9rem',
    color: '#6B7280',
    margin: 0
  },
  cardButton: {
    backgroundColor: '#6B7280', 
    color: 'white',
    border: 'none',
    padding: '12px 22px', 
    borderRadius: '24px', 
    fontSize: '0.95rem', 
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '220px'
  }
};

export default Trajetoria;