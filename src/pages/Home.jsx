import React from "react";

// Adicione o nome do arquivo e a extensão .jsx no final
import Hero from "../components/Hero/Hero.jsx";
import Trajetoria from "../components/Trajetoria/Trajetoria.jsx";
import Compromissos from "../components/Compromissos/Compromissos.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Trajetoria />
      <Compromissos />
    </>
  );
}