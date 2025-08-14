import { useCarrinho } from '../hooks/use-carrinho'; // Hook para gerenciar o carrinho
import { TipoProduto } from '../types/produto'; // Tipo de categoria do produto

// Props esperadas pelo card
interface CardProdutoProps {
  id: string;
  nome: string;
  preco: number | string;
  imagem: string;
  descricao?: string;
  tipo: TipoProduto;
}

const CardProduto = ({ id, nome, preco, imagem, descricao, tipo }: CardProdutoProps) => {
  const { adicionarAoCarrinho } = useCarrinho(); // Função para adicionar item ao carrinho

  // Garante que o preço é um número
  const precoNum = typeof preco === 'number' ? preco : Number(preco);

  // Formata o preço em duas casas decimais, e se for inválido, exibe "0.00"
  const precoFormatado = isNaN(precoNum) ? '0.00' : precoNum.toFixed(2);

  // Objeto que será enviado para o carrinho
  const produto = { id, nome, preco: precoNum, imagem, descricao, tipo };

  // Fallback para imagem caso não tenha uma válida
  const imagemValida = imagem && imagem.trim() !== "" ? imagem : "/imagem-fallback.png";

  return (
    <div className="bg-dark-800 dark:bg-dark-800 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-gray-700 dark:border-gray-700">
      
      {/* Área da imagem do produto */}
      <div className="relative overflow-hidden bg-black dark:bg-black bg-gray-100 rounded-t-lg flex justify-center items-center h-48"> 
        <img src={imagemValida} alt={nome} className="max-w-full max-h-full object-contain" />
      </div>

      {/* Área de texto e botão */}
      <div className="p-4">
        {/* Nome do produto */}
        <h3 className="text-lg font-semibold text-black dark:text-white text-gray-800 mb-1 group-hover:text-neon-green transition-colors duration-300">
          {nome}
        </h3>

        {/* Tipo/categoria do produto */}
        <small className="text-gray-400 dark:text-gray-400 text-gray-600 capitalize mb-3 block">
          {tipo}
        </small>

        {/* Descrição opcional */}
        {descricao && <p className="text-gray-400 dark:text-gray-400 text-gray-600 text-sm mb-3">{descricao}</p>}

        {/* Preço e botão de compra */}
        <div className="flex justify-between items-center">
          <span className="text-2x1 font-bold text-neon-green">R$ {precoFormatado}</span>

          <button
            aria-label={`Comprar ${nome} por R$ ${precoFormatado}`}
            onClick={() => adicionarAoCarrinho(produto)}
            className="bg-neon-green text-black px-4 py-2 rounded-md font-medium hover:bg-green-600 dark:hover:bg-white hover:bg-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduto;
