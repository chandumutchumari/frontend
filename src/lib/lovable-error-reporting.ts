type CampuSyncErrorOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

type CampuSyncEvents = {
  captureException?: (
    error: unknown,
    context?: Record<string, unknown>,
    options?: CampuSyncErrorOptions,
  ) => void;
};

declare global {
  interface Window {
    __campuSyncEvents?: CampuSyncEvents;
  }
}

export function reportCampuSyncError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.__campuSyncEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );
}
