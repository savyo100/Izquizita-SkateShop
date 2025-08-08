import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCarrinho } from "../hooks/use-carrinho";
import { useAuth } from "../context/AuthContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function Checkout() {
  const { carrinho, limparCarrinho } = useCarrinho();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [metodoEntrega, setMetodoEntrega] = useState("retirada");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

  function enviarRelatorioWhatsapp() {
    const telefoneDona = "5586999836950"; // troque pelo número correto
    const itensTexto = carrinho
      .map(
        (item) =>
          `${item.quantidade}x ${item.nome} - R$ ${(item.preco * item.quantidade).toFixed(2)}`
      )
      .join("\n");

    const mensagem =
      `*Novo pedido recebido!*\n\n` +
      `Cliente: ${nome}\n` +
      `Telefone: ${telefone}\n` +
      `Método de entrega: ${metodoEntrega === "retirada" ? "Retirada na loja" : "Entrega em domicílio"}\n` +
      (metodoEntrega === "entrega" ? `Endereço: ${endereco}\n\n` : "\n") +
      `*Itens:*\n${itensTexto}\n\n` +
      `*Total: R$ ${total.toFixed(2)}*\n\n` +
      `Por favor, confirmar o pedido.`;

    const url = `https://wa.me/${telefoneDona}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  }

  async function finalizarCompra(e: React.FormEvent) {
    e.preventDefault();
    setErro("");
    setSucesso("");

    if (carrinho.length === 0) {
      setErro("Seu carrinho está vazio.");
      return;
    }

    if (!nome.trim() || !telefone.trim()) {
      setErro("Preencha todos os campos obrigatórios.");
      return;
    }

    if (metodoEntrega === "entrega" && !endereco.trim()) {
      setErro("Preencha o endereço para entrega.");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "pedidos"), {
        uid: user?.uid || null,
        nomeCliente: nome,
        endereco: metodoEntrega === "entrega" ? endereco : "",
        telefone,
        metodoEntrega,
        produtos: carrinho,
        total,
        criadoEm: serverTimestamp(),
        status: "pendente",
      });

      enviarRelatorioWhatsapp();

      setSucesso("Pedido realizado com sucesso!");
      limparCarrinho();
      setNome("");
      setEndereco("");
      setTelefone("");
      setMetodoEntrega("retirada");

      navigate("/");
    } catch (err: any) {
      setErro(err.message || "Erro ao salvar pedido.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-dark-800 rounded-md text-foreground mt-10">
      <h1 className="text-3xl font-bold mb-6 text-neon-green">Finalizar Pedido</h1>

      {erro && <p className="mb-4 text-red-500">{erro}</p>}
      {sucesso && <p className="mb-4 text-green-500">{sucesso}</p>}

      <form onSubmit={finalizarCompra} className="flex flex-col gap-4">
        <label>
          Nome Completo
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            disabled={loading}
            className="w-full p-2 rounded bg-dark-700 text-foreground"
            required
          />
        </label>

        <label>
          Telefone
          <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            disabled={loading}
            className="w-full p-2 rounded bg-dark-700 text-foreground"
            required
          />
        </label>

        <fieldset className="border border-gray-600 rounded p-3">
          <legend className="text-foreground font-semibold mb-2">Método de Entrega</legend>

          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              name="metodoEntrega"
              value="retirada"
              checked={metodoEntrega === "retirada"}
              onChange={() => setMetodoEntrega("retirada")}
              disabled={loading}
              className="mr-2"
            />
            Retirada na loja
          </label>

          <label className="inline-flex items-center">
            <input
              type="radio"
              name="metodoEntrega"
              value="entrega"
              checked={metodoEntrega === "entrega"}
              onChange={() => setMetodoEntrega("entrega")}
              disabled={loading}
              className="mr-2"
            />
            Entrega em domicílio
          </label>
        </fieldset>

        {metodoEntrega === "entrega" && (
          <label>
            Endereço
            <textarea
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              disabled={loading}
              className="w-full p-2 rounded bg-dark-700 text-foreground"
              required
              rows={3}
            />
          </label>
        )}

        <div className="text-right font-semibold text-neon-green">
          Total: R$ {total.toFixed(2)}
        </div>

        <button
          type="submit"
          disabled={loading || carrinho.length === 0}
          className="bg-neon-green text-black px-6 py-3 rounded font-semibold hover:bg-green-600 dark:hover:bg-white transition-colors duration-300 disabled:opacity-50"
        >
          {loading ? "Finalizando..." : "Finalizar Pedido"}
        </button>
      </form>
    </div>
  );
}
