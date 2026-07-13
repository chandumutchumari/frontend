import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

interface AuthCtx {
  token: string | null;
  setToken: (t: string | null) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const Ctx = createContext<AuthCtx | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setTokenState] = useState<string | null>(null);

  useEffect(() => {
    const t = typeof window !== "undefined" ? window.localStorage.getItem("auth_token") : null;
    if (t) setTokenState(t);
  }, []);

  const setToken = useCallback((t: string | null) => {
    setTokenState(t);
    if (typeof window !== "undefined") {
      if (t) window.localStorage.setItem("auth_token", t);
      else window.localStorage.removeItem("auth_token");
    }
  }, []);

  const logout = useCallback(() => setToken(null), [setToken]);

  return (
    <Ctx.Provider value={{ token, setToken, logout, isAuthenticated: !!token }}>
      {children}
    </Ctx.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
