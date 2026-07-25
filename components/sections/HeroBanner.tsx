"use client";

import { ReactNode } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface HeroBannerProps {
  badge?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function HeroBanner({
  badge,
  title,
  subtitle,
  children,
}: HeroBannerProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-800">

      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      {/* Luces */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">

        <AnimatedSection>

          {badge && (
            <span className="inline-flex rounded-full border border-sky-500/30 bg-sky-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-sky-300">
              {badge}
            </span>
          )}

          <h1 className="mt-6 text-5xl font-extrabold text-white md:text-7xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {subtitle}
            </p>
          )}

        </AnimatedSection>

        {children && (
          <AnimatedSection delay={0.2} className="mt-16">
            {children}
          </AnimatedSection>
        )}

      </div>
    </section>
  );
}