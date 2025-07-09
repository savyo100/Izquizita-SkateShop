import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Produto = {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
  descricao?: string;
};

export type ProdutoCarrinho = Produto & { quantidade: number };

type CarrinhoContextType = {
  carrinho: ProdutoCarrinho[];
  adicionarAoCarrinho: (produto: Produto) => void;
  removerDoCarrinho: (id: number) => void;
  aumentarQuantidade: (id: number) => void;
  diminuirQuantidade: (id: number) => void;
  limparCarrinho: () => void;
};

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined);

const STORAGE_KEY = "izquizita_carrinho";

export const CarrinhoProvider = ({ children }: { children: ReactNode }) => {
  const [carrinho, setCarrinho] = useState<ProdutoCarrinho[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(carrinho));
  }, [carrinho]);

  const adicionarAoCarrinho = (produto: Produto) => {
    setCarrinho((prev) => {
      const index = prev.findIndex((p) => p.id === produto.id);
      if (index !== -1) {
        // Produto já existe, aumenta quantidade
        const novoCarrinho = [...prev];
        novoCarrinho[index].quantidade += 1;
        return novoCarrinho;
      } else {
        // Produto novo, adiciona com quantidade 1
        return [...prev, { ...produto, quantidade: 1 }];
      }
    });
  };

  const removerDoCarrinho = (id: number) => {
    setCarrinho((prev) => prev.filter((p) => p.id !== id));
  };

  const aumentarQuantidade = (id: number) => {
    setCarrinho((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantidade: p.quantidade + 1 } : p))
    );
  };

  const diminuirQuantidade = (id: number) => {
    setCarrinho((prev) =>
      prev
        .map((p) =>
          p.id === id
            ? { ...p, quantidade: p.quantidade > 1 ? p.quantidade - 1 : 1 }
            : p
        )
        // Se quiser remover quando quantidade chegar a zero, pode filtrar aqui
    );
  };

  const limparCarrinho = () => {
    setCarrinho([]);
  };

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        adicionarAoCarrinho,
        removerDoCarrinho,
        aumentarQuantidade,
        diminuirQuantidade,
        limparCarrinho,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = (): CarrinhoContextType => {
  const context = useContext(CarrinhoContext);
  if (!context) throw new Error("useCarrinho deve estar dentro do CarrinhoProvider");
  return context;
};
