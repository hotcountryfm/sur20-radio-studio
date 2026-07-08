import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-yellow-500/20 bg-black/70 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <Link href="/" className="flex items-center gap-4">

          <Image
            src="/logo.png"
            alt="SUR20 Radio"
            width={54}
            height={54}
            priority
          />

          <div>

            <h2 className="text-lg font-bold text-yellow-400">
              SUR20 RADIO
            </h2>

            <p className="text-xs text-gray-400">
              Tu compañía, tu voz
            </p>

          </div>

        </Link>

        <nav className="hidden md:flex gap-10">

          <Link href="/" className="hover:text-yellow-400 transition">
            Inicio
          </Link>

          <Link href="/programacion" className="hover:text-yellow-400 transition">
            Programación
          </Link>

          <Link href="#" className="hover:text-yellow-400 transition">
            En Directo
          </Link>

          <Link href="#" className="hover:text-yellow-400 transition">
            Noticias
          </Link>

          <Link href="#" className="hover:text-yellow-400 transition">
            Contacto
          </Link>

        </nav>

        <button className="rounded-full bg-red-600 px-6 py-3 font-bold text-white transition hover:bg-red-700">
          🔴 EN DIRECTO
        </button>

      </div>

    </header>
  );
}