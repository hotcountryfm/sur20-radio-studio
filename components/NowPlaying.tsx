export default function NowPlaying() {
  return (
    <section className="max-w-5xl mx-auto px-6 -mt-10 relative z-20">

      <div className="rounded-3xl bg-neutral-900/80 backdrop-blur-xl border border-yellow-500/20 shadow-2xl p-8">

        <div className="flex items-center gap-3">

          <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>

          <span className="uppercase tracking-widest text-red-500 font-bold text-sm">
            EN DIRECTO
          </span>

        </div>

        <p className="mt-6 text-gray-400">
          Ahora suena
        </p>

        <h2 className="text-4xl font-black mt-2">
          Roxette
        </h2>

        <p className="text-yellow-400 text-2xl">
          It Must Have Been Love
        </p>

        <div className="mt-8 flex items-center justify-between">

          <span className="text-gray-500">
            📻 SUR20 Radio
          </span>

          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-bold transition">
            Escuchar
          </button>

        </div>

      </div>

    </section>
  );
}