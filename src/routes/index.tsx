import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    const token =
      typeof window !== "undefined" ? window.localStorage.getItem("auth_token") : null;
    throw redirect({ to: token ? "/dashboard" : "/login" });
  },
  component: () => null,
});
