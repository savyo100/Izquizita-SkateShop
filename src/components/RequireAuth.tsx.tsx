// src/components/RequireAuth.tsx
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

type RequireAuthProps = {
  children: ReactNode;
  adminOnly?: boolean;
};

export function RequireAuth({ children, adminOnly = false }: RequireAuthProps) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <p>Carregando...</p>;

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (adminOnly && user.papel !== "admin") {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
