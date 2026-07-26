import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Radio } from "lucide-react";

export default function JRNestorLuisPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Link
          href="/locutores"
          className="mb-10 inline-flex items-center gap-2 text-sky-400 hover:text-sky-300"
        >
          <ArrowLeft size={20} />
          Volver a Locutores
        </Link>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative h-[650px] rounded-3xl overflow-hidden border border-slate-700 bg-slate-900">
            <Image
              src="/locutores/logo JR nestor.jpg"
              alt="JR. Néstor Luis"
              fill
              className="object-contain p-8"
              priority
            />
          </div>

          <div>
            <h1 className="text-5xl font-bold">
              JR. Néstor Luis
            </h1>

            <div className="mt-6 flex items-center gap-3 text-slate-300">
              <MapPin size={20} />
              Texas, Estados Unidos 🇺🇸
            </div>

            <div className="mt-10 rounded-2xl border border-slate-700 bg-slate-900 p-6">
              <div className="flex items-center gap-3">
                <Radio className="text-sky-400" />
                <h2 className="text-2xl font-semibold">
                  Los Gigantes del Pasado
                </h2>
              </div>

              <p className="mt-4 leading-8 text-slate-300">
                Desde Texas, JR. Néstor Luis presenta
                <strong> Los Gigantes del Pasado</strong>, un recorrido por
                los grandes éxitos de los años 80 y 90, recuperando aquellas
                canciones que marcaron toda una época y que siguen formando
                parte de la memoria musical de varias generaciones.
              </p>
            </div>

            <a
              href="/"
              className="mt-10 inline-flex rounded-xl bg-sky-500 px-8 py-4 font-semibold text-slate-950 hover:bg-sky-400 transition"
            >
              Escuchar SUR20 RADIO
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}