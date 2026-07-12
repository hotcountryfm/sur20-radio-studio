"use client";

import Image from "next/image";
import { Pause, Play, Radio, Volume2 } from "lucide-react";

import { useAudio } from "../context/AudioContext";
import { useNowPlaying } from "../context/NowPlayingContext";
import { STATION } from "../lib/constants";

export default function PlayerBar() {
  const { playing, toggle, volume, setVolume } = useAudio();
  const { artist, song } = useNowPlaying();

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-yellow-500/20 bg-black/85 backdrop-blur-xl shadow-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">

        {/* Logo + Información */}

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

              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>

              <Radio size={14} />

              EN DIRECTO

            </div>

          </div>

        </div>

        {/* Controles */}

        <div className="flex items-center gap-6">

          <div className="hidden md:flex items-center gap-3">

            <Volume2
              size={20}
              className="text-yellow-400"
            />

            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) =>
                setVolume(Number(e.target.value))
              }
              className="w-32 accent-yellow-400"
            />

          </div>

          <button
            onClick={toggle}
            className={`flex h-16 w-16 items-center justify-center rounded-full shadow-xl transition-all duration-300 hover:scale-110 ${
              playing
                ? "bg-green-600 hover:bg-green-700"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {playing ? (
              <Pause size={30} />
            ) : (
              <Play
                size={30}
                className="ml-1"
              />
            )}
          </button>

        </div>

      </div>
    </footer>
  );
}