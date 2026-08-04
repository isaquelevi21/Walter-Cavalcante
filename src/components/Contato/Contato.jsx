import React from 'react';
import './style.css'; // Opcional, para estilos específicos não cobertos no global.css

const Contato = () => {
  return (
    <section id="contato" style={styles.section}>
      <div className="container" style={styles.container}>
        <div style={styles.infoBlock}>
          <h2 style={styles.title}>Fale Conosco</h2>
          <p style={styles.text}>Sua voz é fundamental para construirmos um futuro melhor. Envie suas sugestões, dúvidas ou mensagens de apoio.</p>
          <div style={styles.contactDetails}>
            <p><strong>E-mail:</strong> contato@campanha.com.br</p>
            <p><strong>WhatsApp:</strong> (00) 00000-0000</p>
          </div>
        </div>

        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="nome" style={styles.label}>Nome Completo</label>
            <input type="text" id="nome" name="nome" required style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>E-mail</label>
            <input type="email" id="email" name="email" required style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="mensagem" style={styles.label}>Mensagem</label>
            <textarea id="mensagem" name="mensagem" rows="4" required style={styles.textarea}></textarea>
          </div>
          <button type="submit" style={styles.button}>Enviar Mensagem</button>
          <p style={styles.lgpdNotice}>
            Ao enviar esta mensagem, você concorda com nossa <a href="/politica-de-privacidade" style={styles.link}>Política de Privacidade</a>.
          </p>
        </form>
      </div>
    </section>
  );
};

const styles = {
  section: { padding: '80px 0', backgroundColor: 'var(--bg-light)' },
  container: { display: 'flex', gap: '50px', flexWrap: 'wrap' },
  infoBlock: { flex: '1 1 300px' },
  title: { fontSize: '2.5rem', marginBottom: '20px', color: 'var(--primary-blue)' },
  text: { fontSize: '1.1rem', color: '#555', marginBottom: '30px' },
  contactDetails: { fontSize: '1.1rem', color: 'var(--text-dark)' },
  form: { flex: '2 1 400px', backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' },
  inputGroup: { marginBottom: '20px' },
  label: { display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-dark)' },
  input: { width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '1rem' },
  textarea: { width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '1rem', resize: 'vertical' },
  button: { width: '100%', padding: '15px', backgroundColor: 'var(--primary-blue)', color: 'white', border: 'none', borderRadius: '4px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', transition: 'background-color 0.3s' },
  lgpdNotice: { marginTop: '15px', fontSize: '0.85rem', color: '#666', textAlign: 'center' },
  link: { color: 'var(--accent-gold)', textDecoration: 'underline' }
};

export default Contato;