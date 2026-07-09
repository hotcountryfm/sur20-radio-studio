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

        if (data.bitrate) {
          setBitrate(data.bitrate);
        }

        if (data.title) {
          const parts = data.title.split(" - ");

          if (parts.length >= 2) {
            setArtist(parts[0].trim());
            setSong(parts.slice(1).join(" - ").trim());
          } else {
            setArtist(data.title);
            setSong("");
          }
        }
      } catch (error) {
        console.error(error);
        setOnline(false);
      }
    }

    loadSong();

    const interval = setInterval(loadSong, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      <div className="rounded-3xl border border-yellow-500/20 bg-neutral-900/90 backdrop-blur-xl shadow-2xl p-10">

        <div className="flex items-center gap-3 text-red-500 font-bold tracking-widest">

          <span className="h-3 w-3 rounded-full bg-red-500 animate-pulse"></span>

          EN DIRECTO

        </div>

        <p className="mt-8 text-gray-400 text-lg">
          Ahora suena
        </p>

        <h2 className="mt-3 text-5xl font-black text-white">
          {artist}
        </h2>

        <p className="mt-4 text-3xl text-yellow-400">
          {song}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          <div className="rounded-full bg-red-600/20 px-5 py-2 text-red-400 font-semibold">
            📻 SUR20 RADIO
          </div>

          {bitrate && (
            <div className="rounded-full bg-yellow-500/20 px-5 py-2 text-yellow-300 font-semibold">
              🎧 {bitrate} kbps
            </div>
          )}

          <div
            className={`rounded-full px-5 py-2 font-semibold ${
              online
                ? "bg-green-600/20 text-green-400"
                : "bg-gray-600/20 text-gray-400"
            }`}
          >
            {online ? "🟢 Online" : "⚫ Offline"}
          </div>

        </div>

      </div>

    </section>
  );
}