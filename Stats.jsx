import React from 'react';

const Stats = () => {
  const statsData = [
    { number: "25+", label: "Anos de Vida Pública" },
    { number: "150", label: "Projetos Aprovados" },
    { number: "100%", label: "Compromisso com o Povo" },
  ];

  return (
    <section className="stats-section" style={{ backgroundColor: 'var(--primary-green)', color: 'white', padding: '60px 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
        {statsData.map((stat, index) => (
          <div key={index} className="stat-item">
            <h3 style={{ color: 'var(--accent-orange)', fontSize: '3rem', margin: '0' }}>{stat.number}</h3>
            <p style={{ fontSize: '1.1rem', fontWeight: '500', marginTop: '10px' }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;