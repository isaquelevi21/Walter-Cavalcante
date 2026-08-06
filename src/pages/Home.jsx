import React from "react";

// Adicione o nome do arquivo e a extensão .jsx no final
import Hero from "../components/Hero/Hero.jsx";
import Trajetoria from "../components/Trajetoria/Trajetoria.jsx";
import Compromissos from "../components/Compromissos/Compromissos.jsx";
import Contato from "../components/Contato/Contato.jsx";
export default function Home() {
  return (
    <>
      <Hero />
      <Trajetoria />
      <Compromissos />
      {/* <Contato/>  */} {/* Para aparecer na interface a aba de contatos , basta retirar de comentário */}
    </>
  );
}