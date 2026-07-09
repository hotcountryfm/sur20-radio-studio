"use client";

import { useAudio } from "../context/AudioContext";

export default function PlayerBar() {
  const { playing, toggle } = useAudio();

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-yellow-500/20 bg-neutral-950/95 backdrop-blur-md">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <div>
          <h3 className="text-lg font-bold text-yellow-400">
            🎙 SUR20 RADIO
          </h3>

          <p className="text-sm text-gray-400">
            Emisión en directo · 24 horas
          </p>
        </div>

        <button
          onClick={toggle}
          className="rounded-full bg-red-600 hover:bg-red-700 transition-all duration-300 px-8 py-4 font-bold text-white hover:scale-105"
        >
          {playing ? "⏸ Pausar" : "▶ Escuchar"}
        </button>

      </div>

    </footer>
  );
}