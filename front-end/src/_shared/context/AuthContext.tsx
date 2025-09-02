import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

interface AuthContextType {
  userId: string | null;
  username: string | null;
  setAuth: (userId: string | null, username: string | null) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  userId: null,
  username: null,
  setAuth: () => {},
  logout: () => {},
});

function parseJWT(token: string) {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [userId, setUserId] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);

  const setAuth = (id: string | null, name: string | null) => {
    setUserId(id);
    setUsername(name);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuth(null, null);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const payload = parseJWT(token);
      if (payload) {
        setAuth(payload.sub, payload.username || payload.email || "User");
      } else {
        setAuth(null, null);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userId, username, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
