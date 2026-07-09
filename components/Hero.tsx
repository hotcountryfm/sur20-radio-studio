"use client";

import Image from "next/image";
import Link from "next/link";
import { useAudio } from "../context/AudioContext";

export default function Hero() {
  const { playing, toggle } = useAudio();

  return (
    <section
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Fondo oscuro */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Degradado */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black"></div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">

        <span className="mb-6 rounded-full border border-red-500 bg-red-600/20 px-5 py-2 text-sm font-bold tracking-widest text-red-400">
          🔴 EN DIRECTO
        </span>

        <Image
          src="/logo.png"
          alt="SUR20 Radio"
          width={280}
          height={280}
          priority
          className="drop-shadow-[0_0_50px_rgba(255,210,0,0.45)] transition duration-500 hover:scale-105"
        />

        <h1 className="mt-8 text-5xl md:text-7xl font-black tracking-wide">
          TU COMPAÑÍA, TU VOZ
        </h1>

        <p className="mt-6 max-w-3xl text-lg md:text-2xl text-gray-300">
          La mejor música de los años 80, 90 y 2000.
          Emisión en directo las 24 horas.
        </p>

        <div className="mt-10 flex flex-col gap-5 md:flex-row">

          <button
            onClick={toggle}
            className="rounded-full bg-red-600 hover:bg-red-700 transition-all duration-300 px-10 py-5 text-xl font-bold shadow-2xl hover:scale-105"
          >
            {playing ? "⏸ Pausar Emisión" : "▶ Escuchar en Directo"}
          </button>

          <Link
            href="/programacion"
            className="rounded-full border-2 border-yellow-400 px-10 py-5 text-xl font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
          >
            Programación
          </Link>

        </div>

      </div>
    </section>
  );
}