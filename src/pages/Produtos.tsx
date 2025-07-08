
import CardProduto from '../components/CardProduto';

const Produtos = () => {
  const produtos = [
    {
      id: 1,
      nome: "Element Deck 8.0",
      preco: 189.90,
      imagem: "/img/shape-element.jpg",
      descricao: "Raw street deck - 8.0 inches of pure culture"
    },
    {
      id: 2,
      nome: "Independent Trucks",
      preco: 299.90,
      imagem: "/img/truck-independent.jpg",
      descricao: "Stage 11 - 139mm - Built to destroy"
    },
    {
      id: 3,
      nome: "Bones Wheels 54mm",
      preco: 159.90,
      imagem: "/img/rodas-bones.jpg",
      descricao: "STF formula - 83B hardness - Street tested"
    },
    {
      id: 4,
      nome: "Bones Reds Bearings",
      preco: 89.90,
      imagem: "/img/rolamento-bones.jpg",
      descricao: "Pack of 8 - Legendary precision"
    },
    {
      id: 5,
      nome: "Vans Old Skool",
      preco: 349.90,
      imagem: "/img/tenis-vans.jpg",
      descricao: "Classic black - Skate authentic"
    },
    {
      id: 6,
      nome: "Thrasher Tee",
      preco: 79.90,
      imagem: "/img/camiseta-thrasher.jpg",
      descricao: "Magazine logo - 100% cotton realness"
    },
    {
      id: 7,
      nome: "New Era Snapback",
      preco: 129.90,
      imagem: "/img/bone-newera.jpg",
      descricao: "Flat bill - Skateboard edition"
    },
    {
      id: 8,
      nome: "Jessup Griptape",
      preco: 25.90,
      imagem: "/img/lixa-jessup.jpg",
      descricao: "Black grip - Superior stick"
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 font-grunge uppercase tracking-wider">
            [<span className="text-grunge-orange distort-text">PRODUCTS</span>]
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-grunge uppercase tracking-wide">
            AUTHENTIC GEAR FOR REAL STREET CULTURE /// NO POSERS ALLOWED
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="bg-grunge-orange text-black px-6 py-3 font-black font-grunge uppercase tracking-wider hover:bg-white transition-all duration-300 border-2 border-grunge-orange">
            [ALL]
          </button>
          <button className="bg-dark-700 text-white px-6 py-3 font-black font-grunge uppercase tracking-wider hover:bg-grunge-orange hover:text-black transition-all duration-300 border-2 border-grunge-orange">
            [DECKS]
          </button>
          <button className="bg-dark-700 text-white px-6 py-3 font-black font-grunge uppercase tracking-wider hover:bg-grunge-orange hover:text-black transition-all duration-300 border-2 border-grunge-orange">
            [HARDWARE]
          </button>
          <button className="bg-dark-700 text-white px-6 py-3 font-black font-grunge uppercase tracking-wider hover:bg-grunge-orange hover:text-black transition-all duration-300 border-2 border-grunge-orange">
            [APPAREL]
          </button>
          <button className="bg-dark-700 text-white px-6 py-3 font-black font-grunge uppercase tracking-wider hover:bg-grunge-orange hover:text-black transition-all duration-300 border-2 border-grunge-orange">
            [ACCESSORIES]
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
        <div className="text-center mt-16 p-12 streetwear-card relative">
          <h3 className="text-3xl font-black text-white mb-6 font-grunge uppercase tracking-wider">
            [CAN'T FIND WHAT YOU NEED?]
          </h3>
          <p className="text-gray-300 mb-8 font-grunge uppercase tracking-wide text-sm leading-relaxed">
            HIT US UP /// WE GOT CONNECTIONS /// UNDERGROUND SUPPLIERS /// RARE FINDS
          </p>
          <button className="bg-grunge-orange text-black px-12 py-4 font-black font-grunge uppercase tracking-widest hover:bg-white transition-all duration-300 border-2 border-grunge-orange">
            [CONTACT US]
          </button>
        </div>
      </div>
    </div>
  );
};

export default Produtos;
