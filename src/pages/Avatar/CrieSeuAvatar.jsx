import React, { useEffect, useRef, useState } from 'react';
import { FaDownload, FaImage, FaRedo } from 'react-icons/fa';
import fotoOficial from '../../assets/images/banner_avatar.jpeg';
import logoComNumero from '../../assets/images/logo_com_numero.png';
import './CrieSeuAvatar.css';

const MAX_IMAGE_BYTES = 10 * 1024 * 1024;
const MAX_IMAGE_DIMENSION = 8000;

export default function CrieSeuAvatar() {
  const [photoUrl, setPhotoUrl] = useState('');
  const [photoFile, setPhotoFile] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [minZoom, setMinZoom] = useState(1); // MÁGICA 1: Estado para guardar o zoom mínimo real da foto
  const [photoPosition, setPhotoPosition] = useState({ x: 0, y: 0 });
  
  const canvasRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const photoAreaRef = useRef(null);
  
  const dragState = useRef(null);
  const activePointers = useRef(new Map());
  const pinchState = useRef({ initialDist: 0, initialZoom: 1 });
  
  const photoPositionRef = useRef({ x: 0, y: 0 });
  const sourceImagesRef = useRef({ photo: null, art: null });

  // MÁGICA 2: A matemática que impede a foto de desgrudar das bordas
  const clampPosition = (x, y, currentZoom) => {
    const { photo } = sourceImagesRef.current;
    if (!photo || !photoAreaRef.current) return { x, y };

    const previewWidth = photoAreaRef.current.getBoundingClientRect().width || 380;
    const photoHeight = previewWidth * 0.62;
    
    // Calcula o tamanho real que a foto está ocupando na tela
    const scale = Math.max(previewWidth / photo.width, photoHeight / photo.height) * Number(currentZoom);
    const renderedWidth = photo.width * scale;
    const renderedHeight = photo.height * scale;

    // Calcula a "sobra" de imagem que existe além do quadrado visível
    const maxX = Math.max(0, (renderedWidth - previewWidth) / 2);
    const maxY = Math.max(0, (renderedHeight - photoHeight) / 2);

    // Trava a posição X e Y para nunca passar dessa "sobra"
    return {
      x: Math.max(-maxX, Math.min(maxX, x)),
      y: Math.max(-maxY, Math.min(maxY, y)),
    };
  };

  // Função auxiliar para descobrir qual o zoom exato para a foto caber inteira
  const calculateInitialScale = (imgWidth, imgHeight, containerWidth, containerHeight) => {
      const scaleX = containerWidth / imgWidth;
      const scaleY = containerHeight / imgHeight;
      // Pega a maior escala para garantir que não vai ter fundo preto
      return Math.max(scaleX, scaleY); 
  }

  const drawAvatar = (canvas, size) => {
    const { photo, art } = sourceImagesRef.current;
    if (!photo || !art || !canvas) return;

    const context = canvas.getContext('2d');
    const photoHeight = size * 0.62;
    
    const isPreview = canvas === previewCanvasRef.current;

    canvas.width = size;
    canvas.height = isPreview ? photoHeight : size;

    const scale = Math.max(size / photo.width, photoHeight / photo.height) * Number(zoom);
    const renderedWidth = photo.width * scale;
    const renderedHeight = photo.height * scale;
    const previewWidth = photoAreaRef.current?.getBoundingClientRect().width || 380;
    const positionScale = size / previewWidth;

    // Pintar o fundo de branco no preview (prevenção, mas a matemática acima não vai deixar aparecer)
    context.fillStyle = '#ffffff'; 
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    context.save();
    context.beginPath();
    context.rect(0, 0, size, photoHeight);
    context.clip();
    
    context.drawImage(
      photo, 
      (size - renderedWidth) / 2 + photoPositionRef.current.x * positionScale, 
      (photoHeight - renderedHeight) / 2 + photoPositionRef.current.y * positionScale, 
      renderedWidth, 
      renderedHeight
    );
    context.restore();

    if (!isPreview) {
      const artHeight = size * 0.38;
      const sourceArtHeight = art.width * (artHeight / size);
      const sourceArtY = Math.max(0, art.height - sourceArtHeight - 40);
      context.fillStyle = '#fff';
      context.fillRect(0, photoHeight, size, artHeight);
      context.drawImage(art, 0, sourceArtY, art.width, sourceArtHeight, 0, photoHeight, size, artHeight);
    }
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
        
        // MÁGICA 3: Quando a foto carrega, calcula o zoom "perfeito"
        const previewWidth = photoAreaRef.current?.getBoundingClientRect().width || 380;
        const photoHeight = previewWidth * 0.62;
        const baseScale = calculateInitialScale(photo.width, photo.height, previewWidth, photoHeight);
        
        // O zoom mínimo será 1 (o padrão que calculamos acima). 
        // Se a pessoa tentar dar zoom out, vai bater no limite de preenchimento da caixa.
        setMinZoom(1); 
        setZoom(1);
        
        drawAvatar(previewCanvasRef.current, previewWidth);
      };
      art.src = logoComNumero;
    };
    photo.src = photoUrl;
  }, [photoUrl]);

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
    };
    validationImage.onerror = () => URL.revokeObjectURL(validationUrl);
    validationImage.src = validationUrl;
  };

  const resetAvatar = () => {
    setPhotoFile(null);
    setZoom(1);
    setMinZoom(1);
    photoPositionRef.current = { x: 0, y: 0 };
    setPhotoPosition(photoPositionRef.current);
  };

  const handlePointerDown = (event) => {
    if (!photoUrl) return;
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    
    activePointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (activePointers.current.size === 1) {
      dragState.current = {
        startX: event.clientX,
        startY: event.clientY,
        position: photoPositionRef.current,
      };
    } 
    else if (activePointers.current.size === 2) {
      const pts = Array.from(activePointers.current.values());
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      pinchState.current = { initialDist: dist, initialZoom: Number(zoom) };
      dragState.current = null; 
    }
  };

  const handlePointerMove = (event) => {
    if (!photoUrl || !activePointers.current.has(event.pointerId)) return;
    
    activePointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (activePointers.current.size === 1 && dragState.current) {
      const nextPosition = {
        x: dragState.current.position.x + event.clientX - dragState.current.startX,
        y: dragState.current.position.y + event.clientY - dragState.current.startY,
      };
      photoPositionRef.current = clampPosition(nextPosition.x, nextPosition.y, zoom);
      drawAvatar(previewCanvasRef.current, photoAreaRef.current?.getBoundingClientRect().width || 380);
    } 
    else if (activePointers.current.size === 2 && pinchState.current.initialDist > 0) {
      const pts = Array.from(activePointers.current.values());
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      const newZoom = pinchState.current.initialZoom * (dist / pinchState.current.initialDist);
      
      // MÁGICA 4: O zoom nunca será menor que o minZoom (que é o tamanho exato da caixa)
      setZoom(Math.min(Math.max(minZoom, newZoom), 4));
    }
  };

  const handlePointerUp = (event) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    activePointers.current.delete(event.pointerId);
    
    if (activePointers.current.size < 2) {
      pinchState.current = { initialDist: 0, initialZoom: 1 };
    }
    
    if (activePointers.current.size === 1) {
      const remainingPointer = Array.from(activePointers.current.values())[0];
      dragState.current = {
        startX: remainingPointer.x,
        startY: remainingPointer.y,
        position: photoPositionRef.current,
      };
    } else {
      dragState.current = null;
    }
    setPhotoPosition(photoPositionRef.current);
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
        {/* A imagem vai carregar sozinha, sem nenhum texto por cima */}
        <img src={fotoOficial} alt="Banner Walter Cavalcante" />
      </div>

      <section className="avatar-builder">
        <div className="avatar-preview-wrap">
          <div className="avatar-preview">
            <div 
              ref={photoAreaRef} 
              className={`avatar-photo-area ${photoUrl ? 'touch-none' : ''}`} 
              onPointerDown={handlePointerDown} 
              onPointerMove={handlePointerMove} 
              onPointerUp={handlePointerUp} 
              onPointerCancel={handlePointerUp}
            >
              {photoUrl ? (
                <canvas ref={previewCanvasRef} className="avatar-preview-canvas" aria-label="Prévia da sua foto no avatar" />
              ) : (
                <div className="avatar-empty"><FaImage /><strong>Escolha sua foto!</strong></div>
              )}
            </div>
            
            <img className="avatar-campaign-art" src={logoComNumero} alt="Arte oficial Walter Cavalcante 43.640" />
          </div>
        </div>

        <div className="avatar-controls">
          <span className="avatar-eyebrow">Eu apoio 43.640</span>
          <h1>Crie sua foto oficial de apoio</h1>
          <p>Escolha uma foto, ajuste o enquadramento e baixe sua imagem com a moldura da campanha para usar nas redes sociais!</p>
          
          <label className="avatar-step-button">
            <span>1 · Selecionar foto</span>
            <FaImage />
            <input type="file" accept="image/*" onChange={handlePhotoChange} />
          </label>
          
          <div className="avatar-zoom-label">
            <strong>2 · AJUSTAR IMAGEM</strong>
            <span className="desktop-hint">Role ou use o mouse para mover</span>
            <span className="mobile-hint">Faça o movimento de pinça para dar zoom</span>
          </div>
          
          {/* MÁGICA 5: O range de zoom agora também respeita o limite mínimo */}
          <input 
            className="avatar-zoom" 
            type="range" 
            min={minZoom} 
            max="4" 
            step="0.01" 
            value={zoom} 
            onChange={(event) => setZoom(Number(event.target.value))} 
            disabled={!photoUrl} 
          />
          
          <div className="avatar-action-row">
            <button className="avatar-download" type="button" onClick={downloadAvatar} disabled={!photoUrl}>
              <FaDownload /> 3 · Baixar minha foto
            </button>
            <button className="avatar-reset" type="button" onClick={resetAvatar}>
              <FaRedo /> Recomeçar
            </button>
          </div>
        </div>
      </section>
      
      <canvas ref={canvasRef} className="avatar-canvas" aria-hidden="true" />
    </main>
  );
}