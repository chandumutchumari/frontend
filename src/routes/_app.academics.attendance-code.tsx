import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { KeyRound, Loader2, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/services/api";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/academics/attendance-code")({
  head: () => ({ meta: [{ title: "Attendance Code — campuSync" }] }),
  component: AttendanceCodePage,
});

function AttendanceCodePage() {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!code.trim()) {
      setStatus("Please enter an attendance code.");
      toast.error("Please enter an attendance code.");
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const { data } = await api.post("/academics/attendance-code", { code: code.trim() });
      const msg = data?.message || "Attendance code submitted.";
      setStatus(msg);
      toast.success(msg);
      setCode("");
    } catch {
      const msg = "Unable to submit attendance code right now.";
      setStatus(msg);
      toast.error(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const { data } = await api.get("/profile");
        const isAuth = data && data.source === "playwright-session" && data.sessionId;
        if (mounted) setAuthenticated(Boolean(isAuth));
      } catch {
        if (mounted) setAuthenticated(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div>
      <PageHeader title="Attendance Code" subtitle="Submit the attendance code displayed in your classroom." />

      <GlassCard className="max-w-lg">
        <div className="flex items-center gap-3 mb-6">
          <div
            className="h-12 w-12 rounded-xl grid place-items-center text-primary-foreground"
            style={{ background: "var(--gradient-primary)" }}
          >
            <KeyRound className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold">Submit Code</h3>
            <p className="text-xs text-muted-foreground">Enter the code shown by your faculty</p>
          </div>
        </div>

        {authenticated === false ? (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <p className="text-sm text-amber-700 dark:text-amber-300">
                You need to be logged into the student portal to submit an attendance code.
              </p>
            </div>
            <Button asChild className="rounded-xl" style={{ background: "var(--gradient-primary)" }}>
              <Link to="/login">Login to Portal</Link>
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="attendance-code" className="block text-sm font-medium mb-2">
                Attendance Code
              </label>
              <Input
                id="attendance-code"
                value={code}
                onChange={(event) => setCode(event.target.value)}
                placeholder="Enter code"
                className="h-12 rounded-xl text-center text-lg font-mono tracking-widest uppercase bg-background/60"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-11 rounded-xl font-semibold gap-2"
              style={{ background: "var(--gradient-primary)" }}
            >
              {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <ShieldCheck className="h-4 w-4" />}
              {isSubmitting ? "Submitting…" : "Submit Code"}
            </Button>
            {status && (
              <p className={cn("text-sm text-center p-3 rounded-xl", status.includes("Unable") ? "bg-destructive/10 text-destructive" : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400")}>
                {status}
              </p>
            )}
          </form>
        )}
      </GlassCard>
    </div>
  );
}
