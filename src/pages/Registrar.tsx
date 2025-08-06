import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

type FormData = {
  email: string;
  senha: string;
};

const schema = yup.object({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  senha: yup.string().min(6, "Senha deve ter ao menos 6 caracteres").required("Senha é obrigatória"),
}).required();

export default function Registrar() {
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
      await createUserWithEmailAndPassword(auth, data.email, data.senha);
      navigate("/dashboard");
    } catch (error: any) {
      switch (error.code) {
        case "auth/email-already-in-use":
          setError("email", { message: "Esse email já está em uso." });
          break;
        case "auth/invalid-email":
          setError("email", { message: "Email inválido." });
          break;
        case "auth/weak-password":
          setError("senha", { message: "Senha fraca. Use ao menos 6 caracteres." });
          break;
        default:
          alert("Erro ao registrar. Tente novamente.");
      }
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-dark-800 rounded-md text-white shadow-lg">
      <h1 className="text-3xl mb-6 text-neon-green font-bold text-center">Registrar</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <label>
          Email
          <input
            type="email"
            {...register("email")}
            className={`w-full p-2 rounded bg-dark-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
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
            className={`w-full p-2 rounded bg-dark-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
              errors.senha ? "focus:ring-red-500 border border-red-500" : "focus:ring-neon-green"
            }`}
            disabled={isSubmitting}
          />
          {errors.senha && <p className="text-red-500 text-sm mt-1">{errors.senha.message}</p>}
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-neon-green text-black py-3 rounded font-semibold hover:bg-white transition-colors duration-300 disabled:opacity-50"
        >
          {isSubmitting ? "Registrando..." : "Registrar"}
        </button>
      </form>

      <p className="mt-4 text-center text-gray-400">
        Já tem uma conta?{" "}
        <Link to="/login" className="text-neon-green hover:underline">
          Entrar
        </Link>
      </p>
    </div>
  );
}
