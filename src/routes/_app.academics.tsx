import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/academics")({
  component: () => <Outlet />,
});
