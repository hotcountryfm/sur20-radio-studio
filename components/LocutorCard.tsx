"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";

interface Locutor {
  id: number;
  nombre: string;
  slug: string;
  foto: string | null;
  ciudad: string | null;
  pais: string | null;
  bandera: string | null;
  programa: string | null;
  biografia: string | null;
}

interface Props {
  locutor: Locutor;
}

export default function LocutorCard({ locutor }: Props) {
  return (
    <AnimatedSection>
      <GlassCard className="group overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-sky-500/20">

        <Link href={`/locutores/${locutor.slug}`}>

          {/* FOTO */}
          <div className="relative h-[430px] overflow-hidden bg-gradient-to-b from-slate-900 to-black">

            <Image
             src={locutor.foto || "/default-locutor.png"}
              alt={locutor.nombre}
              fill
              sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
              className="object-contain p-3 transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

            {(locutor.bandera || locutor.ciudad) && (
              <div className="absolute left-5 top-5 rounded-full bg-sky-500/90 px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-950 backdrop-blur">
                {locutor.bandera} {locutor.ciudad}
              </div>
            )}

          </div>

          {/* CONTENIDO */}
          <div className="space-y-5 p-7">

            <div>

              <h2 className="text-3xl font-extrabold text-white transition-colors group-hover:text-sky-400">
                {locutor.nombre}
              </h2>

              <div className="mt-3 flex items-center gap-2 text-slate-400">

                <MapPin className="h-4 w-4 text-sky-400" />

                <span>
                  {locutor.ciudad}
                  {locutor.ciudad && locutor.pais ? ", " : ""}
                  {locutor.pais}
                </span>

              </div>

            </div>

            {locutor.programa && (
              <div className="rounded-xl border border-sky-500/20 bg-sky-500/10 p-4">

                <p className="text-sm uppercase tracking-widest text-sky-300">
                  Programa
                </p>

                <h3 className="mt-1 text-lg font-semibold text-white">
                  {locutor.programa}
                </h3>

              </div>
            )}

            <p className="line-clamp-4 leading-7 text-slate-300">
              {locutor.biografia}
            </p>

            <div className="flex items-center justify-between rounded-xl bg-sky-500 px-5 py-4 font-semibold text-slate-950 transition-all duration-300 group-hover:bg-sky-400">

              <span>Conocer al locutor</span>

              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />

            </div>

          </div>

        </Link>

      </GlassCard>
    </AnimatedSection>
  );
}