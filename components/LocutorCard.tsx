"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Radio } from "lucide-react";

import { Locutor } from "@/data/locutores";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";

interface Props {
  locutor: Locutor;
}

export default function LocutorCard({ locutor }: Props) {
  return (
    <AnimatedSection>
      <GlassCard className="group overflow-hidden">

        {/* Imagen */}
        <div className="relative h-80 overflow-hidden">
          <Image
            src={locutor.imagen}
            alt={locutor.nombre}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

          <div className="absolute bottom-5 left-5">
            <span className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg">
              {locutor.programa}
            </span>
          </div>
        </div>

        {/* Contenido */}
        <div className="space-y-5 p-6">

          <div>
            <h2 className="text-2xl font-bold text-white">
              {locutor.bandera} {locutor.nombre}
            </h2>

            <div className="mt-3 flex items-center gap-2 text-slate-400">
              <MapPin className="h-4 w-4 text-sky-400" />
              <span>
                {locutor.ciudad}, {locutor.pais}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-sky-500/20 bg-sky-500/10 px-4 py-3 text-sky-300">
            <Radio className="h-5 w-5" />
            <span>{locutor.programa}</span>
          </div>

          <p className="leading-7 text-slate-300">
            {locutor.descripcion}
          </p>

          <Link
            href={locutor.urlPrograma}
            className="inline-flex w-full items-center justify-center rounded-xl bg-sky-500 px-6 py-3 font-semibold text-slate-950 transition-all duration-300 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/30"
          >
            Ver programa
          </Link>

        </div>

      </GlassCard>
    </AnimatedSection>
  );
}