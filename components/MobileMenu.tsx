"use client";

import Link from "next/link";
import { Menu, X, Home, CalendarDays, Newspaper, Phone, Play } from "lucide-react";
import { useState } from "react";
import { NAVIGATION } from "../lib/navigation";
import { STATION } from "../lib/constants";
import { useNowPlaying } from "../context/NowPlayingContext";

type Props = {
  playing: boolean;
  toggle: () => void;
};

export default function MobileMenu({ playing, toggle }: Props) {
  const [open, setOpen] = useState(false);

  const { artist, song } = useNowPlaying();

  const icons = [
    <Home size={22} key="home" />,
    <CalendarDays size={22} key="calendar" />,
    <Newspaper size={22} key="news" />,
    <Phone size={22} key="phone" />,
  ];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden rounded-lg p-2 text-white"
      >
        <Menu size={30} />
      </button>

      {/* Fondo oscuro */}

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-md transition-opacity duration-300 ${
          open
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-80 flex-col bg-neutral-950 shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Cabecera */}

        <div className="border-b border-neutral-800 p-6">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-black text-yellow-400">
                {STATION.name}
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                80's · 90's · 2000
              </p>

            </div>

            <button
              onClick={() => setOpen(false)}
              className="rounded-lg p-2 hover:bg-neutral-800"
            >
              <X />
            </button>

          </div>

        </div>

        {/* Navegación */}

        <nav className="flex-1 p-4">

          {NAVIGATION.map((item, index) => (

            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="mb-2 flex items-center gap-4 rounded-xl px-4 py-4 text-lg font-semibold transition hover:bg-yellow-400 hover:text-black"
            >
              {icons[index]}

              {item.label}

            </Link>

          ))}

        </nav>

        {/* Ahora suena */}

        <div className="border-t border-neutral-800 p-6">

          <div className="mb-4">

            <div className="mb-2 flex items-center gap-2 text-red-500">

              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500"></span>

              EN DIRECTO

            </div>

            <p className="font-bold text-white">

              {artist}

            </p>

            <p className="text-sm text-gray-400">

              {song}

            </p>

          </div>

          <button
            onClick={() => {
              toggle();
              setOpen(false);
            }}
            className={`flex w-full items-center justify-center gap-3 rounded-xl py-4 text-lg font-bold transition ${
              playing
                ? "bg-green-600 hover:bg-green-700"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            <Play size={20} />

            {playing ? "Pausar" : "Escuchar"}

          </button>

        </div>

      </aside>
    </>
  );
}