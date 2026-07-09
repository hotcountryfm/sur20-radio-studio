export default function Stats() {
  const stats = [
    {
      value: "24/7",
      title: "En Directo",
    },
    {
      value: "+1500",
      title: "Canciones",
    },
    {
      value: "80 · 90 · 2000",
      title: "Grandes Éxitos",
    },
    {
      value: "320 kbps",
      title: "Calidad de Audio",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <h2 className="text-4xl font-black text-center text-yellow-400 mb-4">
        SUR20 RADIO EN CIFRAS
      </h2>

      <p className="text-center text-gray-400 mb-12">
        Música sin interrupciones, las 24 horas del día.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-neutral-900 rounded-3xl border border-yellow-500/20 p-8 text-center hover:border-yellow-500 transition hover:-translate-y-2"
          >
            <div className="text-4xl font-black text-yellow-400">
              {stat.value}
            </div>

            <div className="mt-4 text-gray-300">
              {stat.title}
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}