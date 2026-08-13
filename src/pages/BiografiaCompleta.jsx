import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BiografiaCompleta.css';
import elmano from "../assets/images/Walter&Elmano.jpg";
import comeback from '../assets/images/comeback.png';
import Perfil from '../assets/images/Perfil.jpeg';
import Assembleia from '../assets/images/Assembleia.jpg';
import Falando from '../assets/images/falando.png';
import rezando from '../assets/images/rezando.png';

const BiografiaCompleta = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="timeline-main">
      <div className="timeline-page-container">
        
        {/* Cabeçalho da Página */}
        <div className="timeline-header">
          <h1 className="timeline-titulo">A Trajetória de Walter Cavalcante</h1>
          <div className="timeline-linha-titulo"></div>
          <p className="timeline-intro">
            Uma vida dedicada ao serviço público, à iniciativa privada e ao compromisso social. 
            Conheça os passos que construíram a história de quem trabalha pelo Ceará.
          </p>
        </div>

        {/* Início da Linha do Tempo */}
        <div className="timeline-container">
          
          {/* Item 1: Esquerda Texto / Direita Imagem */}
          <div className="timeline-item left">
            <div className="timeline-content">
              <span className="timeline-date">1956 — 1975</span>
              <h2>Origens e Iniciativa Privada</h2>
              <p>
                Natural de Crateús, no interior do Ceará, nasceu em 23 de fevereiro de 1956. 
                Sua história profissional começou cedo, em 1975, ingressando como office boy no <strong>Banco Pontual S.A.</strong>. 
                Ao longo dos anos, conquistou espaço até chegar a sócio-gerente da corretora do banco e, 
                posteriormente, da Luz Corretora de Seguros.
              </p>
            </div>
            <div className="timeline-image-wrapper">
              <img src={Perfil} alt="Walter na juventude" className="timeline-img" />
            </div>
          </div>

          {/* Item 2: Direita Texto / Esquerda Imagem */}
          <div className="timeline-item right">
            <div className="timeline-content">
              <span className="timeline-date">Anos Seguintes</span>
              <h2>Compromisso Social e Habitação</h2>
              <p>
                O contato com as demandas sociais o levou a atuar forte no setor habitacional. 
                Foi fundador e diretor-presidente da <strong>COHABECE</strong> (Cooperativa Habitacional dos Bancários), 
                coordenando a construção de milhares de moradias. Também atuou como diretor da Comissão de 
                Habitação do Município de Fortaleza.
              </p>
            </div>
            <div className="timeline-image-wrapper">
              <img src={rezando} alt="Projetos habitacionais" className="timeline-img" />
            </div>
          </div>

          {/* Item 3: Esquerda Texto / Direita Imagem */}
          <div className="timeline-item left">
            <div className="timeline-content">
              <span className="timeline-date">1996</span>
              <h2>O Legislativo Municipal</h2>
              <p>
                A entrada na política ocorreu em 1996, eleito <strong>vereador de Fortaleza</strong>. 
                Durante cinco mandatos consecutivos, destacou-se pela articulação e presidiu importantes comissões (Justiça, Orçamento, Ética). 
                Em seu último mandato, assumiu a <strong>Presidência da Câmara Municipal de Fortaleza</strong>.
              </p>
            </div>
            <div className="timeline-image-wrapper">
              <img src={Falando} alt="Vereador de Fortaleza" className="timeline-img" />
            </div>
          </div>

          {/* Item 4: Direita Texto / Esquerda Imagem */}
          <div className="timeline-item right">
            <div className="timeline-content">
              <span className="timeline-date">2014 — 2018</span>
              <h2>Assembleia Legislativa do Ceará</h2>
              <p>
                Eleito e reeleito <strong>Deputado Estadual</strong>. Exerceu funções como vice-líder do Governo e Ouvidor Parlamentar. 
                Criou a <strong>Sala do Empreendedor</strong> para apoiar pequenos negócios e aprovou leis marcantes, como a garantia 
                de 5% de moradias do Estado para pessoas com deficiência e a proteção do Estuário do Rio Ceará.
              </p>
            </div>
            <div className="timeline-image-wrapper">
              <img src={Assembleia  } alt="Deputado Estadual" className="timeline-img" />
            </div>
          </div>

          {/* Item 5: Esquerda Texto / Direita Imagem */}
          <div className="timeline-item left">
            <div className="timeline-content">
              <span className="timeline-date">2022</span>
              <h2>Sustentabilidade e Articulação</h2>
              <p>
                Filiou-se ao <strong>Partido Verde (PV)</strong>, fortalecendo a defesa ambiental e a proteção animal. 
                Pela sua experiência e diálogo institucional, foi convidado pelo governador Elmano de Freitas para 
                integrar a <strong>Assessoria Especial de Assuntos Institucionais do Governo do Ceará</strong>.
              </p>
            </div>
            <div className="timeline-image-wrapper">
              <img src={elmano} alt="Partido Verde e Governo" className="timeline-img" />
            </div>
          </div>

          {/* Item 6: Direita Texto / Esquerda Imagem */}
          <div className="timeline-item right">
            <div className="timeline-content destaque-2026">
              <span className="timeline-date">2026</span>
              <h2>Novos Projetos e Desafios</h2>
              <p>
                Em abril de 2026, retornou à Assembleia Legislativa para reassumir seu mandato, focando em:
              </p>
              <ul>
                <li>Proibição do cultivo do Nim Indiano para proteger a biodiversidade;</li>
                <li>Criação de um Centro Regional de Proteção Animal em Crateús;</li>
                <li>Política de Combate à Solidão da Pessoa Idosa;</li>
                <li>Estatuto Estadual das Famílias Atípicas.</li>
              </ul>
            </div>
            <div className="timeline-image-wrapper">
              <img src={comeback} alt="Projetos para 2026" className="timeline-img" />
            </div>
          </div>

        </div>

        {/* Fechamento e Botão de Voltar */}
        <div className="timeline-footer">
          <p className="timeline-conclusao">
            Com mais de 30 anos de atuação política, Walter Cavalcante reúne experiências da iniciativa privada, 
            da gestão pública e do Parlamento para construir um Ceará mais justo, sustentável e com mais oportunidades.
          </p>
          <Link to="/" className="timeline-btn-voltar">
            ← Voltar para a Página Inicial
          </Link>
        </div>

      </div>
    </main>
  );
};

export default BiografiaCompleta;