import { useState, useEffect, FormEvent } from 'react';
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { db, auth } from "../firebase";

type TipoProduto = "shape" | "rodas" | "truck" | "parafusos" | "acessorios" | "roupas" | "lixa";

type Produto = {
  id?: string;
  nome: string;
  preco: number;
  imagem?: string;
  descricao?: string;
  tipo: TipoProduto;
  criadoEm?: Date;
  criadoPor?: string;
};

type FormProdutoProps = {
  produto?: Produto;
  onSuccess: () => void;
};

const tiposProduto: TipoProduto[] = ["shape", "rodas", "truck", "parafusos", "acessorios", "roupas", "lixa"];

export default function FormProduto({ produto, onSuccess }: FormProdutoProps) {
  const [nome, setNome] = useState(produto?.nome || '');
  const [preco, setPreco] = useState(produto?.preco || 0);
  const [imagemUrl, setImagemUrl] = useState(produto?.imagem || '');
  const [descricao, setDescricao] = useState(produto?.descricao || '');
  const [tipo, setTipo] = useState<TipoProduto>(produto?.tipo || 'shape');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (produto) {
      setNome(produto.nome || '');
      setPreco(produto.preco || 0);
      setImagemUrl(produto.imagem || '');
      setDescricao(produto.descricao || '');
      setTipo(produto.tipo || 'shape');
    } else {
      setNome('');
      setPreco(0);
      setImagemUrl('');
      setDescricao('');
      setTipo('shape');
    }
  }, [produto]);

  const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError('');

    try {
      const usuarioAtual = auth.currentUser;

    if (!usuarioAtual) {
      setError("Você precisa estar logado para cadastrar ou editar produtos.");
      setLoading(false);
      return;
    }

      const url = imagemUrl;

      const data = {
        nome,
        preco,
        imagem: url,
        descricao,
        tipo,
        criadoEm: produto?.id ? produto.criadoEm || new Date() : new Date(),
        criadoPor: usuarioAtual.uid
      };

      if (produto?.id) {
        const ref = doc(db, "produtos", produto.id);
        await setDoc(ref, data, { merge: true });
      } else {
        await addDoc(collection(db, "produtos"), data);
      }

      onSuccess();

      // resetar campos após criação
      if (!produto?.id) {
        setNome('');
        setPreco(0);
        setImagemUrl('');
        setDescricao('');
        setTipo('shape');
      }

    } catch (err: any) {
      setError(err.message || 'Erro ao salvar produto');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-dark-800 rounded-lg border border-gray-700">
      <h2 className="text-2xl mb-6 text-foreground">{produto ? 'Editar Produto' : 'Cadastrar Produto'}</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <label className="block mb-4">
        <span className="text-foreground mb-1 block">Nome</span>
        <input
          type="text"
          value={nome}
          onChange={e => setNome(e.target.value)}
          className="w-full rounded px-3 py-2 bg-dark-700 text-foreground"
          required
          minLength={2}
        />
      </label>

      <label className="block mb-4">
        <span className="text-foreground mb-1 block">Preço</span>
        <input
          type="number"
          step="0.01"
          value={preco}
          onChange={e => setPreco(parseFloat(e.target.value) || 0)}
          className="w-full rounded px-3 py-2 bg-dark-700 text-foreground"
          required
          min={0}
        />
      </label>

      <label className="block mb-4">
        <span className="text-foreground mb-1 block">URL da Imagem</span>
        <input
          type="text"
          value={imagemUrl}
          onChange={e => setImagemUrl(e.target.value)}
          placeholder="https://exemplo.com/imagem.jpg"
          className="w-full rounded px-3 py-2 bg-dark-700 text-foreground"
        />
      </label>

      <label className="block mb-4">
        <span className="text-foreground mb-1 block">Descrição</span>
        <textarea
          value={descricao}
          onChange={e => setDescricao(e.target.value)}
          className="w-full rounded px-3 py-2 bg-dark-700 text-foreground"
          rows={4}
        />
      </label>

      <label className="block mb-6">
        <span className="text-foreground mb-1 block">Tipo</span>
        <select
          value={tipo}
          onChange={e => setTipo(e.target.value as TipoProduto)}
          className="w-full p-2 rounded-md bg-dark-700 text-foreground"
          required
        >
          {tiposProduto.map((t) => (
            <option key={t} value={t}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="bg-neon-green text-black px-6 py-3 rounded font-semibold hover:bg-green-600 dark:hover:bg-white  transition-colors duration-300"
      >
        {loading ? (produto ? 'Salvando...' : 'Cadastrando...') : (produto ? 'Salvar' : 'Cadastrar')}
      </button>
    </form>
  );
}
