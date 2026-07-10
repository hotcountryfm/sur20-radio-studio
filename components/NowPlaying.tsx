"use client";

import { useEffect, useState } from "react";

export default function NowPlaying() {
  const [artist, setArtist] = useState("Cargando...");
  const [song, setSong] = useState("");
  const [bitrate, setBitrate] = useState<number | null>(null);
  const [online, setOnline] = useState(false);

  useEffect(() => {
    async function loadSong() {
      try {
        const res = await fetch("/api/now-playing", {
          cache: "no-store",
        });

        const data = await res.json();

        setOnline(data.online);

        if (data.artist) setArtist(data.artist);
        if (data.song) setSong(data.song);
        if (data.bitrate) setBitrate(data.bitrate);

      } catch (error) {
        console.error(error);
      }
    }

    loadSong();

    const interval = setInterval(loadSong, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-14">

      <div className="rounded-3xl border border-yellow-500/20 bg-neutral-900/90 backdrop-blur-xl shadow-2xl p-8">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <span className="h-3 w-3 rounded-full bg-red-500 animate-pulse"></span>

            <span className="font-bold tracking-widest text-red-400">
              EN DIRECTO
            </span>

          </div>

          {online && (
            <span className="rounded-full bg-green-600/20 px-4 py-1 text-sm font-bold text-green-400">
              ONLINE
            </span>
          )}

        </div>

        <p className="mt-8 text-gray-500 uppercase tracking-[4px]">
          Ahora suena
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-black text-white">
          {artist}
        </h2>

        <p className="mt-3 text-2xl text-yellow-400">
          {song}
        </p>

        <div className="mt-8 flex items-center gap-4">

          <div className="rounded-full bg-red-600/20 px-4 py-2 text-red-400 font-semibold">
            📻 SUR20 RADIO
          </div>

          {bitrate && (
            <div className="rounded-full bg-yellow-500/20 px-4 py-2 text-yellow-300 font-semibold">
              🎧 {bitrate} kbps
            </div>
          )}

        </div>

      </div>

    </section>
  );
}