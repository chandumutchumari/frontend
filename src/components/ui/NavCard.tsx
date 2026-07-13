import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  to: string;
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
  className?: string;
}

export function NavCard({ to, title, description, icon: Icon, delay = 0, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
    >
      <Link
        to={to}
        className={cn(
          "group relative block rounded-2xl glass glass-border p-6 card-hover overflow-hidden",
          className,
        )}
        style={{ boxShadow: "var(--shadow-soft)" }}
      >
        <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-[0.06] -translate-y-1/2 translate-x-1/2"
             style={{ background: "var(--gradient-primary)" }} />
        <div className="flex items-start justify-between">
          <div
            className="h-12 w-12 grid place-items-center rounded-xl text-primary-foreground shrink-0"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Icon className="h-5 w-5" />
          </div>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <h3 className="mt-4 font-semibold text-base">{title}</h3>
        <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{description}</p>
      </Link>
    </motion.div>
  );
}
