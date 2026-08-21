import React, { useEffect, useRef, useState } from 'react';
import { FaDownload, FaImage, FaRedo } from 'react-icons/fa';
import fotoOficial from '../../assets/images/foto_oficial.jpeg';
import logoComNumero from '../../assets/images/logo_com_numero.png';
import './CrieSeuAvatar.css';

const MAX_IMAGE_BYTES = 10 * 1024 * 1024;
const MAX_IMAGE_DIMENSION = 8000;

export default function CrieSeuAvatar() {
  const [photoUrl, setPhotoUrl] = useState('');
  const [photoFile, setPhotoFile] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [photoPosition, setPhotoPosition] = useState({ x: 0, y: 0 });
  
  const canvasRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const photoAreaRef = useRef(null);
  const dragState = useRef(null);
  const photoPositionRef = useRef({ x: 0, y: 0 });
  const sourceImagesRef = useRef({ photo: null, art: null });

  // ==========================================
  // MÁGICA DE BLOQUEIO (A Parede Invisível)
  // Calcula o limite que a foto pode ser arrastada sem revelar o fundo preto
  // ==========================================
  const clampPosition = (x, y, currentZoom) => {
    const { photo } = sourceImagesRef.current;
    if (!photo || !photoAreaRef.current) return { x, y };

    const previewWidth = photoAreaRef.current.getBoundingClientRect().width || 380;
    const photoHeight = previewWidth * 0.62;
    
    const scale = Math.max(previewWidth / photo.width, photoHeight / photo.height) * Number(currentZoom);
    const renderedWidth = photo.width * scale;
    const renderedHeight = photo.height * scale;

    // Calcula a margem máxima de sobra (em pixels) para a esquerda/direita e cima/baixo
    const maxX = Math.max(0, (renderedWidth - previewWidth) / 2);
    const maxY = Math.max(0, (renderedHeight - photoHeight) / 2);

    // Trava as coordenadas X e Y entre o -limite e o +limite
    return {
      x: Math.max(-maxX, Math.min(maxX, x)),
      y: Math.max(-maxY, Math.min(maxY, y)),
    };
  };

  const drawAvatar = (canvas, size) => {
    const { photo, art } = sourceImagesRef.current;
    if (!photo || !art || !canvas) return;

    const context = canvas.getContext('2d');
    const photoHeight = size * 0.62;
    const scale = Math.max(size / photo.width, photoHeight / photo.height) * Number(zoom);
    const renderedWidth = photo.width * scale;
    const renderedHeight = photo.height * scale;
    const previewWidth = photoAreaRef.current?.getBoundingClientRect().width || 380;
    const positionScale = size / previewWidth;

    canvas.width = size;
    canvas.height = size;
    context.fillStyle = '#000';
    context.fillRect(0, 0, size, size);
    context.save();
    context.beginPath();
    context.rect(0, 0, size, photoHeight);
    context.clip();
    
    // Removido o offset de +38 que estava desregulando o topo e aplicando as posições bloqueadas
    context.drawImage(
      photo, 
      (size - renderedWidth) / 2 + photoPositionRef.current.x * positionScale, 
      (photoHeight - renderedHeight) / 2 + photoPositionRef.current.y * positionScale, 
      renderedWidth, 
      renderedHeight
    );
    context.restore();

    const artHeight = size * 0.38;
    const sourceArtHeight = art.width * (artHeight / size);
    const sourceArtY = Math.max(0, art.height - sourceArtHeight - 40);
    context.fillStyle = '#fff';
    context.fillRect(0, photoHeight, size, artHeight);
    context.drawImage(art, 0, sourceArtY, art.width, sourceArtHeight, 0, photoHeight, size, artHeight);
  };

  useEffect(() => {
    if (!photoFile) {
      setPhotoUrl('');
      return undefined;
    }
    const nextUrl = URL.createObjectURL(photoFile);
    setPhotoUrl(nextUrl);
    return () => URL.revokeObjectURL(nextUrl);
  }, [photoFile]);

  useEffect(() => {
    if (!photoUrl) return;
    const photo = new Image();
    const art = new Image();
    photo.onload = () => {
      art.onload = () => {
        sourceImagesRef.current = { photo, art };
        drawAvatar(previewCanvasRef.current, photoAreaRef.current?.getBoundingClientRect().width || 380);
      };
      art.src = logoComNumero;
    };
    photo.src = photoUrl;
  }, [photoUrl]);

  // Bloqueia a foto novamente caso o usuário diminua o Zoom depois de ter arrastado
  useEffect(() => {
    if (sourceImagesRef.current.photo) {
      photoPositionRef.current = clampPosition(photoPositionRef.current.x, photoPositionRef.current.y, zoom);
      setPhotoPosition(photoPositionRef.current);
      drawAvatar(previewCanvasRef.current, photoAreaRef.current?.getBoundingClientRect().width || 380);
    }
  }, [zoom]);

  const handlePhotoChange = (event) => {
    const file = event.target.files?.[0];
    if (!file || !file.type.startsWith('image/') || file.size > MAX_IMAGE_BYTES) return;

    const validationUrl = URL.createObjectURL(file);
    const validationImage = new Image();
    validationImage.onload = () => {
      const validDimensions = validationImage.width <= MAX_IMAGE_DIMENSION && validationImage.height <= MAX_IMAGE_DIMENSION;
      URL.revokeObjectURL(validationUrl);
      if (!validDimensions) return;
      photoPositionRef.current = { x: 0, y: 0 };
      setPhotoPosition(photoPositionRef.current);
      setPhotoFile(file);
      setZoom(1); // Reseta o zoom ao trocar de foto
    };
    validationImage.onerror = () => URL.revokeObjectURL(validationUrl);
    validationImage.src = validationUrl;
  };

  const resetAvatar = () => {
    setPhotoFile(null);
    setZoom(1);
    photoPositionRef.current = { x: 0, y: 0 };
    setPhotoPosition(photoPositionRef.current);
  };

  const handlePointerDown = (event) => {
    if (!photoUrl) return;
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    dragState.current = {
      startX: event.clientX,
      startY: event.clientY,
      position: photoPositionRef.current,
    };
  };

  // Trava o arrasto usando o clampPosition
  const handlePointerMove = (event) => {
    if (!dragState.current) return;
    if (event.pointerType === 'mouse' && event.buttons !== 1) return;
    
    const nextPosition = {
      x: dragState.current.position.x + event.clientX - dragState.current.startX,
      y: dragState.current.position.y + event.clientY - dragState.current.startY,
    };
    
    // Mágica sendo aplicada: não deixa a posição passar do limite!
    photoPositionRef.current = clampPosition(nextPosition.x, nextPosition.y, zoom);
    drawAvatar(previewCanvasRef.current, photoAreaRef.current?.getBoundingClientRect().width || 380);
  };

  const handlePointerUp = (event) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setPhotoPosition(photoPositionRef.current);
    dragState.current = null;
  };

  const downloadAvatar = () => {
    if (!photoUrl || !canvasRef.current || !sourceImagesRef.current.photo) return;
    drawAvatar(canvasRef.current, 1080);
    const link = document.createElement('a');
    link.download = 'apoio-walter-cavalcante.png';
    link.href = canvasRef.current.toDataURL('image/png');
    link.click();
  };

  return (
    <main className="avatar-page">
      <div className="avatar-hero">
        <img src={fotoOficial} alt="Walter Cavalcante" />
        <div className="avatar-hero-content">
          <div className="avatar-hero-top">
            <span>Walter Cavalcante</span>
            <span className="avatar-numero">43.640</span>
          </div>
        </div>
      </div>

      <section className="avatar-builder">
        <div className="avatar-preview-wrap">
          <div className="avatar-preview">
            <div ref={photoAreaRef} className="avatar-photo-area" onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp} onPointerCancel={handlePointerUp}>
              {photoUrl ? <canvas ref={previewCanvasRef} className="avatar-preview-canvas" aria-label="Prévia da sua foto no avatar" /> : <div className="avatar-empty"><FaImage /><strong>Escolha sua foto!</strong></div>}
            </div>
            <img className="avatar-campaign-art" src={logoComNumero} alt="Arte oficial Walter Cavalcante 43.640" />
          </div>
        </div>

        <div className="avatar-controls">
          <span className="avatar-eyebrow">Eu apoio 43.640</span>
          <h1>Crie sua foto oficial de apoio</h1>
          <p>Escolha uma foto, ajuste o enquadramento e baixe sua imagem com a moldura da campanha para usar nas redes sociais!</p>
          <label className="avatar-step-button"><span>1 · Selecionar foto</span><FaImage /><input type="file" accept="image/*" onChange={handlePhotoChange} /></label>
          <div className="avatar-zoom-label"><strong>2 · AJUSTAR IMAGEM</strong><span className="desktop-hint">Use o botão esquerdo do mouse para mover</span><span className="mobile-hint">Toque e arraste para mover</span></div>
          <input className="avatar-zoom" type="range" min="1" max="1.5" step="0.01" value={zoom} onChange={(event) => setZoom(event.target.value)} disabled={!photoUrl} />
          <div className="avatar-action-row">
            <button className="avatar-download" type="button" onClick={downloadAvatar} disabled={!photoUrl}><FaDownload /> 3 · Baixar minha foto</button>
            <button className="avatar-reset" type="button" onClick={resetAvatar}><FaRedo /> Recomeçar</button>
          </div>
        </div>
      </section>
      <canvas ref={canvasRef} className="avatar-canvas" aria-hidden="true" />
    </main>
  );
}