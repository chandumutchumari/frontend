import type { ReactNode } from "react";

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

function Card({ title, children, className = "" }: CardProps) {
  return (
    <div className={`rounded-2xl border border-border bg-card p-6 shadow-sm ${className}`}>
      {title && <h3 className="text-lg font-semibold mb-4 text-foreground">{title}</h3>}
      {children}
    </div>
  );
}

export default Card;
