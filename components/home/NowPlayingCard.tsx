"use client";

import { Music, Radio } from "lucide-react";

import CoverArt from "../CoverArt";
import { useNowPlaying } from "../../context/NowPlayingContext";

export default function NowPlayingCard() {
  const { artist, song } = useNowPlaying();

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="overflow-hidden rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-neutral-900 to-black shadow-2xl">

        <div className="grid gap-8 md:grid-cols-[180px_1fr]">

          {/* Portada */}

          <div className="flex items-center justify-center bg-neutral-950 p-8">

            <CoverArt
              artist={artist}
              song={song}
              size={140}
            />

          </div>

          {/* Información */}

          <div className="flex flex-col justify-center p-10">

            <div className="flex items-center gap-3">

              <Music
                size={26}
                className="text-yellow-400"
              />

              <span className="text-lg font-black uppercase tracking-[3px] text-yellow-400">
                AHORA SUENA
              </span>

            </div>

            <h2 className="mt-8 text-4xl font-black text-white">
              {artist}
            </h2>

            <p className="mt-3 text-2xl text-gray-300">
              {song}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">

              <div className="flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 font-bold">

                <Radio size={18} />

                EN DIRECTO

              </div>

              <span className="text-gray-400">
                Música las 24 horas del día · Calidad 320 kbps
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}