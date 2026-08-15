import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../components/Hero/Hero.jsx";
import Biografia from '../components/Biografia/biografia.jsx'; 
import AcaoParlamentar from "../components/AcaoParlamentar/AcaoParlamentar.jsx"; // O componente que acabamos de criar!
import Compromissos from "../components/Compromissos/Compromissos.jsx";
import Contato from "../components/Contato/Contato.jsx";
import FalaWalter from "../components/FalaWalter/FalaWalter.jsx";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (location.hash) {
        const sectionId = location.hash.replace('#', '');
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 80);

    return () => window.clearTimeout(timer);
  }, [location.hash, location.pathname]);

  return (
    <>
      <Hero />
      <Biografia />
      <AcaoParlamentar /> 
      <Compromissos />
      <FalaWalter />
      {/* <Contato/>   */}
    </>
  );
}