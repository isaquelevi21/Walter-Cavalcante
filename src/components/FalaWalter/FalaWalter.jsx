import React from 'react';
import './FalaWalter.css';

const FalaWalter = () => {
  return (
    <section id="fala-walter" className="fw-section">
      <div className="fw-container">
        
        <div className="fw-header">
          <span className="fw-tag">Mensagem do Candidato</span>
          <h2 className="fw-title">FALA WALTER</h2>
          <div className="fw-divisor"></div>
        </div>

        <div className="fw-content">
          <p>
            Desde o início da vida pública, tenho pautado minha atuação pela defesa dos cearenses, combatendo a discriminação e a injustiça social. Como vereador de Fortaleza e, posteriormente, deputado estadual, sempre busquei atender às necessidades da população com simplicidade, compromisso e dedicação ao bem comum.
          </p>

          <p>
            Na Assembleia Legislativa, direcionei esforços para fortalecer áreas essenciais, como saúde, educação, esporte, lazer e infraestrutura, contribuindo para a melhoria da qualidade de vida da população. Ao longo desta trajetória, reafirmo meu compromisso de continuar trabalhando com responsabilidade, ética e dedicação em favor do desenvolvimento do Ceará e do bem-estar dos seus cidadãos.
          </p>

          <p>
            Minha atuação vai muito além dessas ações aqui descritas, alcançando diversos municípios cearenses por meio de outros projetos, iniciativas e conquistas que têm transformado a vida das pessoas. Sigo trabalhando com dedicação para levar desenvolvimento, mais oportunidades e melhorias concretas a todas as regiões do nosso Estado.
          </p>
        </div>

        <div className="fw-cta-box">
          <p className="fw-cta-text">
            No dia 02 de outubro, <strong>VAMOS JUNTOS COM FÉ E TRABALHO PELO POVO CEARENSE.</strong> Conto com você e sua família - vote para Deputado Estadual:
          </p>
          <div className="fw-vote-number">
            Walter Cavalcante <span>43.640</span>
          </div>
          <p className="fw-agradecimento">
            Aos que acreditam em mim, agradeço a confiança para continuar a honrosa missão de representá-los, reafirmando o compromisso de continuar lutando pela melhoria de vida de todos cearenses.<br/><br/>
            <strong>Muito obrigado!!! Que Deus os abençoe!!!</strong>
          </p>
        </div>

      </div>
    </section>
  );
};

export default FalaWalter;