import { useState, useEffect, FormEvent } from 'react';

type Produto = {
  id?: number;
  nome: string;
  preco: number;
  imagem?: string;
  descricao?: string;
};

type FormProdutoProps = {
  produto?: Produto; // se vier, o formulário é para editar
  onSuccess: () => void; // callback para após salvar
};

export default function FormProduto({ produto, onSuccess }: FormProdutoProps) {
  const [nome, setNome] = useState(produto?.nome || '');
  const [preco, setPreco] = useState(produto?.preco || 0);
  const [imagem, setImagem] = useState(produto?.imagem || '');
  const [descricao, setDescricao] = useState(produto?.descricao || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const isEdit = Boolean(produto?.id);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const data = { nome, preco, imagem, descricao };

    try {
      const url = isEdit
        ? `http://localhost:3001/produtos/${produto!.id}`
        : 'http://localhost:3001/produtos';

      const method = isEdit ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Erro ${response.status}: ${response.statusText}`);
      }

      onSuccess(); // avisar que salvou com sucesso

    } catch (err: any) {
      setError(err.message || 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-dark-800 rounded-lg border border-gray-700">
      <h2 className="text-2xl mb-6 text-white">{isEdit ? 'Editar Produto' : 'Cadastrar Produto'}</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <label className="block mb-4">
        <span className="text-white mb-1 block">Nome</span>
        <input
          type="text"
          value={nome}
          onChange={e => setNome(e.target.value)}
          className="w-full rounded px-3 py-2 bg-dark-700 text-white focus:outline-none focus:ring-2 focus:ring-neon-green"
          required
        />
      </label>

      <label className="block mb-4">
        <span className="text-white mb-1 block">Preço</span>
        <input
          type="number"
          step="0.01"
          value={preco}
          onChange={e => setPreco(parseFloat(e.target.value))}
          className="w-full rounded px-3 py-2 bg-dark-700 text-white focus:outline-none focus:ring-2 focus:ring-neon-green"
          required
          min="0"
        />
      </label>

      <label className="block mb-4">
        <span className="text-white mb-1 block">URL da Imagem</span>
        <input
          type="text"
          value={imagem}
          onChange={e => setImagem(e.target.value)}
          className="w-full rounded px-3 py-2 bg-dark-700 text-white focus:outline-none focus:ring-2 focus:ring-neon-green"
        />
      </label>

      <label className="block mb-6">
        <span className="text-white mb-1 block">Descrição</span>
        <textarea
          value={descricao}
          onChange={e => setDescricao(e.target.value)}
          className="w-full rounded px-3 py-2 bg-dark-700 text-white focus:outline-none focus:ring-2 focus:ring-neon-green"
          rows={4}
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="bg-neon-green text-black px-6 py-3 rounded font-semibold hover:bg-white transition-colors duration-300"
      >
        {loading ? (isEdit ? 'Salvando...' : 'Cadastrando...') : (isEdit ? 'Salvar' : 'Cadastrar')}
      </button>
    </form>
  );
}
