"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Pause, Play, Radio, Volume2 } from "lucide-react";
import { useAudio } from "../context/AudioContext";
import { STATION } from "../lib/constants";

export default function PlayerBar() {
  const { playing, toggle, volume, setVolume } = useAudio();

  const [artist, setArtist] = useState("SUR20 RADIO");
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
    <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-yellow-500/20 bg-black/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">

        {/* Logo + información */}
        <div className="flex min-w-0 items-center gap-4">

          <div className="overflow-hidden rounded-2xl border border-yellow-500/20 shadow-lg">
            <Image
              src="/logo.png"
              alt={STATION.name}
              width={68}
              height={68}
              priority
            />
          </div>

          <div className="min-w-0">

            <div className="text-xs font-bold uppercase tracking-[3px] text-yellow-400">
              {STATION.name}
            </div>

            <h3 className="truncate text-lg font-bold text-white">
              {artist}
            </h3>

            <p className="truncate text-yellow-300">
              {song}
            </p>

            <div className="mt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400">
              <Radio size={14} />
              EN DIRECTO
            </div>

          </div>

        </div>

        {/* Controles */}
        <div className="flex items-center gap-6">

          <div className="hidden items-center gap-3 md:flex">

            <Volume2 size={20} className="text-yellow-400" />

            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-32 accent-yellow-400"
            />

          </div>

          <button
            onClick={toggle}
            className={`flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 shadow-xl ${
              playing
                ? "bg-green-600 hover:bg-green-700"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {playing ? (
              <Pause size={30} />
            ) : (
              <Play size={30} className="ml-1" />
            )}
          </button>

        </div>

      </div>
    </footer>
  );
}