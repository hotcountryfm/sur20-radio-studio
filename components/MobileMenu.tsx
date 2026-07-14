"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Home,
  CalendarDays,
  Newspaper,
  Phone,
  Play,
} from "lucide-react";
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
      {/* Botón hamburguesa */}
      <button
        onClick={() => setOpen(true)}
        className="rounded-lg p-2 text-white md:hidden"
      >
        <Menu size={30} />
      </button>

      {/* Fondo */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-all duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex h-dvh w-[90vw] max-w-sm flex-col overflow-y-auto overscroll-contain border-r border-yellow-500/20 bg-black shadow-[0_0_50px_rgba(255,210,0,0.15)] transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Cabecera */}
        <div className="relative border-b border-neutral-800 p-8">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 rounded-full p-2 transition hover:bg-white/10"
          >
            <X size={28} />
          </button>

          <div className="flex flex-col items-center">
            <Image
              src="/logo.png"
              alt="SUR20 Radio"
              width={90}
              height={90}
              className="mb-5 rounded-full shadow-xl"
              priority
            />

            <h2 className="text-3xl font-black text-yellow-400">
              {STATION.name}
            </h2>

            <p className="mt-2 text-xs uppercase tracking-[5px] text-gray-400">
              80&apos;s • 90&apos;s • 2000
            </p>
          </div>
        </div>

        {/* Navegación */}
        <nav className="flex-1 px-5 py-6 pb-10">
          {NAVIGATION.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="mb-3 flex items-center gap-4 rounded-2xl px-5 py-4 text-lg font-semibold transition-all duration-200 hover:bg-yellow-400 hover:text-black active:scale-95"
            >
              {icons[index]}
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Ahora suena */}
        <div className="border-t border-neutral-800 p-6 pb-[calc(env(safe-area-inset-bottom)+24px)]">
          <div className="mb-5 rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
            <div className="mb-3 flex items-center gap-2 font-bold text-red-500">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
              EN DIRECTO
            </div>

            <p className="truncate text-lg font-bold text-white">{artist}</p>

            <p className="truncate text-sm text-gray-400">{song}</p>
          </div>

          <button
            onClick={() => {
              toggle();
              setOpen(false);
            }}
            className={`flex w-full items-center justify-center gap-3 rounded-2xl py-5 text-xl font-bold transition-all duration-300 hover:scale-[1.02] ${
              playing
                ? "bg-green-600 hover:bg-green-700"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            <Play size={22} />
            {playing ? "Pausar" : "Escuchar en directo"}
          </button>
        </div>
      </aside>
    </>
  );
}
