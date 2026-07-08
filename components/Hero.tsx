import Image from "next/image";
import Player from "./Player";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 pt-24 text-center">

      <div className="relative">

        {/* Resplandor dorado */}
        <div className="absolute inset-0 rounded-full blur-[90px] bg-yellow-500/20"></div>

        {/* Logo */}
        <Image
          src="/logo.png"
          alt="SUR20 Radio"
          width={340}
          height={340}
          priority
          className="relative z-10 hover:scale-105 transition duration-500"
        />

      </div>

      <h1 className="mt-10 text-5xl md:text-6xl font-black">
        Tu compañía, tu voz
      </h1>

      <p className="mt-5 text-xl text-gray-400 max-w-2xl">
        La mejor música de los 80, 90 y 2000 durante las 24 horas del día.
      </p>

      <div className="mt-10 flex flex-col md:flex-row gap-4">

        <Player />

        <button className="border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black px-10 py-5 rounded-full font-bold text-xl transition">
          Programación
        </button>

      </div>

    </section>
  );
}