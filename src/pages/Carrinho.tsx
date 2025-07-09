import { useCarrinho } from '../hooks/use-carrinho';
import { Link } from 'react-router-dom';

export default function Carrinho() {
  const {
    carrinho,
    removerDoCarrinho,
    aumentarQuantidade,
    diminuirQuantidade,
    limparCarrinho,
  } = useCarrinho();

  const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

  return (
    <div className="min-h-screen py-8 bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-neon-green">Seu Carrinho</h1>

        {carrinho.length === 0 ? (
          <div className="text-center text-gray-300">
            <p className="mb-4">Seu carrinho está vazio.</p>
            <Link
              to="/produtos"
              className="bg-neon-green text-black px-6 py-3 rounded-lg font-semibold hover:bg-white transition-all duration-300"
            >
              Ver Produtos
            </Link>
          </div>
        ) : (
          <>
            <div className="grid gap-4 mb-6">
              {carrinho.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-dark-800 p-4 rounded-md shadow"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.imagem}
                      alt={item.nome}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{item.nome}</h2>
                      <p className="text-gray-400">
                        R$ {item.preco.toFixed(2)} x {item.quantidade} = R${' '}
                        {(item.preco * item.quantidade).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => diminuirQuantidade(item.id)}
                      className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantidade}</span>
                    <button
                      onClick={() => aumentarQuantidade(item.id)}
                      className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removerDoCarrinho(item.id)}
                      className="text-red-400 hover:text-red-200 ml-4"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-right text-xl font-bold mb-6 text-neon-green">
              Total: R$ {total.toFixed(2)}
            </div>

            <div className="flex justify-between">
              <button
                onClick={limparCarrinho}
                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-500 transition"
              >
                Limpar Carrinho
              </button>

              <button className="bg-neon-green text-black px-6 py-2 rounded hover:bg-white transition">
                Finalizar Compra
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
