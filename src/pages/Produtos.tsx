import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import CardProduto from "../components/CardProduto";

type Produto = {
  id: string;
  nome: string;
  preco: number;
  imagem?: string;
  descricao?: string;
};

export default function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "produtos"));
        const lista = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Produto[];

        setProdutos(lista);
      } catch (err) {
        console.error("Erro ao carregar produtos:", err);
      } finally {
        setCarregando(false);
      }
    };

    carregarProdutos();
  }, []);

  if (carregando) return <p className="text-white p-4">Carregando produtos...</p>;

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {produtos.map((produto) => (
        <CardProduto
          key={produto.id}
          nome={produto.nome}
          preco={produto.preco}
          imagem={produto.imagem}
          descricao={produto.descricao}
        />
      ))}
    </div>
  );
}
