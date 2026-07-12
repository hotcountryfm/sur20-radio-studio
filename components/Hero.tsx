"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Radio, Play } from "lucide-react";
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
      {/* Oscurecer fondo */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Degradado */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black" />

      {/* Partículas */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-yellow-500 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-red-600 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        {/* En directo */}

        <div className="mb-8 flex items-center gap-3 rounded-full border border-red-500/40 bg-red-600/15 px-5 py-2 backdrop-blur">

          <span className="h-3 w-3 rounded-full bg-red-500 animate-pulse"></span>

          <Radio size={18} className="text-red-400" />

          <span className="font-bold tracking-[3px] text-red-400">
            EMISIÓN EN DIRECTO
          </span>

        </div>

        {/* Logo */}

        <div className="relative">

          {/* Halo */}

          <motion.div
            animate={{
              scale: playing ? [1, 1.2, 1] : [1, 1.05, 1],
              opacity: playing ? [0.4, 0.8, 0.4] : [0.25, 0.35, 0.25],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="absolute inset-0 rounded-full bg-yellow-400 blur-[60px]"
          />

          {/* Onda */}

          <motion.div
            animate={{
              scale: playing ? [1, 1.4, 1] : [1, 1.1, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute inset-0 rounded-full border border-yellow-400"
          />

          {/* Logo */}

          <motion.div
            animate={{
              scale: playing ? [1, 1.04, 1] : 1,
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
            }}
            className="relative"
          >
            <Image
              src="/logo.png"
              alt="SUR20 Radio"
              width={280}
              height={280}
              priority
              className="drop-shadow-[0_0_45px_rgba(234,179,8,.6)]"
            />
          </motion.div>

        </div>

        {/* Texto */}

        <h1 className="mt-10 text-5xl font-black md:text-7xl">

          TU COMPAÑÍA

          <span className="block text-yellow-400">
            TU VOZ
          </span>

        </h1>

        <p className="mt-6 max-w-3xl text-lg text-gray-300 md:text-2xl">

          La mejor música de los años 80, 90 y 2000.

          <br />

          Emisión ininterrumpida durante las 24 horas.

        </p>

        {/* Botones */}

        <div className="mt-12 flex flex-col gap-5 md:flex-row">

          <button
            onClick={toggle}
            className={`relative overflow-hidden rounded-full px-10 py-5 text-lg font-bold transition-all duration-300 ${
              playing
                ? "bg-green-600 hover:bg-green-700"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 hover:translate-x-full"></span>

            <span className="relative flex items-center justify-center gap-3">

              <Play size={20} />

              {playing
                ? "LA EMISIÓN ESTÁ SONANDO"
                : "ESCUCHAR SUR20 RADIO"}

            </span>

          </button>

          <Link
            href="/programacion"
            className="rounded-full border-2 border-yellow-400 px-10 py-5 text-lg font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
          >
            VER PROGRAMACIÓN
          </Link>

        </div>

      </motion.div>

    </section>
  );
}