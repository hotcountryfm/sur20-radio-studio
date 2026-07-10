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
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black"></div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">

        <div className="mb-8 flex items-center gap-3 rounded-full border border-red-500/40 bg-red-600/20 px-5 py-2">

          <span className="h-3 w-3 rounded-full bg-red-500 animate-pulse"></span>

          <span className="font-bold tracking-widest text-red-400">
            EMISIÓN EN DIRECTO
          </span>

        </div>

        <Image
          src="/logo.png"
          alt="SUR20 Radio"
          width={280}
          height={280}
          priority
          className={`transition-all duration-700 ${
            playing
              ? "scale-105 drop-shadow-[0_0_60px_rgba(255,215,0,0.8)]"
              : "drop-shadow-[0_0_30px_rgba(255,215,0,0.35)]"
          }`}
        />

        <h1 className="mt-8 text-5xl md:text-7xl font-black">
          TU COMPAÑÍA, TU VOZ
        </h1>

        <p className="mt-6 max-w-3xl text-lg md:text-2xl text-gray-300">
          La mejor música de los años 80, 90 y 2000.
          Emisión ininterrumpida las 24 horas.
        </p>

        <div className="mt-10 flex flex-col gap-5 md:flex-row">

          <button
            onClick={toggle}
            className={`rounded-full px-10 py-5 text-xl font-bold transition-all duration-300 shadow-2xl ${
              playing
                ? "bg-green-600 hover:bg-green-700"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {playing ? "⏸ PAUSAR EMISIÓN" : "▶ ESCUCHAR EN DIRECTO"}
          </button>

          <Link
            href="/programacion"
            className="rounded-full border-2 border-yellow-400 px-10 py-5 text-xl font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
          >
            PROGRAMACIÓN
          </Link>

        </div>

      </div>
    </section>
  );
}