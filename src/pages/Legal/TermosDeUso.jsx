import React from 'react';

const Termos = () => {
  return (
    <section style={styles.section}>
      <div className="container" style={styles.container}>
        
        {/* Cabeçalho da Página */}
        <div style={styles.header}>
          <h1 style={styles.title}>Termos de Uso</h1>
          <p style={styles.lastUpdate}>Última atualização: Agosto de 2026</p>
        </div>
        
        {/* Conteúdo */}
        <div style={styles.content}>
          <p>
            Bem-vindo ao site oficial da campanha de <strong>Walter Cavalcante</strong>. Ao acessar e utilizar este site, você concorda com os presentes Termos de Uso. Caso não concorde com alguma das condições, pedimos que não continue a navegação.
          </p>
          
          <h2 style={styles.subtitle}>1. Finalidade do Site</h2>
          <p>
            Este site tem caráter estritamente informativo e de propaganda eleitoral, destinado a apresentar a biografia, as propostas (bandeiras) e as ações parlamentares do candidato Walter Cavalcante, visando o pleito eleitoral vigente.
          </p>

          <h2 style={styles.subtitle}>2. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo disponível neste site, incluindo textos, fotos, vídeos, logotipos, identidade visual e materiais gráficos, é de propriedade exclusiva da campanha de Walter Cavalcante.
          </p>
          <ul style={styles.list}>
            <li>É <strong>permitido e encorajado</strong> o compartilhamento dos links, propostas e materiais nas redes sociais para fins de apoio político, desde que a integridade da mensagem não seja alterada.</li>
            <li>É <strong>proibida</strong> a modificação, reprodução comercial ou uso indevido do material para criar conteúdos falsos (<em>fake news</em>) ou difamatórios.</li>
          </ul>

          <h2 style={styles.subtitle}>3. Conduta do Usuário</h2>
          <p>Ao utilizar nossos canais de contato (formulários, links de WhatsApp ou redes sociais integradas), o usuário se compromete a:</p>
          <ul style={styles.list}>
            <li>Não enviar mensagens com conteúdo ilícito, ofensivo, discriminatório, ameaçador ou que viole direitos de terceiros.</li>
            <li>Não utilizar robôs, <em>spiders</em> ou outros meios automatizados para extrair dados do site.</li>
          </ul>

          <h2 style={styles.subtitle}>4. Links para Terceiros</h2>
          <p>
            Nosso site pode conter links para redes sociais (Instagram, Facebook, YouTube, WhatsApp) ou páginas externas. Não nos responsabilizamos pelas políticas de privacidade ou práticas desses sites de terceiros.
          </p>

          <h2 style={styles.subtitle}>5. Alterações nos Termos</h2>
          <p>
            A equipe da campanha reserva-se o direito de modificar estes Termos de Uso e a Política de Privacidade a qualquer momento, para adequação a novas regras do Tribunal Superior Eleitoral (TSE) ou legislação vigente. Recomendamos a leitura periódica desta página.
          </p>
        </div>
        
      </div>
    </section>
  );
};

// Os estilos são idênticos aos da Política de Privacidade para manter o padrão visual do documento
const styles = {
  section: {
    backgroundColor: '#FFFFFF',
    padding: '120px 5% 80px 5%', 
    minHeight: '70vh'
  },
  container: {
    maxWidth: '800px', 
    margin: '0 auto',
    color: '#333'
  },
  header: {
    borderBottom: '2px solid var(--accent-orange, #EF7C00)',
    paddingBottom: '15px',
    marginBottom: '35px'
  },
  title: {
    fontSize: '2.5rem',
    color: 'var(--primary-green, #196B32)',
    margin: '0 0 10px 0'
  },
  lastUpdate: {
    fontSize: '0.9rem',
    color: '#6B7280',
    fontStyle: 'italic',
    margin: 0
  },
  content: {
    lineHeight: '1.8',
    fontSize: '1.05rem',
    color: '#4B5563'
  },
  subtitle: {
    fontSize: '1.4rem',
    color: 'var(--primary-green, #196B32)',
    marginTop: '35px',
    marginBottom: '15px'
  },
  list: {
    paddingLeft: '20px',
    marginBottom: '20px'
  }
};

export default Termos;