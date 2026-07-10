"use client";

import { useEffect, useState } from "react";
import { Music, Radio } from "lucide-react";

export default function NowPlayingCard() {
  const [artist, setArtist] = useState("SUR20 RADIO");
  const [song, setSong] = useState("Tu compañía, tu voz");

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

      <div className="rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-neutral-900 to-black p-10 shadow-2xl">

        <div className="mb-6 flex items-center gap-3">

          <Music className="text-yellow-400" size={28} />

          <h2 className="text-3xl font-black text-yellow-400">
            AHORA SUENA
          </h2>

        </div>

        <h3 className="text-4xl font-black text-white">

          {artist}

        </h3>

        <p className="mt-3 text-2xl text-gray-300">

          {song}

        </p>

        <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-red-600 px-5 py-3 font-bold">

          <Radio size={18} />

          EN EMISIÓN EN DIRECTO

        </div>

      </div>

    </section>
  );
}