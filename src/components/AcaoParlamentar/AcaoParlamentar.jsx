import React from 'react';
import './AcaoParlamentar.css';

const acoesParlamentares = [
  {
    titulo: 'LEI 15.847/2015',
    texto: 'Adequação e destinação de 5% das unidades habitacionais, construídas pelo estado do Ceará, para famílias portadoras de necessidades especiais.',
    link: 'https://www2.al.ce.gov.br/legislativo/legislacao5/leis2015/e2015.htm',
    tipo: 'Legislação Estadual'
  },
  {
    titulo: 'LEI 16.276/2017',
    texto: 'Institui a “semana estadual de conscientização e orientação sobre o câncer de estômago” no estado do Ceará.',
    link: 'https://www2.al.ce.gov.br/legislativo/legislacao5/leis2017/e2017.htm',
    tipo: 'Legislação Estadual'
  },
  {
    titulo: 'LEI 16.488/2017',
    texto: 'Altera a lei nº 16.276/2017 e institui a “semana estadual de conscientização e orientação sobre o câncer do aparelho digestivo” no estado do Ceará.',
    link: 'https://www2.al.ce.gov.br/legislativo/legislacao5/leis2017/e2017.htm',
    tipo: 'Legislação Estadual'
  },
  {
    titulo: 'LEI 16.605/2018',
    texto: 'Altera dispositivos da lei nº 12.621, de 26 de agosto de 1996, em relação aos prazos das licenças prévia, licença de instalação, licença de ampliação e licença de operação nos postos de revenda de combustíveis e derivados de petróleo no estado do Ceará.',
    link: 'https://www2.al.ce.gov.br/legislativo/legislacao5/leis2018/16605.htm',
    tipo: 'Legislação Estadual'
  },
  {
    titulo: 'LEI 16.607/2018',
    texto: 'Dispõe sobre a redefinição dos limites da área de proteção ambiental do estuário do rio Ceará, unidades de conservação estadual, criada por meio do decreto nº 25.413/1999.',
    link: 'https://www2.al.ce.gov.br/legislativo/legislacao5/leis2018/16607.htm',
    tipo: 'Legislação Estadual'
  },
  {
    titulo: 'LEI 16.823/2019',
    texto: 'Institui a obrigatoriedade na realização de processo seletivo para contratação de menor aprendiz e estagiário pelos órgãos públicos estaduais, a reserva de até 10% das vagas aos portadores de necessidade especial, na forma que indica.',
    link: 'https://www2.al.ce.gov.br/legislativo/legislacao5/leis2018/16823.htm',
    tipo: 'Legislação Estadual'
  },
  {
    titulo: 'LEI 16.838/2019',
    texto: 'Dispõe sobre a destinação de unidades habitacionais a serem construídas pelo governo do estado do Ceará para os servidores públicos estaduais.',
    link: 'https://www2.al.ce.gov.br/legislativo/legislacao5/leis2018/16838.htm',
    tipo: 'Legislação Estadual'
  },
  {
    titulo: 'LEI 17.200/2020',
    texto: 'Dispõe sobre a obrigatoriedade da execução do hino do estado do Ceará em todos os eventos esportivos no estado do Ceará, na forma que indica.',
    link: 'https://www2.al.ce.gov.br/legislativo/legislacao5/leis2020/17200.htm',
    tipo: 'Legislação Estadual'
  },
  {
    titulo: 'LEI 17.226/2019',
    texto: 'Proíbe a utilização de fio com cerol ou cortante, da linha chilena ou qualquer tipo de material cortante para empinar pipa ou raia, e dá outras providências.',
    link: 'https://www2.al.ce.gov.br/legislativo/legislacao5/leis2020/17226.htm',
    tipo: 'Legislação Estadual'
  },
  {
    titulo: 'LEI 17.234/2020',
    texto: 'Torna-se obrigatória a utilização de máscaras de proteção pela população de modo em geral em espaços de uso público e privado no estado do Ceará enquanto perdurar o estado de calamidade pública, na forma que indica.',
    link: 'https://www2.al.ce.gov.br/legislativo/legislacao5/leis2020/17234.htm',
    tipo: 'Legislação Estadual'
  }
];

const AcaoParlamentar = () => {
  return (
    <section id="acao-parlamentar" className="acao-section">
      <div className="acao-container">
        <div className="acao-header">
          <span className="acao-tag">Ação Parlamentar</span>
          <h2 className="acao-title">Principais ações e propostas que marcaram a atuação</h2>
        </div>

        <div className="acao-grid">
          {acoesParlamentares.map((acao, index) => (
            <a 
              key={index} 
              href={acao.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="acao-card"
            >
              <div>
                <div className="acao-card-meta">
                  <span className="acao-card-badge">{acao.tipo}</span>
                  <span className="acao-card-status">● Vigorando</span>
                </div>
                <h3 className="acao-card-title">{acao.titulo}</h3>
                <p className="acao-card-text">{acao.texto}</p>
              </div>
              <div className="acao-card-footer">
                <span>Ver lei na íntegra</span> ➔
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcaoParlamentar;