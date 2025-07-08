
interface CardProdutoProps {
  nome: string;
  preco: number;
  imagem: string;
  descricao?: string;
}

const CardProduto = ({ nome, preco, imagem, descricao }: CardProdutoProps) => {
  return (
    <div className="streetwear-card rounded-none overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:rotate-1 group relative">
      {/* Corner bracket decoration */}
      <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-grunge-orange z-10"></div>
      <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-grunge-orange z-10"></div>
      <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-grunge-orange z-10"></div>
      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-grunge-orange z-10"></div>
      
      <div className="relative overflow-hidden">
        <img
          src={imagem}
          alt={nome}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-300"></div>
        {/* Overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
      </div>
      
      <div className="p-4 bg-dark-800">
        <h3 className="text-lg font-black font-grunge text-white mb-2 group-hover:text-grunge-orange transition-colors duration-300 uppercase tracking-wider">
          [{nome}]
        </h3>
        
        {descricao && (
          <p className="text-gray-400 text-xs mb-3 font-grunge uppercase tracking-wide">
            {descricao}
          </p>
        )}
        
        <div className="flex justify-between items-center">
          <span className="text-xl font-black text-grunge-orange font-grunge">
            R$ {preco.toFixed(2)}
          </span>
          
          <button className="bg-grunge-orange text-black px-4 py-2 font-black font-grunge uppercase tracking-wider hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-grunge-orange hover:border-white">
            GET IT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduto;
