"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Music, Radio } from "lucide-react";
import { STATION } from "../../lib/constants";

export default function NowPlayingCard() {
  const [artist, setArtist] = useState(STATION.name);
  const [song, setSong] = useState(STATION.tagline);

  useEffect(() => {
    async function loadSong() {
      try {
        const res = await fetch("/api/now-playing", {
          cache: "no-store",
        });

        const data = await res.json();

        if (data.artist) setArtist(data.artist);
        if (data.song) setSong(data.song);
      } catch (error) {
        console.error(error);
      }
    }

    loadSong();

    const interval = setInterval(loadSong, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="overflow-hidden rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-neutral-900 to-black shadow-2xl">

        <div className="grid md:grid-cols-[140px_1fr]">

          {/* Imagen */}

          <div className="flex items-center justify-center bg-neutral-950 p-8">

            <Image
              src="/logo.png"
              alt={STATION.name}
              width={110}
              height={110}
              className="drop-shadow-[0_0_20px_rgba(234,179,8,.35)]"
            />

          </div>

          {/* Información */}

          <div className="p-10">

            <div className="flex items-center gap-3">

              <Music
                size={26}
                className="text-yellow-400"
              />

              <span className="text-lg font-black uppercase tracking-[3px] text-yellow-400">
                Ahora Suena
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

                Escúchanos las 24 horas del día.

              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}