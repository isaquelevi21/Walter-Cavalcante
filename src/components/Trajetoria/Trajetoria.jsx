import React from 'react';

const Trajetoria = () => {
  const statsData = [
    { number: "25+", label: "Anos de Vida Pública" },
    { number: "150", label: "Projetos Aprovados" },
    { number: "100%", label: "Compromisso com o Povo" },
  ];

  return (
    <section id="biografia" className="trajetoria-section" style={styles.section}>
      <div className="container" style={styles.container}>
        
        {/* Bloco Biografia */}
        <div className="bio-content" style={styles.bio}>
          <h2 style={styles.title}>Nossa História</h2>
          <p style={styles.text}>
            Nascido e criado com os valores da nossa terra, construí minha vida pública com base no diálogo e no trabalho duro. 
            Acredito que a verdadeira política se faz ouvindo as pessoas e transformando suas necessidades em resultados reais.
          </p>
          <p style={styles.text}>
            Minha lealdade e admiração por nossa gente se mantêm de pé desde o primeiro dia.
          </p>
        </div>

        {/* Bloco Números */}
        <div className="stats-grid" style={styles.statsGrid}>
          {statsData.map((stat, index) => (
            <div key={index} style={styles.statCard}>
              <h3 style={styles.statNumber}>{stat.number}</h3>
              <p style={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const styles = {
  section: { padding: '80px 0', backgroundColor: 'var(--bg-light)' },
  container: { display: 'flex', flexDirection: 'column', gap: '50px' },
  bio: { textAlign: 'center', maxWidth: '800px', margin: '0 auto' },
  title: { fontSize: '2.5rem', marginBottom: '20px' },
  text: { fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '15px' },
  statsGrid: { display: 'flex', justifyContent: 'space-around', gap: '20px', flexWrap: 'wrap', backgroundColor: 'var(--primary-blue)', padding: '40px', borderRadius: '8px', color: 'white' },
  statCard: { textAlign: 'center', flex: '1 1 200px' },
  statNumber: { color: 'var(--accent-gold)', fontSize: '3rem', margin: '0' },
  statLabel: { fontSize: '1.1rem', fontWeight: '500', marginTop: '10px' }
};

export default Trajetoria;