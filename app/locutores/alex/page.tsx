import Image from "next/image";
import Link from "next/link";

export default function AlexPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <div className="flex justify-center">
            <div className="relative h-[520px] w-full max-w-md overflow-hidden rounded-3xl border border-slate-700 bg-slate-900">
              <Image
                src="/locutores/alex.png"
                alt="Alex"
                fill
                className="object-contain p-6"
                priority
              />
            </div>
          </div>

          <div>

            <span className="inline-block rounded-full bg-sky-500/20 px-4 py-1 text-sm font-semibold text-sky-300">
              SUR20 RADIO
            </span>

            <h1 className="mt-6 text-5xl font-black">
              Alex
            </h1>

            <p className="mt-4 text-xl text-slate-300">
              🇪🇸 Valencia · España
            </p>

            <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-6">

              <h2 className="text-lg font-semibold text-sky-400">
                Presenta
              </h2>

              <p className="mt-2 text-2xl font-bold">
                El Ritmo de tu Tarde
              </p>

            </div>

            <p className="mt-8 text-lg leading-8 text-slate-300">
              Desde Valencia, Alex se incorpora al equipo de SUR20 RADIO
              para acompañarte cada tarde con una selección de los mejores
              éxitos, novedades musicales y la energía que caracteriza a la
              emisora.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/"
                className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                ▶ Escuchar SUR20 RADIO
              </Link>

              <Link
                href="/locutores"
                className="rounded-xl border border-slate-600 px-6 py-3 font-semibold transition hover:border-sky-400 hover:text-sky-400"
              >
                ← Volver a Locutores
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}