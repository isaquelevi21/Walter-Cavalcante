import React, { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './biografia.css';
import { Link } from 'react-router-dom';
// Importe uma foto para a biografia (substitua pelo caminho correto da sua imagem)
import foto1 from '../../assets/images/Carrocel01.jpeg'; 
import foto2 from '../../assets/images/Carrocel02.jpeg';
import foto3 from '../../assets/images/Carrocel03.jpeg';
import foto4 from '../../assets/images/Carrocel04.jpeg';
import foto5 from '../../assets/images/Carrocel05.jpeg';

// Cria a lista com as imagens
const imagensCarrossel = [foto1, foto2, foto3, foto4, foto5];
import { FaCalendarAlt, FaCheckCircle, FaHandshake } from 'react-icons/fa';
const statsData = [
  { value: 30, suffix: '+', label: 'Anos de Vida Pública' },
  { value: 150, suffix: '', label: 'Projetos Aprovados' },
  { value: 100, suffix: '%', label: 'Compromisso com o Povo' },
];

const Biografia = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Avança para a próxima foto
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % imagensCarrossel.length);
  };

  // Volta para a foto anterior
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + imagensCarrossel.length) % imagensCarrossel.length);
  };

  // Autoplay: Troca a foto a cada 3 segundos (3000 milissegundos)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    
    // Limpa o timer se o usuário sair da página, evitando bugs
    return () => clearInterval(timer);
  }, []);

  const statsRef = useRef(null);
  const [displayValues, setDisplayValues] = useState(statsData.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const target = statsRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          statsData.forEach((stat, index) => {
            const duration = 1400;
            const startTime = performance.now();

            const animate = (now) => {
              const progress = Math.min((now - startTime) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const currentValue = Math.round(stat.value * eased);

              setDisplayValues((prev) =>
                prev.map((value, valueIndex) => (valueIndex === index ? currentValue : value))
              );

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
          });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="biografia" className="biografia-section">
      <div className="biografia-container">
                
                {/* --- Coluna da Imagem e Carrossel --- */}
        <div className="biografia-imagem-wrapper">
          {/* O detalhe laranja de fundo contínua aqui */}
          <div className="biografia-detalhe-visual"></div>

          <div className="carrossel-container">
            {imagensCarrossel.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Walter Cavalcante - Momento ${index + 1}`}
                // A MÁGICA: Só a imagem atual recebe a classe 'active' para aparecer
                className={`biografia-imagem ${index === currentIndex ? 'active' : ''}`}
              />
            ))}

            {/* Setas de Navegação */}
            <button className="carrossel-seta esquerda" onClick={prevSlide} aria-label="Foto anterior">
              <FaChevronLeft />
            </button>
            <button className="carrossel-seta direita" onClick={nextSlide} aria-label="Próxima foto">
              <FaChevronRight />
            </button>
          </div>
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

            <div className="biografia-acoes">
              <Link to="/biografia-completa" className="btn-saiba-mais">
                Ler Biografia Completa
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="biografia-stats" ref={statsRef}>
        <div className="biografia-stats-inner">
  
  {/* Card 1 */}
      <div className="biografia-stat-card">
        <FaCalendarAlt className="stat-icon" />
        <div className="biografia-stat-number">30</div>
        <p className="biografia-stat-label">Anos de Vida Pública</p>
      </div>

      {/* Card 2 */}
      <div className="biografia-stat-card">
        <FaCheckCircle className="stat-icon" />
        <div className="biografia-stat-number">150</div>
        <p className="biografia-stat-label">Projetos Aprovados</p>
      </div>

      {/* Card 3 */}
      <div className="biografia-stat-card">
        <FaHandshake className="stat-icon" />
        <div className="biografia-stat-number">100%</div>
        <p className="biografia-stat-label">Compromisso com o Povo</p>
      </div>

    </div>
      </section>
    </section>
  );
};

export default Biografia;