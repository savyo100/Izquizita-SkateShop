import { useCarrinho } from '../hooks/use-carrinho';

type TipoProduto = "shape" | "rodas" | "truck" | "parafusos" | "acessorios" | "roupas";

interface CardProdutoProps {
  id: string;
  nome: string;
  preco: number | string;
  imagem: string;
  descricao?: string;
  tipo: TipoProduto;
}

const CardProduto = ({ id, nome, preco, imagem, descricao, tipo }: CardProdutoProps) => {
  const { adicionarAoCarrinho } = useCarrinho();

  const precoNum = typeof preco === 'number' ? preco : Number(preco);
  const precoFormatado = isNaN(precoNum) ? '0.00' : precoNum.toFixed(2);

  const produto = { id, nome, preco: precoNum, imagem, descricao, tipo };

  const imagemValida = imagem && imagem.trim() !== "" ? imagem : "/imagem-fallback.png";

  return (
    <div className="bg-dark-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-gray-700">
      <div className="relative overflow-hidden bg-black rounded-t-lg flex justify-center items-center h-48">
        <img src={imagemValida} alt={nome} className="max-w-full max-h-full object-contain" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-neon-green transition-colors duration-300">
          {nome}
        </h3>
        <small className="text-gray-400 capitalize mb-3 block">{tipo}</small>

        {descricao && <p className="text-gray-400 text-sm mb-3">{descricao}</p>}

        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-neon-green">R$ {precoFormatado}</span>

          <button
            aria-label={`Comprar ${nome} por R$ ${precoFormatado}`}
            onClick={() => adicionarAoCarrinho(produto)}
            className="bg-neon-green text-black px-4 py-2 rounded-md font-medium hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduto;
