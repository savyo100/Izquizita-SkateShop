
interface CardProdutoProps {
  nome: string;
  preco: number;
  imagem: string;
  descricao?: string;
}

const CardProduto = ({ nome, preco, imagem, descricao }: CardProdutoProps) => {
  return (
    <div className="bg-dark-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-gray-700">
      <div className="relative overflow-hidden">
        <img
          src={imagem}
          alt={nome}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-neon-green transition-colors duration-300">
          {nome}
        </h3>
        
        {descricao && (
          <p className="text-gray-400 text-sm mb-3">
            {descricao}
          </p>
        )}
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-neon-green">
            R$ {preco.toFixed(2)}
          </span>
          
          <button className="bg-neon-green text-black px-4 py-2 rounded-md font-medium hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-105">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduto;
