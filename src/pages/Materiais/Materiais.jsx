import React, { useRef, useState } from 'react';
import { FaDownload, FaImage, FaShareAlt, FaSearchPlus, FaUpload } from 'react-icons/fa';
import interfaceArte from '../../assets/images/interface.png';
import './Materiais.css';

const FOTO_AREA = { left: 0.31, top: 0.02, width: 0.36, height: 0.95 };

function EditorDeArte() {
  const [foto, setFoto] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [posicao, setPosicao] = useState({ x: 0, y: 0 });
  const [arrastando, setArrastando] = useState(false);
  const areaRef = useRef(null);
  const dragRef = useRef(null);

  const selecionarFoto = (event) => {
    const arquivo = event.target.files?.[0];
    if (!arquivo || !arquivo.type.startsWith('image/')) return;
    setFoto({ url: URL.createObjectURL(arquivo), nome: arquivo.name });
    setZoom(1);
    setPosicao({ x: 0, y: 0 });
  };

  const iniciarArraste = (event) => {
    if (!foto) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = { pointerX: event.clientX, pointerY: event.clientY, positionX: posicao.x, positionY: posicao.y };
    setArrastando(true);
  };

  const moverFoto = (event) => {
    if (!dragRef.current || !areaRef.current) return;
    const rect = areaRef.current.getBoundingClientRect();
    setPosicao({ x: dragRef.current.positionX + ((event.clientX - dragRef.current.pointerX) / rect.width) * 100, y: dragRef.current.positionY + ((event.clientY - dragRef.current.pointerY) / rect.height) * 100 });
  };

  const terminarArraste = () => { dragRef.current = null; setArrastando(false); };

  const carregarImagem = (src) => new Promise((resolve, reject) => {
    const imagem = new Image();
    imagem.onload = () => resolve(imagem);
    imagem.onerror = reject;
    imagem.src = src;
  });

  const gerarArte = async () => {
    const base = await carregarImagem(interfaceArte);
    const canvas = document.createElement('canvas');
    canvas.width = base.naturalWidth;
    canvas.height = base.naturalHeight;
    const contexto = canvas.getContext('2d');
    contexto.drawImage(base, 0, 0);
    if (foto) {
      const imagem = await carregarImagem(foto.url);
      const area = { x: canvas.width * FOTO_AREA.left, y: canvas.height * FOTO_AREA.top, width: canvas.width * FOTO_AREA.width, height: canvas.height * FOTO_AREA.height };
      const escala = Math.max(area.width / imagem.naturalWidth, area.height / imagem.naturalHeight) * zoom;
      const largura = imagem.naturalWidth * escala;
      const altura = imagem.naturalHeight * escala;
      contexto.save();
      contexto.beginPath();
      contexto.rect(area.x, area.y, area.width, area.height);
      contexto.clip();
      contexto.drawImage(imagem, area.x + (area.width - largura) / 2 + (posicao.x / 100) * area.width, area.y + (area.height - altura) / 2 + (posicao.y / 100) * area.height, largura, altura);
      contexto.restore();
    }
    return new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
  };

  const baixarArte = async () => {
    const blob = await gerarArte();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'arte-walter-cavalcante.png';
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const compartilharArte = async () => {
    const blob = await gerarArte();
    const arquivo = new File([blob], 'arte-walter-cavalcante.png', { type: 'image/png' });
    if (navigator.share && (!navigator.canShare || navigator.canShare({ files: [arquivo] }))) {
      await navigator.share({ title: 'Walter Cavalcante', text: 'Minha arte personalizada', files: [arquivo] });
      return;
    }
    baixarArte();
  };

  return (
    <section className="arte-editor" aria-labelledby="arte-editor-titulo">
      <div className="arte-editor-copy"><span className="arte-editor-kicker">MATERIAL PERSONALIZADO</span><h2 id="arte-editor-titulo">Leve Walter com você</h2><p>Escolha uma foto sua e ela será aplicada na arte oficial da campanha.</p></div>
      <div className="arte-editor-layout">
        <div ref={areaRef} className={`arte-preview ${arrastando ? 'is-dragging' : ''}`} onPointerDown={iniciarArraste} onPointerMove={moverFoto} onPointerUp={terminarArraste} onPointerCancel={terminarArraste}>
          <img src={interfaceArte} alt="Arte oficial de Walter Cavalcante" />
          {foto && <div className="foto-mascara" style={{ backgroundImage: `url(${foto.url})`, backgroundPosition: `${50 + posicao.x}% ${50 + posicao.y}%`, backgroundSize: `${zoom * 100}%` }} />}
          {!foto && <div className="foto-guia">Sua foto<br /><small>aparecerá aqui</small></div>}
        </div>
        <div className="arte-controls">
          <label className="btn-upload"><FaUpload /> {foto ? 'Trocar foto' : 'Escolher minha foto'}<input type="file" accept="image/*" onChange={selecionarFoto} /></label>
          <label className="zoom-control" htmlFor="zoom-foto"><FaSearchPlus /> Zoom<input id="zoom-foto" type="range" min="1" max="2.5" step="0.01" value={zoom} onChange={(event) => setZoom(Number(event.target.value))} disabled={!foto} /></label>
          <p className="arte-dica">Arraste a foto no quadro para ajustar o posicionamento.</p>
          <div className="arte-actions"><button type="button" className="btn-arte btn-arte-primary" onClick={baixarArte}><FaDownload /> Baixar imagem</button><button type="button" className="btn-arte btn-arte-secondary" onClick={compartilharArte}><FaShareAlt /> Compartilhar</button></div>
        </div>
      </div>
    </section>
  );
}

export default function Materiais() {
  // Lista dos materiais disponíveis para baixar
  const listaMateriais = [
    {
      id: 1,
      titulo: 'Foto Oficial - Perfil',
      descricao: 'Foto de perfil oficial',
      // O caminho aponta direto para a pasta public/downloads/
      arquivo: '/downloads/FOTO_WALTER_2026.png', 
      nomeDownload: 'FOTO OFICIAL PERFIL'
    },
    {
      id: 2,
      titulo: 'Logo da Campanha',
      descricao: 'Logotipo oficial',
      arquivo: '/downloads/LOGO_COM_NUMERO.png',
      nomeDownload: 'LOGO COM NÚMERO'
    },
    {
      id: 3,
      titulo: 'Logo Horizontal',
      descricao: 'Logotipo Oficial',
      arquivo: '/downloads/LOGO_HORIZONTAL.png',
      nomeDownload: 'LOGO HORIZONTAL'
    }
  ];

  return (
    <main className="materiais-container">
      <div className="materiais-header">
        <h1>MATERIAL DE CAMPANHA</h1>
        <p>Baixe agora nosso material oficial !</p>
      </div>

      <EditorDeArte />

      <div className="materiais-grid">
        {listaMateriais.map((item) => (
          <div key={item.id} className="material-card">
            {/* Aqui entra a miniatura da imagem real! */}
            <div className="material-image-wrapper">
              <img src={item.arquivo} alt={item.titulo} className="material-preview" />
            </div>
            
            <div className="material-info">
              <h3>{item.titulo}</h3>
              <p>{item.descricao}</p>
            </div>
            
            <a 
              href={item.arquivo} 
              download={item.nomeDownload} 
              className="btn-download"
            >
              <FaDownload /> Baixar Arquivo
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}