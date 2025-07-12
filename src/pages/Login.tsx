import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");
    setCarregando(true);

    try {
      await login(email, senha);
      navigate("/dashboard");
    } catch (err: any) {
      console.error("Erro de login:", err.code, err.message);

      switch (err.code) {
        case "auth/user-not-found":
          setErro("Usuário não encontrado.");
          break;
        case "auth/wrong-password":
          setErro("Senha incorreta.");
          break;
        case "auth/invalid-email":
          setErro("Email inválido.");
          break;
        case "auth/too-many-requests":
          setErro("Muitas tentativas. Tente novamente mais tarde.");
          break;
        default:
          setErro("Erro ao fazer login.");
      }
    } finally {
      setCarregando(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 mt-24 bg-dark-800 rounded-lg shadow-lg"
    >
      <h2 className="text-3xl mb-6 text-white text-center font-bold">Login do Admin</h2>

      {erro && (
        <p className="text-red-500 mb-4 text-center font-medium">{erro}</p>
      )}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 mb-4 rounded bg-dark-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-green"
        required
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        className="w-full p-3 mb-6 rounded bg-dark-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-green"
        required
      />

      <button
        type="submit"
        disabled={carregando}
        className="w-full bg-neon-green text-black py-3 rounded font-semibold hover:bg-white transition-colors duration-300 disabled:opacity-60"
      >
        {carregando ? "Entrando..." : "Entrar"}
      </button>
    </form>
  );
}
