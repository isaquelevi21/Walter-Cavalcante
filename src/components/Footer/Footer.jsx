import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        
        {/* Informações Obrigatórias - TSE */}
        <div style={styles.tseInfo}>
          <h4 style={styles.candidateName}>NOME DO CANDIDATO - WALTER CAVALCANTE</h4>
          <p style={styles.party}>PARTIDO POLÍTICO (SIGLA)</p>
          <p style={styles.details}>Cargo disputado: [Cargo]</p>
          <p style={styles.details}>CNPJ da campanha: 00.000.000/0000-00</p>
          <p style={styles.details}>Site oficial: www.campanha.com.br</p>
        </div>

        {/* Links Rápidos e Legais */}
        <div style={styles.linksBlock}>
          <h5 style={styles.linksTitle}>Navegação</h5>
          <nav style={styles.nav}>
            <Link to="/politica-de-privacidade" style={styles.link}>Política de Privacidade</Link>
            <Link to="/termos-de-uso" style={styles.link}>Termos de Uso</Link>
          </nav>
        </div>
      </div>

      {/* Aviso de Transparência de IA (Obrigatório TSE 2026, se aplicável) */}
      <div style={styles.aiNotice}>
        <div className="container">
          <p style={styles.aiText}>
            Material de propaganda eleitoral. Este conteúdo não foi gerado ou alterado por inteligência artificial.
          </p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: { backgroundColor: 'var(--text-dark)', color: 'var(--text-light)', paddingTop: '40px' },
  container: { display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '30px', paddingBottom: '30px' },
  tseInfo: { flex: '1 1 300px' },
  candidateName: { fontSize: '1.2rem', margin: '0 0 5px 0', color: 'var(--accent-gold)' },
  party: { fontSize: '1rem', fontWeight: 'bold', marginBottom: '15px' },
  details: { fontSize: '0.9rem', marginBottom: '5px', color: '#000000' },
  linksBlock: { flex: '1 1 200px' },
  linksTitle: { fontSize: '1.1rem', marginBottom: '15px', color: 'var(--accent-gold)' },
  nav: { display: 'flex', flexDirection: 'column', gap: '10px' },
  link: { color: 'var(--text-light)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s' },
  aiNotice: { backgroundColor: '#1A252F', padding: '15px 0', textAlign: 'center', borderTop: '1px solid #34495E' },
  aiText: { fontSize: '0.8rem', color: '#95A5A6', margin: 0 }
};

export default Footer;