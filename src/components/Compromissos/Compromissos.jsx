import React from 'react';

const Bandeiras = () => {
  // Array com as bandeiras baseadas no histórico do candidato
  const bandeiras = [
    {
      icone: "🙏", 
      titulo: "Promoção dos Princípios Cristãos",
      descricao: "Defesa dos valores cristãos, da vida e da família, pautando o mandato na ética, no respeito e na construção do bem comum para a sociedade cearense."
    },
    {
      icone: "🏠", 
      titulo: "Habitação para Todos",
      descricao: "Luta contínua pela redução do déficit habitacional, usando a experiência na construção de milhares de moradias para garantir um teto digno a quem mais precisa."
    },
    {
      icone: "🚀", 
      titulo: "Fomento ao Empreendedorismo",
      descricao: "Incentivo a novos negócios e oportunidades. Como criador da Sala do Empreendedor, o foco é desburocratizar e gerar mais empregos e renda."
    },
    {
      icone: "🤝", 
      titulo: "Direitos Humanos e Cidadania",
      descricao: "Trabalho firme pela inclusão e justiça social, dando continuidade ao legado iniciado com a criação da Sala de Direitos Humanos Dom Aloísio Lorscheider."
    },
    {
      icone: "🏥", 
      titulo: "Saúde e Qualidade de Vida",
      descricao: "Apoio integral à estruturação de unidades de saúde e valorização dos profissionais, garantindo um atendimento mais humano e eficiente nos municípios."
    },
    {
      icone: "🛡️", 
      titulo: "Defesa do Setor Produtivo",
      descricao: "Valorização do comércio e da indústria cearense, lutando por um ambiente econômico mais competitivo e por menos carga tributária para quem produz."
    }
  ];

  return (
    <section id="propostas" style={styles.section}>
      <div className="container" style={styles.container}>
        
        {/* Cabeçalho da Seção */}
        <div style={styles.header}>
          <span style={styles.subtitle}>posicionamento</span>
          <h2 style={styles.title}>bandeiras</h2>
        </div>

        {/* Grid de Bandeiras */}
        <div style={styles.grid}>
          {bandeiras.map((item, index) => (
            <div key={index} style={styles.item}>
              <div style={styles.iconBox}>
                {item.icone}
              </div>
              <div style={styles.textBox}>
                <h3 style={styles.itemTitle}>{item.titulo}</h3>
                <p style={styles.itemDesc}>{item.descricao}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#F8FAF8',
    padding: '80px 5%',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  subtitle: {
    fontSize: '0.8rem',
    fontWeight: '700',
    color: '#EF7C00',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    marginBottom: '8px'
  },
  title: {
    fontSize: '2rem',
    fontWeight: '800',
    color: '#196B32',
    margin: '0',
    lineHeight: 1.3
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: '18px',
  },
  item: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '15px',
    padding: '18px 20px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #E5E7EB',
    borderLeft: '4px solid #EF7C00',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.04)',
  },
  iconBox: {
    fontSize: '1.8rem',
    color: '#196B32',
    flexShrink: 0,
    marginTop: '-2px'
  },
  textBox: {
    display: 'flex',
    flexDirection: 'column',
  },
  itemTitle: {
    fontSize: '1rem',
    fontWeight: '700',
    color: '#196B32',
    margin: '0 0 8px 0',
  },
  itemDesc: {
    fontSize: '0.95rem',
    color: '#4B5563',
    lineHeight: '1.6',
    margin: '0',
  }
};

export default Bandeiras;