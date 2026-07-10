import Link from "next/link";

const programs = [
  {
    title: "TODO POP ESPAÑOL",
    schedule: "Lunes a Viernes · 18:00 - 18:30",
    description:
      "Los mejores éxitos del pop español de los años 80 y 90.",
    icon: "🎙️",
    color: "from-red-600 to-red-800",
  },
  {
    title: "LOVE NIGHT",
    schedule: "Todas las noches · 22:00",
    description:
      "Las mejores baladas internacionales para terminar el día.",
    icon: "🌙",
    color: "from-purple-600 to-indigo-700",
  },
  {
    title: "LOS GIGANTES DEL PASADO",
    schedule: "Domingos · 20:00",
    description:
      "Un recorrido por los grandes clásicos que marcaron una época.",
    icon: "🎧",
    color: "from-yellow-500 to-amber-700",
  },
];

export default function FeaturedPrograms() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white">
            Programas Destacados
          </h2>

          <p className="mt-5 text-lg text-gray-400">
            Descubre algunos de los espacios más especiales de SUR20 Radio.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {programs.map((program) => (
            <article
              key={program.title}
              className="group overflow-hidden rounded-3xl border border-yellow-500/20 bg-neutral-900 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(234,179,8,0.25)]"
            >
              <div
                className={`h-2 bg-gradient-to-r ${program.color}`}
              />

              <div className="p-8">

                <div className="text-5xl">
                  {program.icon}
                </div>

                <h3 className="mt-6 text-2xl font-black text-yellow-400">
                  {program.title}
                </h3>

                <p className="mt-3 text-sm font-semibold text-red-400">
                  {program.schedule}
                </p>

                <p className="mt-5 text-gray-300 leading-7">
                  {program.description}
                </p>

                <Link
                  href="/programacion"
                  className="mt-8 inline-flex rounded-full bg-red-600 px-6 py-3 font-bold transition hover:bg-red-700"
                >
                  Ver programación →
                </Link>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
