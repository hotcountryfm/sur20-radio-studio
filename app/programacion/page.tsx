import { supabase } from "../../lib/supabase";

export default async function ProgramacionPage() {
  const { data: programs, error } = await supabase
    .from("programs")
    .select("*")
    .order("day")
    .order("start_time");

  if (error) {
    return (
      <main className="min-h-screen bg-black p-10 text-red-500">
        <h1 className="text-3xl font-bold">
          Error al cargar la programación
        </h1>

        <p className="mt-4">{error.message}</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white py-20 px-6">

      <div className="mx-auto max-w-5xl">

        <h1 className="mb-12 text-center text-5xl font-black text-yellow-400">
          Programación
        </h1>

        {programs?.length === 0 ? (
          <p className="text-center text-gray-400">
            No hay programas disponibles.
          </p>
        ) : (
          <div className="space-y-6">
            {programs?.map((program) => (
              <div
                key={program.id}
                className="rounded-2xl border border-yellow-500/20 bg-neutral-900 p-6"
              >
                <h2 className="text-2xl font-bold text-yellow-400">
                  {program.title}
                </h2>

                <p className="mt-2 text-gray-300">
                  📅 {program.day}
                </p>

                <p className="text-gray-300">
                  🕒 {program.start_time} - {program.end_time}
                </p>

                <p className="mt-2 font-semibold text-white">
                  🎙 {program.presenter}
                </p>

                <p className="mt-4 text-gray-400">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>

    </main>
  );
}