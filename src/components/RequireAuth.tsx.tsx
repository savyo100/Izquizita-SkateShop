// src/components/RequireAuth.tsx
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

type RequireAuthProps = {
  children: ReactNode;
  adminOnly?: boolean;
};

export function RequireAuth({ children, adminOnly = false }: RequireAuthProps) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // Não logado, redireciona para login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (adminOnly && user.papel !== "admin") {
    // Logado mas não é admin, redireciona para home
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
