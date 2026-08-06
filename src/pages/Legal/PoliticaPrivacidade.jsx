import React from 'react';

const Privacidade = () => {
  return (
    <section style={styles.section}>
      <div className="container" style={styles.container}>
        
        {/* Cabeçalho da Página */}
        <div style={styles.header}>
          <h1 style={styles.title}>Política de Privacidade</h1>
          <p style={styles.lastUpdate}>Última atualização: Agosto de 2026</p>
        </div>
        
        {/* Conteúdo */}
        <div style={styles.content}>
          <p>
            A campanha de <strong>Walter Cavalcante (Candidato a Deputado Estadual - Ceará)</strong> valoriza a sua privacidade e está comprometida em proteger os seus dados pessoais. Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos suas informações ao visitar nosso site oficial.
          </p>
          
          <h2 style={styles.subtitle}>1. Dados que Coletamos</h2>
          <p>Ao navegar em nosso site ou interagir conosco, podemos coletar:</p>
          <ul style={styles.list}>
            <li><strong>Dados de Navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas e tempo de permanência, coletados automaticamente via <em>cookies</em> para melhorar a experiência do usuário.</li>
            <li><strong>Dados Fornecidos Voluntariamente:</strong> Nome, e-mail, telefone ou mensagens caso você preencha formulários de contato, cadastre-se para receber informativos ou entre em contato via WhatsApp.</li>
          </ul>

          <h2 style={styles.subtitle}>2. Como Usamos Seus Dados</h2>
          <p>As informações coletadas são utilizadas exclusivamente para os propósitos da campanha eleitoral, incluindo:</p>
          <ul style={styles.list}>
            <li>Envio de informativos, propostas e convites para eventos da campanha (mediante o seu consentimento).</li>
            <li>Resposta a dúvidas, sugestões ou solicitações de contato.</li>
            <li>Análise estatística anônima para melhorar o desempenho e o layout do nosso site.</li>
          </ul>

          <h2 style={styles.subtitle}>3. Compartilhamento de Informações</h2>
          <p>
            <strong>Nós não vendemos, alugamos ou repassamos seus dados pessoais a terceiros.</strong> Suas informações são mantidas em sigilo e acessadas apenas pela equipe oficial da campanha, exceto quando exigido por lei ou determinação da Justiça Eleitoral.
          </p>

          <h2 style={styles.subtitle}>4. Uso de Cookies</h2>
          <p>
            Nosso site utiliza <em>cookies</em> essenciais para o funcionamento da plataforma e <em>cookies</em> analíticos para entender como os eleitores interagem com o conteúdo. Você pode desabilitar os <em>cookies</em> a qualquer momento nas configurações do seu navegador.
          </p>

          <h2 style={styles.subtitle}>5. Seus Direitos (LGPD)</h2>
          <p>De acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem o direito de:</p>
          <ul style={styles.list}>
            <li>Confirmar a existência de tratamento de dados e acessar suas informações.</li>
            <li>Solicitar a correção de dados incompletos ou desatualizados.</li>
            <li>Revogar o seu consentimento e solicitar a exclusão dos seus dados das nossas listas de transmissão a qualquer momento.</li>
          </ul>

          <h2 style={styles.subtitle}>6. Contato</h2>
          <p>
            Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato conosco através do e-mail: <strong>contato@walter43640.com.br</strong>.
          </p>
        </div>
        
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#FFFFFF',
    // O padding top maior (120px) evita que o Header fixo esconda o título
    padding: '120px 5% 80px 5%', 
    minHeight: '70vh'
  },
  container: {
    maxWidth: '800px', // Largura reduzida foca na leitura (como um artigo/documento)
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

export default Privacidade;