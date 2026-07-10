export default function Features() {
  const features = [
    {
      icon: "🎵",
      title: "Los mejores éxitos",
      description:
        "Una selección de música de los años 80, 90 y 2000 durante las 24 horas.",
    },
    {
      icon: "📻",
      title: "Emisión continua",
      description:
        "Escucha SUR20 Radio sin interrupciones y con la mejor calidad de sonido.",
    },
    {
      icon: "🌍",
      title: "Escúchanos donde quieras",
      description:
        "Disponible desde ordenador, móvil o tablet, estés donde estés.",
    },
  ];

  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-black text-white">
            ¿Por qué escuchar SUR20 Radio?
          </h2>

          <p className="mt-4 text-gray-400 text-lg">
            Tu emisora online con los mejores recuerdos musicales.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-yellow-500/20 bg-neutral-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-2xl"
            >
              <div className="text-5xl">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-yellow-400">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}