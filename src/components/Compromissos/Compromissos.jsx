import React from 'react';

const Compromissos = () => {
  const propostas = [
    { title: "Saúde Mais Perto", desc: "Ampliação das unidades básicas e valorização dos profissionais da saúde." },
    { title: "Educação de Futuro", desc: "Mais vagas em creches e tecnologia integrada às salas de aula." },
    { title: "Geração de Empregos", desc: "Apoio ao pequeno empreendedor e atração de novos investimentos." },
    { title: "Segurança Inteligente", desc: "Uso de tecnologia e inteligência para garantir a paz das nossas famílias." }
  ];

  return (
    <section id="propostas" style={styles.section}>
      <div className="container">
        <h2 style={styles.sectionTitle}>Nossos Compromissos</h2>
        <div style={styles.grid}>
          {propostas.map((prop, index) => (
            <div key={index} style={styles.card}>
              <h4 style={styles.cardTitle}>{prop.title}</h4>
              <p style={styles.cardDesc}>{prop.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: { padding: '80px 0', backgroundColor: '#FFFFFF' },
  sectionTitle: { textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' },
  card: { padding: '30px', borderLeft: '4px solid var(--accent-gold)', backgroundColor: 'var(--bg-light)', borderRadius: '0 8px 8px 0', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' },
  cardTitle: { color: 'var(--primary-blue)', fontSize: '1.3rem', marginBottom: '15px' },
  cardDesc: { color: '#555', lineHeight: '1.6' }
};

export default Compromissos;