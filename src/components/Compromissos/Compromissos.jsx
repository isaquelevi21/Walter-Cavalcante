import React from 'react';
import './Compromissos.css'; // Importando o nosso novo arquivo de estilos!

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
    <section id="propostas" className="bandeiras-section">
      <div className="container bandeiras-container">
        
        {/* Cabeçalho da Seção */}
        <div className="bandeiras-header">
          <span className="bandeiras-subtitle">posicionamento</span>
          <h2 className="bandeiras-title">Bandeiras</h2>
        </div>

        {/* Grid de Bandeiras */}
        <div className="bandeiras-grid">
          {bandeiras.map((item, index) => (
            <div key={index} className="bandeiras-item">
              <div className="bandeiras-icon-box">
                {item.icone}
              </div>
              <div className="bandeiras-text-box">
                <h3 className="bandeiras-item-title">{item.titulo}</h3>
                <p className="bandeiras-item-desc">{item.descricao}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Bandeiras;