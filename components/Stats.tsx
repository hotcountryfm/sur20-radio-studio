export default function Stats() {
  const stats = [
    {
      value: "24/7",
      title: "En Directo",
      icon: "🔴",
    },
    {
      value: "+1500",
      title: "Canciones",
      icon: "🎵",
    },
    {
      value: "80 · 90 · 2000",
      title: "Grandes Éxitos",
      icon: "🎙️",
    },
    {
      value: "320 kbps",
      title: "Alta Calidad",
      icon: "🎧",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-black text-yellow-400">
          SUR20 RADIO EN CIFRAS
        </h2>

        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Música sin interrupciones, las 24 horas del día, con los mejores
          éxitos de los años 80, 90 y 2000.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="group rounded-3xl border border-yellow-500/20 bg-neutral-900 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(234,179,8,0.25)]"
          >
            <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
              {stat.icon}
            </div>

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