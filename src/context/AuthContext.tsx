import React, { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase"; // ← Aqui você já exporta db no firebase.ts

interface AuthContextProps {
  user: User | null;
  papel: string | null; // ← adicionamos aqui
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [papel, setPapel] = useState<string | null>(null); // ← novo estado
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
        console.log("👤 UID do usuário logado:", firebaseUser?.uid); // 👈 Adicione aqui
      setUser(firebaseUser);
      setLoading(false);

      if (firebaseUser) {
        try {
          const docRef = doc(db, "usuario", firebaseUser.uid); // ← busca o documento com UID
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            setPapel(data.papel || null);
            console.log("Papel do usuário:", data.papel);
          } else {
            console.warn("Documento do usuário não existe");
            setPapel(null);
          }
        } catch (err) {
          console.error("Erro ao buscar papel do usuário:", err);
          setPapel(null);
        }
      } else {
        setPapel(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };
console.log("🔐 UID autenticado:", user?.uid);
  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setPapel(null);
  };

  return (
    <AuthContext.Provider value={{ user, papel, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
