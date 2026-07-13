import { api, withFallback } from "./api";

interface CompleteLoginResponse {
  success: boolean;
  message?: string;
  sessionId?: string;
}

export async function login(payload: { applicationNumber: string; password: string }): Promise<CompleteLoginResponse> {
  return withFallback(
    async () => (await api.post<CompleteLoginResponse>("/auth/login", payload)).data,
    {
      success: false,
      message: "Unable to complete login",
    },
  );
}

export function logout() {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem("auth_token");
  }
}
