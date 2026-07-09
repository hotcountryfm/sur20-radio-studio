export default function Programs() {
  const programs = [
    {
      day: "Lunes",
      time: "20:00",
      title: "Todo Pop Español",
      description: "Los mejores éxitos del pop español de los 80 y 90.",
    },
    {
      day: "Miércoles",
      time: "21:00",
      title: "Clásicos del Rock",
      description: "Grandes himnos del rock de todos los tiempos.",
    },
    {
      day: "Viernes",
      time: "22:00",
      title: "Noche Dance 2000",
      description: "Los mejores éxitos dance para empezar el fin de semana.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <h2 className="text-4xl font-black text-center text-yellow-400 mb-4">
        Próximos Programas
      </h2>

      <p className="text-center text-gray-400 mb-12">
        Descubre algunos de nuestros espacios destacados.
      </p>

      <div className="grid md:grid-cols-3 gap-8">

        {programs.map((program) => (
          <div
            key={program.title}
            className="rounded-3xl border border-yellow-500/20 bg-neutral-900 p-8 hover:border-yellow-500 transition hover:-translate-y-2"
          >
            <span className="text-red-500 font-bold">
              {program.day} · {program.time}
            </span>

            <h3 className="text-2xl font-bold mt-4 text-white">
              {program.title}
            </h3>

            <p className="text-gray-400 mt-4">
              {program.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}