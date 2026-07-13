import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { TrendingDown, TrendingUp } from "lucide-react";

interface Props {
  icon: LucideIcon;
  label: string;
  value: string | number;
  hint?: string;
  delay?: number;
  trend?: number;
  accent?: "default" | "success" | "warning";
}

const accentStyles = {
  default: "var(--gradient-primary)",
  success: "linear-gradient(135deg, oklch(0.55 0.17 150), oklch(0.7 0.17 150))",
  warning: "linear-gradient(135deg, oklch(0.65 0.16 75), oklch(0.78 0.16 75))",
};

function AnimatedNumber({ value }: { value: string | number }) {
  const num = typeof value === "number" ? value : parseFloat(String(value).replace(/[^0-9.]/g, ""));
  const isNumeric = !isNaN(num) && typeof value === "number" || (!isNaN(num) && /^[\d.]+/.test(String(value)));

  const spring = useSpring(0, { stiffness: 80, damping: 20 });
  const display = useTransform(spring, (v) => {
    if (!isNumeric) return String(value);
    const prefix = String(value).match(/^[^0-9]*/)?.[0] ?? "";
    const suffix = String(value).match(/[^0-9.]*$/)?.[0] ?? "";
    const decimals = String(value).includes(".") ? (String(value).split(".")[1]?.length ?? 0) : 0;
    return `${prefix}${v.toFixed(decimals)}${suffix}`;
  });

  useEffect(() => {
    if (isNumeric) spring.set(num);
  }, [num, isNumeric, spring]);

  if (!isNumeric) return <>{value}</>;
  return <motion.span>{display}</motion.span>;
}

export function StatCard({ icon: Icon, label, value, hint, delay = 0, trend, accent = "default" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative rounded-2xl glass glass-border p-5 card-hover overflow-hidden"
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
           style={{ background: "radial-gradient(circle at top right, oklch(0.55 0.2 255 / 0.06), transparent 60%)" }} />
      <div className="relative flex items-start justify-between">
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">{label}</p>
          <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">
            <AnimatedNumber value={value} />
          </p>
          {hint && <p className="mt-1.5 text-xs text-muted-foreground">{hint}</p>}
          {trend !== undefined && (
            <div className={cn("flex items-center gap-1 mt-2 text-xs font-medium", trend >= 0 ? "text-emerald-600 dark:text-emerald-400" : "text-red-500")}>
              {trend >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {Math.abs(trend)}% vs last term
            </div>
          )}
        </div>
        <div
          className="h-11 w-11 grid place-items-center rounded-xl shrink-0 text-primary-foreground shadow-sm"
          style={{ background: accentStyles[accent] }}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </motion.div>
  );
}
