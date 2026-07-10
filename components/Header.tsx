"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAudio } from "../context/AudioContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const { playing, toggle } = useAudio();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl shadow-2xl"
          : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/logo.png"
            alt="SUR20 Radio"
            width={55}
            height={55}
            priority
          />

          <div>

            <h1 className="text-xl font-black tracking-wide text-yellow-400">
              SUR20 RADIO
            </h1>

            <div className="flex items-center gap-2 text-xs text-red-400">

              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>

              EN DIRECTO

            </div>

          </div>

        </Link>

        {/* Menú */}

        <nav className="hidden md:flex items-center gap-8">

          <Link
            href="/"
            className="transition hover:text-yellow-400"
          >
            Inicio
          </Link>

          <Link
            href="/programacion"
            className="transition hover:text-yellow-400"
          >
            Programación
          </Link>

          <Link
            href="#"
            className="transition hover:text-yellow-400"
          >
            Noticias
          </Link>

          <Link
            href="#"
            className="transition hover:text-yellow-400"
          >
            Contacto
          </Link>

        </nav>

        {/* Botón */}

        <button
          onClick={toggle}
          className={`rounded-full px-6 py-3 font-bold transition-all duration-300 ${
            playing
              ? "bg-green-600 hover:bg-green-700"
              : "bg-red-600 hover:bg-red-700"
          }`}
        >
          {playing ? "⏸ Pausar" : "▶ Escuchar"}
        </button>

      </div>
    </header>
  );
}