import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

type PrivateRouteProps = {
  children: ReactNode;
  adminOnly?: boolean; // por padrão só usuário autenticado, adminOnly=true libera só admin
};

export default function PrivateRoute({ children, adminOnly = false }: PrivateRouteProps) {
  const { user, papel, loading } = useAuth();

  if (loading) {
    // Pode colocar um loader enquanto verifica
    return <div>Carregando...</div>;
  }

  if (!user) {
    // Não autenticado: redireciona para login
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && papel !== "admin") {
    // Usuário não é admin, bloqueia acesso
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
