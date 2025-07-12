import { useEffect, useState } from "react";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import FormProduto from "../components/ProdutoForm";
import CardProduto from "../components/CardProduto";

type Produto = {
  id?: string;  // agora string, porque Firestore usa IDs string
  nome: string;
  preco: number;
  imagem?: string;
  descricao?: string;
};

export default function Dashboard() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produtoEditando, setProdutoEditando] = useState<Produto | null>(null);
  const [carregando, setCarregando] = useState(false);
  const [mensagem, setMensagem] = useState<string | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  const carregarProdutos = async () => {
    setCarregando(true);
    setErro(null);
    try {
      const querySnapshot = await getDocs(collection(db, "produtos"));
      const listaProdutos = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Produto[];
      setProdutos(listaProdutos);
    } catch (err: any) {
      setErro(err.message || "Erro desconhecido");
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  const handleSucesso = () => {
    setMensagem(produtoEditando ? "Produto atualizado!" : "Produto cadastrado!");
    setProdutoEditando(null);
    carregarProdutos();
    setTimeout(() => setMensagem(null), 3000);
  };

  const handleExcluir = async (id?: string) => {
    if (!id) return;
    if (!confirm("Confirma exclusão do produto?")) return;
    setErro(null);
    setMensagem(null);
    try {
      await deleteDoc(doc(db, "produtos", id));
      setMensagem("Produto excluído!");
      carregarProdutos();
      setTimeout(() => setMensagem(null), 3000);
      if (produtoEditando?.id === id) setProdutoEditando(null);
    } catch (err: any) {
      setErro(err.message || "Erro desconhecido ao excluir");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl mb-8 text-white">Dashboard de Produtos</h1>

      {mensagem && (
        <div className="mb-4 p-3 bg-green-600 text-white rounded">{mensagem}</div>
      )}
      {erro && (
        <div className="mb-4 p-3 bg-red-600 text-white rounded">{erro}</div>
      )}

      <div className="mb-12">
        <FormProduto produto={produtoEditando || undefined} onSuccess={handleSucesso} />
        {produtoEditando && (
          <button
            onClick={() => setProdutoEditando(null)}
            className="mt-4 text-sm text-gray-400 hover:text-gray-200"
          >
            Cancelar edição
          </button>
        )}
      </div>

      {carregando ? (
        <p className="text-white">Carregando produtos...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {produtos.map((p) => (
            <div key={p.id} className="bg-dark-700 p-4 rounded flex flex-col">
              <CardProduto
                nome={p.nome}
                preco={p.preco}
                imagem={p.imagem || ""}
                descricao={p.descricao}
              />
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => setProdutoEditando(p)}
                  className="flex-1 bg-neon-green text-black py-2 rounded font-semibold hover:bg-white transition-colors"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleExcluir(p.id)}
                  className="flex-1 bg-red-600 text-white py-2 rounded font-semibold hover:bg-red-700 transition-colors"
                >
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
