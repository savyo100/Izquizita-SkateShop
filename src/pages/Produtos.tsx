import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import CardProduto from "../components/CardProduto";
import { Produto, TipoProduto } from "../types/produto";
import { Input } from "../components/ui/input";
import { Search } from "lucide-react";

const tiposProduto = ["todos", "shape", "rodas", "truck", "parafusos", "acessorios", "roupas", "lixa"] as const;

export default function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [tipoFiltro, setTipoFiltro] = useState<typeof tiposProduto[number]>('todos');
  const [pesquisa, setPesquisa] = useState('');
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
            tipo: typeof data.tipo === 'string' && ["shape", "rodas", "truck", "parafusos", "acessorios", "roupas", "lixa"].includes(data.tipo)
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

  if (carregando) return <p className="text-foreground p-4">Carregando produtos...</p>;
  if (produtos.length === 0) return <p className="text-foreground p-4">Nenhum produto cadastrado.</p>;

  const produtosFiltrados = produtos
    .filter(p => tipoFiltro === 'todos' || p.tipo === tipoFiltro)
    .filter(p => pesquisa === '' || p.nome.toLowerCase().includes(pesquisa.toLowerCase()));

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-background">
      {/* Sidebar de Filtros */}
      <aside className="bg-card border-b border-border lg:border-b-0 lg:border-r lg:w-80 p-6 flex flex-col shadow-lg">
        <div className="flex items-center justify-between lg:block">
          <h2 className="text-card-foreground text-2xl font-bold flex items-center gap-2">
            <Search className="h-6 w-6 text-primary" />
            Filtros
          </h2>
          <button
            className="lg:hidden text-primary font-bold text-xl hover:text-primary/80 transition-colors"
            onClick={() => setMostrarFiltroMobile(!mostrarFiltroMobile)}
            aria-label={mostrarFiltroMobile ? "Fechar filtros" : "Abrir filtros"}
          >
            {mostrarFiltroMobile ? "✕" : "☰"}
          </button>
        </div>
        
        <div className={`${mostrarFiltroMobile ? "block" : "hidden"} lg:block mt-6 space-y-6`}>
          {/* Barra de Pesquisa */}
          <div>
            <label htmlFor="pesquisa" className="text-card-foreground font-semibold mb-3 block">
              Pesquisar produto
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="pesquisa"
                type="text"
                placeholder="Digite o nome do produto..."
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Filtro por Tipo */}
          <div>
            <label htmlFor="filtro-tipo" className="text-card-foreground font-semibold mb-3 block">
              Categoria
            </label>
            <select
              id="filtro-tipo"
              value={tipoFiltro}
              onChange={e => setTipoFiltro(e.target.value as typeof tiposProduto[number])}
              className="w-full rounded-md border border-input bg-background py-3 px-4 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            >
              {tiposProduto.map(t => (
                <option key={t} value={t} className="bg-background">
                  {t === 'todos' ? 'Todas as categorias' : t.charAt(0).toUpperCase() + t.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Contador de Resultados */}
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-muted-foreground text-sm">
              <span className="font-semibold text-foreground">{produtosFiltrados.length}</span> produto{produtosFiltrados.length !== 1 ? 's' : ''} encontrado{produtosFiltrados.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </aside>

      {/* Área Principal */}
      <main className="flex-1 p-6 lg:p-10 overflow-auto">
        <div className="max-w-7xl mx-auto">
          {/* Header da seção */}
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Nossos Produtos
            </h1>
            <p className="text-muted-foreground">
              Encontre os melhores produtos para seu skate
            </p>
          </div>

          {/* Grid de Produtos */}
          {produtosFiltrados.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
            <div className="text-center py-16">
              <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Nenhum produto encontrado
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Tente ajustar os filtros ou buscar por outro termo para encontrar produtos.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
