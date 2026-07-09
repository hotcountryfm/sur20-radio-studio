"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

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
          ? "bg-black/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/logo.png"
            alt="SUR20 Radio"
            width={55}
            height={55}
          />

          <span className="text-xl font-bold tracking-wide text-yellow-400">
            SUR20 RADIO
          </span>

        </Link>

        <nav className="hidden md:flex gap-8 text-lg">

          <Link
            href="/"
            className="hover:text-yellow-400 transition"
          >
            Inicio
          </Link>

          <Link
            href="/programacion"
            className="hover:text-yellow-400 transition"
          >
            Programación
          </Link>

          <Link
            href="#"
            className="hover:text-yellow-400 transition"
          >
            Noticias
          </Link>

          <Link
            href="#"
            className="hover:text-yellow-400 transition"
          >
            Contacto
          </Link>

        </nav>

      </div>
    </header>
  );
}