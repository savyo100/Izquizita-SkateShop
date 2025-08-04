// funcaoBotao.ts
import { useState, useEffect } from 'react';

export function funcaoBotao() {
  const [mostrarBotao, setMostrarBotao] = useState(false);

  useEffect(() => {
    const aoRolar = () => {
      const noFinal =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 100;
      setMostrarBotao(noFinal);
    };

    window.addEventListener('scroll', aoRolar);
    aoRolar(); // verifica no carregamento
    return () => window.removeEventListener('scroll', aoRolar);
  }, []);

  return mostrarBotao;
}
