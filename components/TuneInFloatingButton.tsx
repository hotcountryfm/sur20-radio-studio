"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function TuneInFloatingButton() {
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExpanded(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="https://tunein.com/radio/RADIO-SUR-VEINTE-s354977/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escuchar SUR20 RADIO en TuneIn"
      title="Escuchar SUR20 RADIO en TuneIn"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onClick={() => setExpanded(true)}
      className={`
        fixed
        right-5
        bottom-[165px]
        md:bottom-[150px]
        z-40
        overflow-hidden
        rounded-2xl
        border
        border-white/20
        bg-white/95
        backdrop-blur-md
        shadow-[0_10px_35px_rgba(0,0,0,0.35)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-[0_15px_45px_rgba(0,0,0,0.45)]
        active:scale-95
        ${
          expanded
            ? "w-[290px] px-5 py-4"
            : "w-[92px] px-3 py-3"
        }
      `}
    >
      <div className="flex items-center gap-4">
        <Image
          src="/tunein-logo.png"
          alt="TuneIn"
          width={84}
          height={84}
          className={`
            w-auto
            transition-all
            duration-500
            ${expanded ? "h-16 md:h-20" : "h-14"}
          `}
          priority
        />

        <div
          className={`
            overflow-hidden
            transition-all
            duration-500
            ${
              expanded
                ? "max-w-xs opacity-100"
                : "max-w-0 opacity-0"
            }
          `}
        >
          <span className="block text-xs font-bold uppercase tracking-[3px] text-[#14D860]">
            Escúchanos en
          </span>

          <span className="block text-lg font-black text-black">
            TuneIn
          </span>

          <div className="mt-2 flex items-center gap-2">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-500" />

            <span className="text-xs font-bold uppercase tracking-wider text-red-500">
              EN DIRECTO
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}