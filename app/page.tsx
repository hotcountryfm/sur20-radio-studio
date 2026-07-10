import { CalendarDays, Clock3, Radio } from "lucide-react";
import { PROGRAMS } from "../../lib/programs";
import { getCurrentProgram } from "../../lib/getCurrentProgram";

export default function ProgramacionPage() {
  const currentProgram = getCurrentProgram();

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-yellow-500/20 bg-gradient-to-b from-neutral-900 to-black py-24">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-600/10 px-5 py-2 text-red-400">
            <Radio size={18} />
            <span className="font-bold uppercase tracking-widest">
              Programación Oficial
            </span>
          </div>

          <h1 className="text-5xl font-black md:text-6xl">
            PROGRAMACIÓN
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Descubre todos los programas de SUR20 Radio y acompáñanos
            durante las 24 horas con la mejor música.
          </p>

        </div>

      </section>

      {/* AHORA EN EMISIÓN */}

      <section className="mx-auto mt-12 max-w-7xl px-6">

        <div className="rounded-3xl border border-red-500/30 bg-gradient-to-r from-red-900/20 to-red-600/10 p-8">

          <div className="flex items-center gap-3">

            <div className="h-3 w-3 animate-pulse rounded-full bg-red-500" />

            <span className="font-bold uppercase tracking-widest text-red-400">
              Ahora en emisión
            </span>

          </div>

          <h2 className="mt-4 text-3xl font-black text-yellow-400">
            {currentProgram.icon} {currentProgram.title}
          </h2>

          <p className="mt-2 text-gray-300">
            {currentProgram.description}
          </p>

        </div>

      </section>

      {/* PROGRAMAS */}

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {PROGRAMS.map((program) => (

            <article
              key={program.title}
              className="group rounded-3xl border border-yellow-500/20 bg-neutral-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(234,179,8,.25)]"
            >

              <div className="text-5xl">
                {program.icon}
              </div>

              <h3 className="mt-6 text-2xl font-black text-yellow-400">
                {program.title}
              </h3>

              <div className="mt-6 space-y-3">

                <div className="flex items-center gap-3 text-gray-300">
                  <CalendarDays size={18} />
                  {program.day}
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Clock3 size={18} />
                  {program.start} - {program.end}
                </div>

              </div>

              <p className="mt-6 leading-7 text-gray-400">
                {program.description}
              </p>

              {currentProgram.title === program.title && (
                <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-bold">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-white" />
                  EN DIRECTO
                </div>
              )}

            </article>

          ))}

        </div>

      </section>

    </main>
  );
}