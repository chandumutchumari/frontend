import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "type"> {
  to?: string;
  label: string;
  icon: LucideIcon;
  description?: string;
  badge?: ReactNode;
  asButton?: boolean;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}

export function QuickActionCard({
  to,
  label,
  icon: Icon,
  description,
  badge,
  asButton,
  buttonProps,
  className: classNameProp,
  ...restButtonProps
}: Props) {
  const className = cn(
    "group relative flex h-full w-full cursor-pointer flex-col items-center justify-center gap-2.5 p-2.5 sm:p-3 md:p-4 rounded-xl border border-border/60 min-h-[44px]",
    "bg-background/50 hover:bg-primary/5 hover:border-primary/30 transition-all duration-200",
    buttonProps?.className,
    classNameProp,
  );

  const content = (
    <>
      {badge ? (
        <span className="roommates-badge absolute right-3 top-3 inline-flex items-center justify-center px-2.5 py-1 text-[10px] font-bold text-white">
          {badge}
        </span>
      ) : null}
      <div
        className="h-11 w-11 md:h-10 md:w-10 grid place-items-center rounded-xl text-primary-foreground group-hover:scale-105 transition-transform"
        style={{ background: "var(--gradient-primary)" }}
      >
        <Icon className="h-4 w-4" />
      </div>
      <div className="text-center">
        <p className="text-sm font-medium">{label}</p>
        {description && <p className="text-[10px] text-muted-foreground mt-0.5">{description}</p>}
      </div>
    </>
  );

  if (asButton) {
    return (
      <button type="button" className={className} {...restButtonProps} {...(buttonProps ?? {})}>
        {content}
      </button>
    );
  }

  if (!to) {
    throw new Error("QuickActionCard requires a 'to' prop when not rendered as a button.");
  }

  return (
    <Link to={to} className={className}>
      {content}
    </Link>
  );
}
