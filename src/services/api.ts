import axios from "axios";

// Base URL for future REST APIs. Configure via VITE_API_BASE_URL.
const baseURL = import.meta.env.VITE_API_BASE_URL ?? "https://campusync-backend-production.up.railway.app/api";

export const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = window.localStorage.getItem("auth_token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Helper that resolves with placeholder data if the API is unreachable.
export async function withFallback<T>(call: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await call();
  } catch {
    return fallback;
  }
}
