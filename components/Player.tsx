"use client";

import { useAudio } from "@/context/AudioContext";

export default function Player() {
  const { playing, toggle } = useAudio();

  return (
    <button
      onClick={toggle}
      className="mt-10 bg-red-600 hover:bg-red-700 transition-all duration-300 px-10 py-5 rounded-full text-xl font-bold shadow-xl hover:scale-105"
    >
      {playing ? "⏸️ Pausar emisión" : "▶ Escuchar en Directo"}
    </button>
  );
}