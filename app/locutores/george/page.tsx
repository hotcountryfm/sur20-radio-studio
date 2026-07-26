import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Radio } from "lucide-react";

export default function GeorgePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <Link
          href="/locutores"
          className="mb-10 inline-flex items-center gap-2 text-sky-400 hover:text-sky-300"
        >
          <ArrowLeft size={18} />
          Volver a Locutores
        </Link>

        <div className="grid gap-16 lg:grid-cols-2">

          {/* FOTO */}

          <div className="relative h-[650px] overflow-hidden rounded-3xl border border-slate-700 bg-slate-900">

            <Image
              src="/locutores/GORGE.png"
              alt="George"
              fill
              priority
              className="object-contain p-8"
            />

          </div>

          {/* INFORMACIÓN */}

          <div className="flex flex-col justify-center">

            <span className="inline-flex w-fit rounded-full bg-sky-500 px-4 py-2 font-semibold text-slate-950">
              🇬🇧 Londres
            </span>

            <h1 className="mt-6 text-5xl font-black">
              George
            </h1>

            <div className="mt-5 flex items-center gap-3 text-slate-400">
              <MapPin className="text-sky-400" />
              Londres, Reino Unido
            </div>

            <div className="mt-8 rounded-2xl border border-sky-500/20 bg-sky-500/10 p-6">

              <div className="flex items-center gap-4">

                <Radio className="text-sky-400" />

                <div>

                  <p className="text-sm uppercase tracking-widest text-sky-300">
                    Programa
                  </p>

                  <div>
  <p className="text-sm uppercase tracking-widest text-sky-300">
    Programa
  </p>

  <h2 className="text-2xl font-bold">
    The Disco Experience
  </h2>
</div>

                </div>

              </div>

            </div>

            <p className="mt-8 text-lg leading-8 text-slate-300">
  Desde Londres, George presenta <strong>The Disco Experience</strong>,
  un programa dedicado a los grandes éxitos de la música disco, dance y
  los sonidos que marcaron las pistas de baile de varias generaciones.
</p>

            <Link
              href="/directo"
              className="mt-10 inline-flex w-fit rounded-xl bg-sky-500 px-8 py-4 font-bold text-slate-950 transition hover:bg-sky-400"
            >
              ▶ Escuchar SUR20 RADIO
            </Link>

          </div>

        </div>

      </div>
    </main>
  );
}