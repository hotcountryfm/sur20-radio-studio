type Program = {
  id: string;
  title: string;
  day: string;
  start_time: string;
  end_time: string;
  presenter: string;
  description: string;
};

async function getPrograms(): Promise<Program[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/api/programs`,
      {
        next: {
          revalidate: 60,
        },
      }
    );

    if (!response.ok) {
      return [];
    }

    const json = await response.json();

    return json.data ?? [];
  } catch {
    return [];
  }
}

export default async function FeaturedPrograms() {
  const programs = await getPrograms();

  if (programs.length === 0) {
    return null;
  }

  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-black text-white">
            Programas destacados
          </h2>

          <p className="mt-5 text-lg text-gray-400">
            Descubre algunos de los espacios de SUR20 Radio.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.id}
              className="rounded-3xl border border-yellow-500/20 bg-neutral-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(234,179,8,0.25)]"
            >
              <div className="mb-6 text-5xl">🎙️</div>

              <h3 className="text-2xl font-black text-yellow-400">
                {program.title}
              </h3>

              <p className="mt-3 font-semibold text-red-400">
                {program.day}
              </p>

              <p className="text-gray-300">
                {program.start_time} - {program.end_time}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Presentado por {program.presenter}
              </p>

              <p className="mt-5 leading-7 text-gray-300">
                {program.description}
              </p>

              <a
                href="/programacion"
                className="mt-8 inline-flex rounded-full bg-red-600 px-6 py-3 font-bold transition hover:bg-red-700"
              >
                Ver programación →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}