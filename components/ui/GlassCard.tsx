import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-white/10
        bg-slate-900/70
        backdrop-blur-md
        shadow-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-sky-500/50
        hover:shadow-sky-500/20
        ${className}
      `}
    >
      {children}
    </div>
  );
}