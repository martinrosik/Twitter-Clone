import { create } from "zustand";

interface AuthState {
  userId: string | null;
  username: string | null;
  setAuth: (userId: string | null, username: string | null) => void;
  logout: () => void;
}

function parseJWT(token: string) {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch {
    return null;
  }
}

export const useAuthStore = create<AuthState>((set) => ({
  userId: null,
  username: null,

  setAuth: (userId, username) => set({ userId, username }),

  logout: () => {
    localStorage.removeItem("token");
    set({ userId: null, username: null });
  },
}));

export function initAuth() {
  const token = localStorage.getItem("token");
  if (token) {
    const payload = parseJWT(token);
    if (payload) {
      useAuthStore
        .getState()
        .setAuth(payload.sub, payload.username || payload.email || "User");
    }
  }
}
