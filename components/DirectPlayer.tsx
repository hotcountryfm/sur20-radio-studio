"use client";

import { useAudio } from "@/context/AudioContext";
import NowPlaying from "@/components/NowPlaying";
import { Play, Pause, Radio } from "lucide-react";

export default function DirectPlayer() {
  const { playing, toggle } = useAudio();

  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-yellow-500/20 bg-neutral-900 p-8 shadow-2xl">

      <div className="mb-6 flex items-center justify-center gap-2">
        <Radio className="h-5 w-5 text-red-500 animate-pulse" />
        <span className="font-bold uppercase tracking-widest text-red-500">
          EN DIRECTO
        </span>
      </div>

      <div className="mb-8">
        <NowPlaying />
      </div>

      <button
        onClick={toggle}
        className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400 text-black transition hover:scale-110"
      >
        {playing ? (
          <Pause size={36} />
        ) : (
          <Play size={36} className="ml-1" />
        )}
      </button>

      <p className="mt-6 text-center text-gray-400">
        {playing
          ? "SUR20 RADIO está sonando."
          : "Pulsa para escuchar SUR20 RADIO en directo."}
      </p>
    </div>
  );
}