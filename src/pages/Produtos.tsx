
import CardProduto from '../components/CardProduto';

const Produtos = () => {
  const produtos = [
    {
      id: 1,
      nome: "Shape Element 8.0",
      preco: 189.90,
      imagem: "/img/shape-element.jpg",
      descricao: "Shape profissional Element 8.0 polegadas"
    },
    {
      id: 2,
      nome: "Truck Independent",
      preco: 299.90,
      imagem: "/img/truck-independent.jpg",
      descricao: "Truck Independent Stage 11 - 139mm"
    },
    {
      id: 3,
      nome: "Rodas Bones 54mm",
      preco: 159.90,
      imagem: "/img/rodas-bones.jpg",
      descricao: "Rodas Bones STF 54mm - dureza 83B"
    },
    {
      id: 4,
      nome: "Rolamento Bones Reds",
      preco: 89.90,
      imagem: "/img/rolamento-bones.jpg",
      descricao: "Rolamento Bones Reds - pack com 8 unidades"
    },
    {
      id: 5,
      nome: "Tênis Vans Old Skool",
      preco: 349.90,
      imagem: "/img/tenis-vans.jpg",
      descricao: "Tênis Vans Old Skool preto - ideal para skate"
    },
    {
      id: 6,
      nome: "Camiseta Thrasher",
      preco: 79.90,
      imagem: "/img/camiseta-thrasher.jpg",
      descricao: "Camiseta Thrasher Magazine - 100% algodão"
    },
    {
      id: 7,
      nome: "Boné New Era",
      preco: 129.90,
      imagem: "/img/bone-newera.jpg",
      descricao: "Boné New Era aba reta - skateboard edition"
    },
    {
      id: 8,
      nome: "Lixa Jessup",
      preco: 25.90,
      imagem: "/img/lixa-jessup.jpg",
      descricao: "Lixa Jessup preta - aderência superior"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossos <span className="text-neon-green neon-text">Produtos</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Equipamentos e acessórios de alta qualidade para skatistas de todos os níveis
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button className="bg-neon-green text-black px-6 py-2 rounded-full font-medium hover:bg-white transition-colors duration-300">
            Todos
          </button>
          <button className="bg-dark-700 text-white px-6 py-2 rounded-full font-medium hover:bg-dark-600 transition-colors duration-300">
            Shapes
          </button>
          <button className="bg-dark-700 text-white px-6 py-2 rounded-full font-medium hover:bg-dark-600 transition-colors duration-300">
            Trucks
          </button>
          <button className="bg-dark-700 text-white px-6 py-2 rounded-full font-medium hover:bg-dark-600 transition-colors duration-300">
            Roupas
          </button>
          <button className="bg-dark-700 text-white px-6 py-2 rounded-full font-medium hover:bg-dark-600 transition-colors duration-300">
            Acessórios
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

        {/* Call to Action */}
        <div className="text-center mt-12 p-8 bg-dark-800 rounded-lg border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-4">
            Não encontrou o que procura?
          </h3>
          <p className="text-gray-300 mb-6">
            Entre em contato conosco! Temos acesso a uma vasta gama de produtos skatistas.
          </p>
          <button className="bg-neon-green text-black px-8 py-3 rounded-lg font-semibold hover:bg-white transition-colors duration-300">
            Fale Conosco
          </button>
        </div>
      </div>
    </div>
  );
};

export default Produtos;
