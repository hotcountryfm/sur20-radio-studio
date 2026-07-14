"use client";

import { Radio } from "lucide-react";

export default function TuneInFloatingButton() {
  return (
    <a
      href="https://tunein.com/radio/RADIO-SUR-VEINTE-s354977/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escuchar SUR20 RADIO en TuneIn"
      className="fixed bottom-24 right-5 z-50 flex items-center gap-3 rounded-full bg-[#14D860] px-5 py-3 text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(20,216,96,0.45)] active:scale-95"
    >
      <Radio size={22} />

      <span className="hidden font-semibold lg:block">
        Escuchar en TuneIn
      </span>
    </a>
  );
}