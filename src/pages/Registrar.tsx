import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

type RegisterFormData = {
  email: string;
  senha: string;
};

export default function Registrar() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<RegisterFormData>();

  async function onSubmit(data: RegisterFormData) {
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
    <div className="max-w-md mx-auto mt-20 p-6 bg-dark-800 dark:bg-dark-800 bg-white rounded-md text-white dark:text-white text-gray-800 shadow-lg">
      <h1 className="text-3xl mb-6 text-neon-green font-bold text-center">Registrar</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <label>
          Email
          <input
            type="email"
            {...register("email", { required: "Email é obrigatório", pattern: { value: /^\S+@\S+$/i, message: "Email inválido" } })}
            className={`w-full p-2 rounded bg-dark-700 dark:bg-dark-700 bg-gray-100 text-white dark:text-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
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
            {...register("senha", { required: "Senha é obrigatória", minLength: { value: 6, message: "Senha deve ter ao menos 6 caracteres" } })}
            className={`w-full p-2 rounded bg-dark-700 dark:bg-dark-700 bg-gray-100 text-white dark:text-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
              errors.senha ? "focus:ring-red-500 border border-red-500" : "focus:ring-neon-green"
            }`}
            disabled={isSubmitting}
          />
          {errors.senha && <p className="text-red-500 text-sm mt-1">{errors.senha.message}</p>}
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-neon-green text-black py-3 rounded font-semibold hover:bg-white dark:hover:bg-white hover:bg-gray-100 transition-colors duration-300 disabled:opacity-50"
        >
          {isSubmitting ? "Registrando..." : "Registrar"}
        </button>
      </form>

      <p className="mt-4 text-center text-gray-400 dark:text-gray-400 text-gray-600">
        Já tem uma conta?{" "}
        <Link to="/login" className="text-neon-green hover:underline">
          Entrar
        </Link>
      </p>
    </div>
  );
}
