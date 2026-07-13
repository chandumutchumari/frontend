export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "/api";
export const APP_NAME = "Student Dashboard";
export const TOKEN_STORAGE_KEY = "auth_token";

export const ROUTES = {
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
  PROFILE: "/profile",
  ACADEMICS: "/academics",
  EXAMINATION: "/examinations",
  FEEDBACK: "/feedback",
} as const;
