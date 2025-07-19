import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../context/AuthContext";

type FormData = {
  email: string;
  senha: string;
};

const schema = yup.object({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  senha: yup.string().required("Senha é obrigatória"),
}).required();

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data: FormData) {
    try {
      await login(data.email, data.senha);
      navigate("/dashboard");
    } catch (err: any) {
      switch (err.code) {
        case "auth/user-not-found":
          setError("email", { message: "Usuário não encontrado." });
          break;
        case "auth/wrong-password":
          setError("senha", { message: "Senha incorreta." });
          break;
        case "auth/invalid-email":
          setError("email", { message: "Email inválido." });
          break;
        case "auth/too-many-requests":
          alert("Muitas tentativas. Tente novamente mais tarde.");
          break;
        default:
          alert("Erro ao fazer login.");
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 mt-24 bg-dark-800 rounded-lg shadow-lg text-white"
    >
      <h2 className="text-3xl mb-6 text-white text-center font-bold">Bem-vindo</h2>

      <label>
        Email
        <input
          type="email"
          {...register("email")}
          className={`w-full p-3 mb-4 rounded bg-dark-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
            errors.email ? "focus:ring-red-500 border border-red-500" : "focus:ring-neon-green"
          }`}
          disabled={isSubmitting}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </label>

      <label>
        Senha
        <input
          type="password"
          {...register("senha")}
          className={`w-full p-3 mb-6 rounded bg-dark-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
            errors.senha ? "focus:ring-red-500 border border-red-500" : "focus:ring-neon-green"
          }`}
          disabled={isSubmitting}
        />
        {errors.senha && <p className="text-red-500 text-sm mt-1">{errors.senha.message}</p>}
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-neon-green text-black py-3 rounded font-semibold hover:bg-white transition-colors duration-300 disabled:opacity-50"
      >
        {isSubmitting ? "Entrando..." : "Entrar"}
      </button>

      <p className="mt-4 text-center text-gray-400">
        Não tem uma conta?{" "}
        <Link to="/registrar" className="text-neon-green hover:underline">
          Registrar
        </Link>
      </p>
    </form>
  );
}
