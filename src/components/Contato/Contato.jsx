import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contato.css';
import { candidato } from '../../data/candidato';

const Contato = () => {
  const [aceitouTermos, setAceitouTermos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!aceitouTermos) {
      alert("Por favor, confirme que você está de acordo com a Política de Privacidade.");
      return;
    }
    alert("Sua mensagem foi enviada com sucesso! Em breve retornaremos.");
  };

  return (
    <section id="contato" className="contato-section">
      <div className="contato-container">
        
        {/* Cabeçalho */}
        <div className="contato-header">
          <h2 className="contato-title">Vamos Juntos pelo Ceará</h2>
          <p className="contato-subtitle">
            Sua voz é fundamental para construirmos um mandato participativo. Envie sua sugestão, denúncia ou venha somar forças na nossa campanha.
          </p>
        </div>

        <div className="contato-content">
          
          {/* Coluna 1: Informações de Contato Direto */}
          <div className="contato-info-box">
            
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <h4>Comitê Central</h4>
                <p>{candidato.enderecoComite}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📱</div>
              <div className="info-text">
                <h4>WhatsApp da Campanha</h4>
                <p>{candidato.whatsappOficial}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div className="info-text">
                <h4>E-mail</h4>
                <p>{candidato.emailOficial}</p>
              </div>
            </div>

          </div>

          {/* Coluna 2: Formulário (Card) */}
          <div className="contato-form-card">
            <form onSubmit={handleSubmit} className="contato-form">
              
              <div className="form-row">
                <div className="form-group">
                  <label>Nome Completo</label>
                  <input type="text" className="form-input" placeholder="Digite seu nome" required />
                </div>
                <div className="form-group">
                  <label>WhatsApp</label>
                  <input type="tel" className="form-input" placeholder="(85) 90000-0000" required />
                </div>
              </div>

              <div className="form-group">
                <label>Assunto</label>
                <input type="text" className="form-input" placeholder="Ex: Sugestão para o bairro, Voluntariado..." required />
              </div>

              <div className="form-group">
                <label>Sua Mensagem</label>
                <textarea className="form-textarea" placeholder="Como o Deputado Walter Cavalcante pode te ajudar?" required></textarea>
              </div>

              <div className="form-checkbox-group">
                <input 
                  type="checkbox" 
                  id="privacidade" 
                  checked={aceitouTermos}
                  onChange={(e) => setAceitouTermos(e.target.checked)}
                />
                <label htmlFor="privacidade">
                  Concordo com a <Link to="/politica-de-privacidade" className="form-link">Política de Privacidade</Link>.
                </label>
              </div>

              <button type="submit" className="btn-enviar">
                Enviar Mensagem
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contato;