// Importa o tipo ReactNode para permitir que o Modal receba qualquer elemento JSX como conteúdo
import { ReactNode } from "react";

// Define o tipo das props do Modal
type ModalProps = {
  children: ReactNode; // Conteúdo que será renderizado dentro do Modal
  onClose: () => void; // Função chamada para fechar o Modal
};

// Componente Modal
export const Modal = ({ children, onClose }: ModalProps) => {
  return (
    // Container principal que cobre toda a tela
    <div className="fixed inset-0 z-50 flex">
      
      {/* Overlay escuro que fecha o Modal ao ser clicado */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose} // Fecha o modal ao clicar fora
      ></div>

      {/* Conteúdo do modal, estilo "sidebar" vindo da direita */}
      <div className="ml-auto h-full w-full sm:w-[400px] bg-dark-800 shadow-lg p-6 relative z-50 overflow-y-auto">
        
        {/* Botão "X" para fechar o modal */}
        <button
          onClick={onClose} // Fecha o modal ao clicar no X
          className="absolute top-3 right-4 text-foreground text-2xl font-bold hover:text-neon-green"
        >
          ×
        </button>

        {/* Conteúdo passado via props */}
        {children}
      </div>
    </div>
  );
};
