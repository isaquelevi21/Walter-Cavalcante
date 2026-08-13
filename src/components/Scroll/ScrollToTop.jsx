import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Sempre que o pathname (a URL) mudar, joga a tela pro topo sem animação
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Ele não renderiza nada na tela, é só um componente lógico
};

export default ScrollToTop;