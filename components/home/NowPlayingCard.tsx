"use client";

import Link from "next/link";
import { Music, Radio, Play, Calendar } from "lucide-react";

import CoverArt from "../CoverArt";
import { useNowPlaying } from "../../context/NowPlayingContext";

export default function NowPlayingCard() {
  const { artist, song } = useNowPlaying();

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-neutral-900 via-black to-neutral-950 shadow-2xl">

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="relative grid gap-10 md:grid-cols-[220px_1fr]">
          <div className="flex items-center justify-center bg-black/30 p-8">
            <CoverArt
              artist={artist}
              song={song}
              size={180}
            />
          </div>

          <div className="flex flex-col justify-center p-10 lg:p-14">

            <div className="flex flex-wrap items-center gap-4">

              <div className="flex items-center gap-2 rounded-full border border-red-500/30 bg-red-600 px-5 py-2 font-bold text-white shadow-lg shadow-red-500/20">
                <span className="h-3 w-3 animate-pulse rounded-full bg-white" />

                <Radio size={16} />

                EN DIRECTO
              </div>

              <div className="flex items-center gap-2 text-yellow-400">
                <Music size={20} />
                <span className="text-sm font-bold uppercase tracking-[4px]">
                  Ahora suena
                </span>
              </div>
            </div>

            <h2 className="mt-8 text-4xl font-black leading-tight text-white lg:text-5xl">
              {artist}
            </h2>

            <p className="mt-4 text-2xl text-neutral-300">
              {song}
            </p>

            <p className="mt-6 max-w-2xl text-neutral-400">
              Disfruta de la mejor selección musical de los años 80, 90 y 2000
              durante las 24 horas del día con la mejor calidad de sonido.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/directo"
                className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-7 py-4 font-bold text-black transition hover:scale-105"
              >
                <Play size={18} />
                Escuchar ahora
              </Link>

              <Link
                href="/programacion"
                className="inline-flex items-center gap-2 rounded-full border border-yellow-400 px-7 py-4 font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
              >
                <Calendar size={18} />
                Ver programación
              </Link>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}