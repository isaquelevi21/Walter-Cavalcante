import React from 'react';
import { FaDownload } from 'react-icons/fa';
import './Materiais.css';

export default function Materiais() {
  // Lista dos materiais disponíveis para baixar
  const listaMateriais = [
    {
      id: 1,
      titulo: 'Foto Oficial - Perfil',
      descricao: 'Foto de perfil oficial',
      // Injetando a variável do Vite para garantir o caminho no GitHub Pages e na Hostinger
      arquivo: `${import.meta.env.BASE_URL}downloads/FOTO_WALTER_2026.png`, 
      nomeDownload: 'FOTO OFICIAL PERFIL'
    },
    {
      id: 2,
      titulo: 'Logo da Campanha',
      descricao: 'Logotipo oficial',
      arquivo: `${import.meta.env.BASE_URL}downloads/LOGO_COM_NUMERO.png`,
      nomeDownload: 'LOGO COM NÚMERO'
    },
    {
      id: 3,
      titulo: 'Logo Horizontal',
      descricao: 'Logotipo Oficial',
      arquivo: `${import.meta.env.BASE_URL}downloads/LOGO_HORIZONTAL.png`,
      nomeDownload: 'LOGO HORIZONTAL'
    }
  ];

  return (
    <main className="materiais-container">
      <div className="materiais-header">
        <h1>MATERIAL DE CAMPANHA</h1>
        <p>Baixe agora nosso material oficial !</p>
      </div>

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