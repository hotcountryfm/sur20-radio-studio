import Image from "next/image";
import Link from "next/link";

import { locutores } from "@/data/locutores";

export default function HomeLocutores() {
  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1 text-sm font-semibold tracking-wide text-sky-300">
            SUR20 RADIO
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Nuestros Locutores
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Conoce a las voces que cada día acompañan a los oyentes de
            SUR20 RADIO desde distintos lugares del mundo.
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {locutores.map((locutor) => (

            <Link
              key={locutor.id}
              href={locutor.urlPrograma}
              className="group text-center"
            >

              <div className="mx-auto flex h-52 w-52 items-center justify-center overflow-hidden rounded-full border-4 border-slate-700 bg-slate-900 transition-all duration-300 group-hover:scale-105 group-hover:border-sky-400">

                <div className="relative h-44 w-44">
                  <Image
                    src={locutor.imagen}
                    alt={locutor.nombre}
                    fill
                    className="object-contain"
                  />
                </div>

              </div>

              <h3 className="mt-6 text-2xl font-bold text-white transition group-hover:text-sky-400">
                {locutor.nombre}
              </h3>

              <p className="mt-2 text-slate-400">
                {locutor.bandera} {locutor.pais}
              </p>

              <p className="mt-3 text-sm font-semibold text-sky-400">
                {locutor.programa}
              </p>

            </Link>

          ))}

        </div>

        <div className="mt-16 text-center">

          <Link
            href="/locutores"
            className="inline-flex items-center rounded-xl bg-sky-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-sky-400"
          >
            Ver todos los locutores
          </Link>

        </div>

      </div>
    </section>
  );
}