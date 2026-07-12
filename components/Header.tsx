"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Radio } from "lucide-react";

import { useAudio } from "../context/AudioContext";
import { useNowPlaying } from "../context/NowPlayingContext";
import { NAVIGATION } from "../lib/navigation";
import { STATION } from "../lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const { playing, toggle } = useAudio();
  const { artist, song } = useNowPlaying();

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

        <Link href="/" className="flex items-center gap-4">

          <Image
            src="/logo.png"
            alt={STATION.name}
            width={58}
            height={58}
            priority
          />

          <div>

            <h1 className="text-xl font-black tracking-wide text-yellow-400">
              {STATION.name}
            </h1>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-400">

              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>

              <Radio size={14} />

              {playing ? "EN DIRECTO" : "PREPARADO"}

            </div>

            <div className="hidden lg:block mt-1 max-w-xs truncate text-xs text-gray-400">

              <span className="font-semibold text-white">
                {artist}
              </span>

              {" • "}

              {song}

            </div>

          </div>

        </Link>

        {/* Navegación */}

        <nav className="hidden md:flex items-center gap-8">

          {NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-yellow-400"
            >
              {item.label}
            </Link>
          ))}

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