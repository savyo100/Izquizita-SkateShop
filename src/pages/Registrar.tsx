// Importa o componente Link e o hook useNavigate do React Router para navegação entre páginas
import { Link, useNavigate } from "react-router-dom";

// Importa o hook useForm do react-hook-form para manipulação de formulários de forma simplificada
import { useForm } from "react-hook-form";

// Importa a função do Firebase para criar um usuário com email e senha
import { createUserWithEmailAndPassword } from "firebase/auth";

// Importa a instância de autenticação configurada do Firebase
import { auth } from "../firebase";

// Define o tipo dos dados do formulário para validação com TypeScript
type RegisterFormData = {
  email: string;
  senha: string;
};

// Componente principal da página de registro
export default function Registrar() {
  // Hook do React Router para redirecionar o usuário após o registro
  const navigate = useNavigate();

  // Hook do react-hook-form para gerenciar formulário, erros e estado de envio
  const {
    register,          // função para registrar os campos do formulário
    handleSubmit,      // função que trata o envio do formulário
    formState: { errors, isSubmitting }, // estados do formulário: erros e se está enviando
    setError,          // função para definir erros manualmente
  } = useForm<RegisterFormData>();

  // Função assíncrona chamada quando o formulário é enviado
  async function onSubmit(data: RegisterFormData) {
    try {
      // Cria um usuário no Firebase com email e senha
      await createUserWithEmailAndPassword(auth, data.email, data.senha);

      // Redireciona para o dashboard após sucesso
      navigate("/dashboard");
    } catch (error: any) {
      // Tratamento de erros específicos do Firebase
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

  // JSX da página de registro
  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-dark-800 dark:bg-dark-800 bg-white rounded-md text-black dark:text-white text-gray-800 shadow-lg">
      {/* Título da página */}
      <h1 className="text-3xl mb-6 text-neon-green font-bold text-center">Registrar</h1>

      {/* Formulário de registro */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Campo de Email */}
        <label>
          Email
          <input
            type="email"
            {...register("email", {
              required: "Email é obrigatório", // validação obrigatória
              pattern: { value: /^\S+@\S+$/i, message: "Email inválido" } // validação de formato
            })}
            className={`w-full p-2 rounded bg-dark-700 dark:bg-dark-700 bg-gray-100 text-black dark:text-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
              errors.email ? "focus:ring-red-500 border border-red-500" : "focus:ring-neon-green"
            }`}
            disabled={isSubmitting} // desativa o campo durante o envio
          />
          {/* Exibe mensagem de erro se houver */}
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </label>

        {/* Campo de Senha */}
        <label>
          Senha
          <input
            type="password"
            {...register("senha", {
              required: "Senha é obrigatória", // validação obrigatória
              minLength: { value: 6, message: "Senha deve ter ao menos 6 caracteres" } // validação de tamanho mínimo
            })}
            className={`w-full p-2 rounded bg-dark-700 dark:bg-dark-700 bg-gray-100 text-black dark:text-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
              errors.senha ? "focus:ring-red-500 border border-red-500" : "focus:ring-neon-green"
            }`}
            disabled={isSubmitting} // desativa o campo durante o envio
          />
          {/* Exibe mensagem de erro se houver */}
          {errors.senha && <p className="text-red-500 text-sm mt-1">{errors.senha.message}</p>}
        </label>

        {/* Botão de envio */}
        <button
          type="submit"
          disabled={isSubmitting} // desativa o botão durante o envio
          className="bg-neon-green text-black py-3 rounded font-semibold hover:bg-green-600 dark:hover:bg-white hover:bg-gray-100 transition-colors duration-300 disabled:opacity-50"
        >
          {isSubmitting ? "Registrando..." : "Registrar"} {/* Texto dinâmico */}
        </button>
      </form>

      {/* Link para a página de login */}
      <p className="mt-4 text-center text-gray-400 dark:text-gray-400 text-gray-600">
        Já tem uma conta?{" "}
        <Link to="/login" className="text-neon-green hover:underline">
          Entrar
        </Link>
      </p>
    </div>
  );
}
