import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingMap = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function GlassCard({ children, className, hover = false, delay = 0, padding = "md" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "rounded-2xl glass glass-border",
        paddingMap[padding],
        hover && "card-hover cursor-pointer",
        className,
      )}
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      {children}
    </motion.div>
  );
}
