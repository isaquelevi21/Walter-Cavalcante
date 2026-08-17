import React from 'react';
import './FalaWalter.css';
// IMPORTANTE: O caminho do seu vídeo local foi mantido perfeitamente
import VideoApresentacao from '../../assets/videos/video_site_oficial.mp4'; 

const FalaWalter = () => {
  return (
    <section id="fala-walter" className="fw-section">
      <div className="fw-container">
        
        <div className="fw-header">
          <span className="fw-tag">Mensagem do Candidato</span>
          <h2 className="fw-title">FALA WALTER</h2>
          <div className="fw-divisor"></div>
        </div>

        {/* Layout em duas colunas */}
        <div className="fw-grid-layout">
          
          {/* Coluna da Esquerda: Texto Persuasivo e Chamada (CTA) */}
          <div className="fw-text-column">
            
            {/* NOVO SUBTÍTULO PARA QUEBRAR O GELO */}
            <h3 className="fw-subtitle">
              Minha missão é representar você e sua família!
            </h3>
            
            <p>
              Ao longo de toda a minha vida pública, minha maior motivação sempre foi a defesa dos cearenses e o combate à injustiça social.
            </p>

            <p>
              Seja como vereador de Fortaleza ou como deputado estadual, meu trabalho é pautado pela ética, pela simplicidade e pela dedicação incansável para levar desenvolvimento e melhores oportunidades a todas as regiões do nosso Estado.
            </p>

            {/* A NOVA CAIXA COM A SETINHA ANIMADA (GATILHO DE CLIQUE) */}
            <div className="fw-video-chamada">
              <span className="seta-animada">➔</span>
              <div>
                <strong>Dê o play no vídeo ao lado</strong> e ouça a minha mensagem especial sobre o futuro que podemos construir juntos!
              </div>
            </div>

          </div>

          {/* Coluna da Direita: A Caixa Dinâmica de Vídeo */}
          <div className="fw-video-container">
            <div className="fw-video-wrapper">
              
              {/* VÍDEO LOCAL SENDO RENDERIZADO AQUI */}
              <video 
                controls 
                preload="metadata"
                controlsList="nodownload" /* Opcional: esconde o botão de download do player */
              >
                <source src={VideoApresentacao} type="video/mp4" />
                Seu navegador não suporta a exibição de vídeos.
              </video>

            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default FalaWalter;