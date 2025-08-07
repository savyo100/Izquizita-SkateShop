import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import CardProduto from "../components/CardProduto";
import { Produto, TipoProduto } from "./produto";

const tiposProduto = ["todos", "shape", "rodas", "truck", "parafusos", "acessorios", "roupas"] as const;

export default function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [tipoFiltro, setTipoFiltro] = useState<typeof tiposProduto[number]>('todos');
  const [mostrarFiltroMobile, setMostrarFiltroMobile] = useState(false);

  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "produtos"));
        const lista = querySnapshot.docs.map((doc) => {
          const data = doc.data();

          return {
            id: doc.id,
            nome: typeof data.nome === 'string' ? data.nome : "Sem nome",
            preco: typeof data.preco === 'number' ? data.preco : 0,
            imagem: typeof data.imagem === 'string' ? data.imagem : undefined,
            descricao: typeof data.descricao === 'string' ? data.descricao : undefined,
            tipo: typeof data.tipo === 'string' && ["shape", "rodas", "truck", "parafusos", "acessorios", "roupas"].includes(data.tipo)
              ? data.tipo as TipoProduto
              : "shape",
          } as Produto;
        });

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
  if (produtos.length === 0) return <p className="text-white p-4">Nenhum produto cadastrado.</p>;

  const produtosFiltrados = tipoFiltro === 'todos' ? produtos : produtos.filter(p => p.tipo === tipoFiltro);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-dark-900">
      <aside className="bg-dark-800 border-b border-gray-700 md:border-b-0 md:border-r md:w-64 p-4 md:p-6 flex flex-col">
        <div className="flex items-center justify-between md:block">
          <h2 className="text-white text-xl font-semibold">Filtros</h2>
          <button
            className="md:hidden text-neon-green font-bold text-xl"
            onClick={() => setMostrarFiltroMobile(!mostrarFiltroMobile)}
            aria-label={mostrarFiltroMobile ? "Fechar filtros" : "Abrir filtros"}
          >
            {mostrarFiltroMobile ? "✕" : "☰"}
          </button>
        </div>
        <div className={`${mostrarFiltroMobile ? "block" : "hidden"} md:block mt-4`}>
          <label htmlFor="filtro-tipo" className="text-white font-semibold mb-2 block">
            Tipo de produto
          </label>
          <select
            id="filtro-tipo"
            value={tipoFiltro}
            onChange={e => setTipoFiltro(e.target.value as typeof tiposProduto[number])}
            className="w-full rounded-md border border-gray-600 bg-dark-700 py-2 px-3 text-white placeholder-gray-400 focus:border-neon-green focus:outline-none focus:ring-2 focus:ring-neon-green transition"
          >
            {tiposProduto.map(t => (
              <option key={t} value={t}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </aside>

      <main className="flex-1 p-6 overflow-auto">
        {produtosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {produtosFiltrados.map((produto) => (
              <CardProduto
                key={produto.id}
                id={produto.id!}
                nome={produto.nome}
                preco={produto.preco}
                imagem={produto.imagem || ""}
                descricao={produto.descricao}
                tipo={produto.tipo}
              />
            ))}
          </div>
        ) : (
          <p className="text-white">Nenhum produto encontrado para o filtro selecionado.</p>
        )}
      </main>
    </div>
  );
}
