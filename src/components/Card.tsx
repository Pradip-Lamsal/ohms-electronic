import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/10 ${className}`}
    >
      {children}
    </div>
  );
}
