"use client";

import { useAudio } from "../context/AudioContext";
import { useEffect, useState } from "react";

export default function PlayerBar() {
  const { playing, toggle } = useAudio();

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
    <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-yellow-500/20 bg-black/90 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/20 text-3xl">
            🎙️
          </div>

          <div>

            <p className="text-xl font-bold text-white">
              {artist}
            </p>

            <p className="text-yellow-400">
              {song}
            </p>

            <div className="mt-2 flex items-center gap-2 text-xs font-bold text-red-400">

              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>

              EN DIRECTO

            </div>

          </div>

        </div>

        {/* Botón */}

        <button
          onClick={toggle}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-3xl shadow-xl transition hover:scale-110 hover:bg-red-700"
        >
          {playing ? "⏸" : "▶"}
        </button>

      </div>

    </footer>
  );
}