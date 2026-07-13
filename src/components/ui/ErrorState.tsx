import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({ message = "Something went wrong while loading data.", onRetry }: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center rounded-2xl glass glass-border" style={{ boxShadow: "var(--shadow-soft)" }}>
      <div className="h-14 w-14 rounded-2xl bg-destructive/10 grid place-items-center mb-4">
        <AlertCircle className="h-7 w-7 text-destructive" />
      </div>
      <h3 className="text-lg font-semibold">Unable to load</h3>
      <p className="text-sm text-muted-foreground mt-2 max-w-sm">{message}</p>
      {onRetry && (
        <Button variant="outline" className="mt-6 gap-2 rounded-xl" onClick={onRetry}>
          <RefreshCw className="h-4 w-4" />
          Try again
        </Button>
      )}
    </div>
  );
}
