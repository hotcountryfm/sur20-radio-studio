import type { Metadata } from "next";
import DirectPlayer from "@/components/DirectPlayer";
import Link from "next/link";
import LatestNews from "@/components/home/LatestNews";
import NowPlaying from "@/components/NowPlaying";

export const metadata: Metadata = {
  title: "Directo | SUR20 RADIO",
  description:
    "Escucha SUR20 RADIO en directo con la mejor música de los 80, 90 y 2000.",
};

export default function DirectoPage() {
  return (
    <main className="bg-black text-white">

      <section className="relative overflow-hidden border-b border-yellow-500/20 bg-gradient-to-b from-neutral-900 via-black to-black">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">

          <span className="mb-4 rounded-full bg-red-600 px-4 py-1 text-sm font-bold uppercase tracking-widest">
            🔴 En Directo
          </span>

          <h1 className="text-5xl font-black md:text-7xl">
            SUR20 RADIO
          </h1>

          <p className="mt-6 max-w-2xl text-xl text-gray-300">
            La mejor música de los 80, 90 y 2000 durante las 24 horas.
          </p>

          <div className="mt-10">
             <DirectPlayer />
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
               href="http://hoth.alonhosting.com:5430/stream"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-yellow-400 px-8 py-4 text-lg font-bold text-black transition hover:scale-105"
            >
              ▶ Escuchar ahora
            </a>

            <a
              href="https://tunein.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-yellow-400 px-8 py-4 font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
            >
              TuneIn
            </a>

          </div>

        </div>
      </section>

      <LatestNews />

      <section className="mx-auto max-w-7xl px-6 py-20 text-center">

        <h2 className="text-4xl font-black text-yellow-400">
          Comparte SUR20 RADIO
        </h2>

        <p className="mt-4 text-gray-400">
          Ayúdanos a llegar a más oyentes compartiendo nuestra emisora.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            href="https://www.facebook.com/sharer/sharer.php?u=https://sur20radio.com/directo"
            target="_blank"
            className="rounded-full bg-[#1877F2] px-6 py-3 font-bold"
          >
            Facebook
          </Link>

          <Link
            href="https://wa.me/?text=https://sur20radio.com/directo"
            target="_blank"
            className="rounded-full bg-green-600 px-6 py-3 font-bold"
          >
            WhatsApp
          </Link>

          <Link
            href="https://twitter.com/intent/tweet?url=https://sur20radio.com/directo"
            target="_blank"
            className="rounded-full bg-white px-6 py-3 font-bold text-black"
          >
            X
          </Link>

        </div>

      </section>

    </main>
  );
}
