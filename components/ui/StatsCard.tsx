import { ReactNode } from "react";
import GlassCard from "./GlassCard";

interface StatsCardProps {
  icon: ReactNode;
  value: string;
  label: string;
}

export default function StatsCard({
  icon,
  value,
  label,
}: StatsCardProps) {
  return (
    <GlassCard className="flex flex-col items-center justify-center p-8 text-center">

      <div className="mb-4 text-sky-400">
        {icon}
      </div>

      <div className="text-4xl font-extrabold text-white">
        {value}
      </div>

      <div className="mt-2 text-slate-400">
        {label}
      </div>

    </GlassCard>
  );
}