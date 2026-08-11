import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const acoesParlamentares = [
  {
    titulo: 'LEI 15.847/2015',
    texto: 'adequação e destinação de 5% das unidades habitacionais, construídas pelo estado do ceará, para famílias portadoras de necessidades especiais.'
  },
  {
    titulo: 'LEI 16.276/2017',
    texto: 'institui a “semana estadual de conscientização e orientação sobre o câncer de estômago” no estado do ceará.'
  },
  {
    titulo: 'LEI 16.488/2017',
    texto: 'altera a lei nº 16.276/2017 e institui a “semana estadual de conscientização e orientação sobre o câncer do aparelho digestivo” no estado do ceará.'
  },
  {
    titulo: 'LEI 16.605/2018',
    texto: 'altera dispositivos da lei nº 12.621, de 26 de agosto de 1996, em relação aos prazos das licenças prévia, licença de instalação, licença de ampliação e licença de operação nos postos de revenda de combustíveis e derivados de petróleo no estado do ceará.'
  },
  {
    titulo: 'LEI 16.607/2018',
    texto: 'dispõe sobre a redefinição dos limites da área de proteção ambiental do estuário do rio ceará, unidades de conservação estadual, criada por meio do decreto nº 25.413/1999.'
  },
  {
    titulo: 'LEI 16.823/2019',
    texto: 'institui a obrigatoriedade na realização de processo seletivo para contratação de menor aprendiz e estagiário pelos órgãos públicos estaduais, a reserva de até 10% das vagas aos portadores de necessidade especial, na forma que indica.'
  },
  {
    titulo: 'LEI 16.838/2019',
    texto: 'dispõe sobre a destinação de unidades habitacionais a serem construídas pelo governo do estado do ceará para os servidores públicos estaduais.'
  },
  {
    titulo: 'LEI 17.200/2020',
    texto: 'dispõe sobre a obrigatoriedade da execução do hino do estado do ceará em todos os eventos esportivos no estado do ceará, na forma que indica.'
  },
  {
    titulo: 'LEI 17.226/2019',
    texto: 'proíbe a utilização de fio com cerol ou cortante, da linha chilena ou qualquer tipo de material cortante para empinar pipa ou raia, e dá outras providências.'
  },
  {
    titulo: 'LEI 17.234/2020',
    texto: 'torna-se obrigatória a utilização de máscaras de proteção pela população de modo em geral em espaços de uso público e privado no estado do ceará enquanto perdurar o estado de calamidade pública, na forma que indica.'
  }
];

// Adicione o nome do arquivo e a extensão .jsx no final
import Hero from "../components/Hero/Hero.jsx";
import Trajetoria from "../components/Trajetoria/Trajetoria.jsx";
import Compromissos from "../components/Compromissos/Compromissos.jsx";
import Contato from "../components/Contato/Contato.jsx";
import Biografia from '../components/Biografia/biografia.jsx'; // Ajuste o caminho se necessário

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (location.hash) {
        const sectionId = location.hash.replace('#', '');
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 80);

    return () => window.clearTimeout(timer);
  }, [location.hash, location.pathname]);

  return (
    <>
      <Hero />
      <Biografia />

      <section id="acao-parlamentar" style={styles.acaoSection}>
        <div style={styles.acaoContainer}>
          <div style={styles.acaoHeader}>
            <span style={styles.acaoTag}>Ação Parlamentar</span>
            <h2 style={styles.acaoTitle}>Principais ações e propostas que marcaram a atuação</h2>
          </div>

          <div style={styles.acaoGrid}>
            {acoesParlamentares.map((acao, index) => (
              <article key={index} style={styles.acaoCard}>
                <h3 style={styles.acaoCardTitle}>{acao.titulo}</h3>
                <p style={styles.acaoCardText}>{acao.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* <Trajetoria /> */}
      <Compromissos />
      <Contato/>  {/* Para aparecer na interface a aba de contatos , basta retirar de comentário*/}
    </>
  );
}

const styles = {
  acaoSection: {
    backgroundColor: '#F8FAF8',
    padding: '80px 5% 90px',
  },
  acaoContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  acaoHeader: {
    marginBottom: '28px',
  },
  acaoTag: {
    display: 'inline-block',
    color: '#EF7C00',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    fontSize: '0.8rem',
    marginBottom: '8px',
  },
  acaoTitle: {
    margin: 0,
    color: '#196B32',
    fontSize: '2rem',
    lineHeight: 1.3,
  },
  acaoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: '18px',
  },
  acaoCard: {
    backgroundColor: '#FFFFFF',
    border: '1px solid #E5E7EB',
    borderRadius: '12px',
    padding: '18px 20px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.04)',
  },
  acaoCardTitle: {
    margin: '0 0 8px 0',
    color: '#196B32',
    fontSize: '1rem',
    fontWeight: 700,
  },
  acaoCardText: {
    margin: 0,
    color: '#4B5563',
    lineHeight: 1.7,
    fontSize: '0.96rem',
  }
};