import { useEffect, useState } from 'react';
import CardProduto from '../components/CardProduto';

type Produto = {
  id: number;
  nome: string;
  preco: number;
  imagem?: string;
  descricao?: string;
};

export default function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const resposta = await fetch('http://localhost:3001/produtos');
        const dados = await resposta.json();
        setProdutos(dados);
      } catch (erro) {
        console.error('Erro ao buscar produtos:', erro);
      } finally {
        setCarregando(false);
      }
    };

    fetchProdutos();
  }, []);

  if (carregando) return <p className="text-center text-white">Carregando produtos...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {produtos.map(produto => (
        <CardProduto
          key={produto.id}
          nome={produto.nome}
          preco={produto.preco}
          imagem={produto.imagem || ''}
          descricao={produto.descricao}
        />
      ))}
    </div>
  );
}
