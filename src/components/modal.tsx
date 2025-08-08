// components/modal.tsx
import { ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

export const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay escuro */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* Sidebar à direita */}
      <div className="ml-auto h-full w-full sm:w-[400px] bg-dark-800 shadow-lg p-6 relative z-50 overflow-y-auto">
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-foreground text-2xl font-bold hover:text-neon-green"
        >
          ×
        </button>

        {children}
      </div>
    </div>
  );
};
