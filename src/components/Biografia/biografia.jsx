import React from 'react';
import './Biografia.css';
import { Link } from 'react-router-dom';
// Importe uma foto para a biografia (substitua pelo caminho correto da sua imagem)
import fotoBiografia from '../../assets/images/Carrosel02.png'; 

const Biografia = () => {
  return (
    <section id="biografia" className="biografia-section">
      <div className="biografia-container">
        
        {/* Coluna da Imagem */}
        <div className="biografia-imagem-wrapper">
          <img 
            src={fotoBiografia} 
            alt="Walter Cavalcante em ação" 
            className="biografia-imagem"
          />
          <div className="biografia-detalhe-visual"></div>
        </div>

        {/* Coluna do Texto */}
        <div className="biografia-conteudo">
          <div className="biografia-header">
            <span className="biografia-tag">Quem Sou</span>
            <h2 className="biografia-titulo">Walter Cavalcante</h2>
            <h3 className="biografia-subtitulo">Com Fé e Trabalho pelo Povo Cearense</h3>
          </div>
          
          <div className="biografia-texto">
            <p>
              Walter Cavalcante construiu sua trajetória fundamentada no compromisso social,
              na defesa dos valores da família e no desenvolvimento sustentável do Ceará. 
              Com uma vida dedicada ao serviço público, sempre pautou suas ações pela ética 
              e pela proximidade com as necessidades reais da população.
            </p>
            <p>
              Ao longo de sua caminhada política, tem se destacado na criação de projetos que 
              visam a geração de emprego, o fortalecimento da educação e o apoio às 
              comunidades mais vulneráveis do nosso estado.
            </p>
            <p>
              <strong>"Acredito que a política é o instrumento mais poderoso para transformar vidas 
              quando exercida com vocação e amor ao próximo."</strong>
            </p>
            
            {/* Você pode adicionar listas de conquistas aqui */}
            <ul className="biografia-conquistas">
              <li>Defesa dos direitos sociais e trabalhistas</li>
              <li>Apoio ao empreendedorismo local</li>
              <li>Compromisso com a transparência pública</li>
            </ul>

            {/* ABAIXO FOI ADICIONADO O BOTÃO DE SAIBA MAIS */}
            <div className="biografia-acoes">
              <Link to="/biografia-completa" className="btn-saiba-mais">
                Ler Biografia Completa
              </Link>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default Biografia;