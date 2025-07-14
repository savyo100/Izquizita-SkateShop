import { useState, useEffect, FormEvent } from 'react';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../firebase";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";

type Produto = {
  id?: string;
  nome: string;
  preco: number;
  imagem?: string;
  descricao?: string;
};

type FormProdutoProps = {
  produto?: Produto;
  onSuccess: () => void;
};

export default function FormProduto({ produto, onSuccess }: FormProdutoProps) {
  const [nome, setNome] = useState(produto?.nome || '');
  const [preco, setPreco] = useState(produto?.preco || 0);
  const [imagemUrl, setImagemUrl] = useState(produto?.imagem || '');
  const [descricao, setDescricao] = useState(produto?.descricao || '');
  const [imagemFile, setImagemFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (produto) {
      setNome(produto.nome || '');
      setPreco(produto.preco || 0);
      setImagemUrl(produto.imagem || '');
      setDescricao(produto.descricao || '');
      setImagemFile(null);
    } else {
      setNome('');
      setPreco(0);
      setImagemUrl('');
      setDescricao('');
      setImagemFile(null);
    }
  }, [produto]);

  const uploadImagem = async (file: File) => {
    const nomeArquivo = `${Date.now()}_${file.name}`;
    const storageRef = ref(storage, `produtos/${nomeArquivo}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const usuarioAtual = auth.currentUser;
      console.log("👤 Usuário autenticado:", usuarioAtual);

      if (!usuarioAtual) {
        setError("Você precisa estar logado para cadastrar ou editar produtos.");
        setLoading(false);
        return;
      }

      let url = imagemUrl;

      if (imagemFile) {
        url = await uploadImagem(imagemFile);
      }

      const data = {
        nome,
        preco,
        imagem: url,
        descricao,
        criadoEm: new Date(),
        criadoPor: usuarioAtual.uid
      };

      onSuccess();
      setImagemFile(null);
      setImagemUrl('');
      setNome('');
      setPreco(0);
      setDescricao('');
    } catch (err: any) {
      setError(err.message || 'Erro ao salvar produto');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-dark-800 rounded-lg border border-gray-700">
      <h2 className="text-2xl mb-6 text-white">{produto ? 'Editar Produto' : 'Cadastrar Produto'}</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <label className="block mb-4">
        <span className="text-white mb-1 block">Nome</span>
        <input
          type="text"
          value={nome}
          onChange={e => setNome(e.target.value)}
          className="w-full rounded px-3 py-2 bg-dark-700 text-white"
          required
          minLength={2}
        />
      </label>

      <label className="block mb-4">
        <span className="text-white mb-1 block">Preço</span>
        <input
          type="number"
          step="0.01"
          value={preco}
          onChange={e => setPreco(parseFloat(e.target.value) || 0)}
          className="w-full rounded px-3 py-2 bg-dark-700 text-white"
          required
          min={0}
        />
      </label>

      <label className="block mb-4">
        <span className="text-white mb-1 block">Imagem</span>
        <input
          type="file"
          accept="image/*"
          onChange={e => {
            if (e.target.files && e.target.files[0]) {
              setImagemFile(e.target.files[0]);
            }
          }}
          className="w-full rounded px-3 py-2 bg-dark-700 text-white"
        />
      </label>

      {imagemUrl && (
        <div className="mb-4">
          <img src={imagemUrl} alt="Imagem do produto" className="max-h-40 object-contain" />
        </div>
      )}

      <label className="block mb-6">
        <span className="text-white mb-1 block">Descrição</span>
        <textarea
          value={descricao}
          onChange={e => setDescricao(e.target.value)}
          className="w-full rounded px-3 py-2 bg-dark-700 text-white"
          rows={4}
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="bg-neon-green text-black px-6 py-3 rounded font-semibold hover:bg-white transition-colors duration-300"
      >
        {loading ? (produto ? 'Salvando...' : 'Cadastrando...') : (produto ? 'Salvar' : 'Cadastrar')}
      </button>
    </form>
  );
}
