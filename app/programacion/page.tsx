import Image from "next/image";
import Link from "next/link";
import { supabase } from "../../lib/supabase";

export default async function ProgramacionPage() {
  const { data: programs, error } = await supabase
    .from("programs")
    .select("*")
    .eq("active", true)
    .order("day")
    .order("start_time");

  console.log("PROGRAMAS:", programs);

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
    <main className="min-h-screen bg-black py-20 px-6 text-white">
      <div className="mx-auto max-w-7xl">

        <h1 className="mb-12 text-center text-5xl font-black text-yellow-400">
          Programación
        </h1>

        {programs?.length === 0 ? (
          <p className="text-center text-gray-400">
            No hay programas disponibles.
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <div
                key={program.id}
                className="overflow-hidden rounded-2xl border border-yellow-500/20 bg-neutral-900 shadow-lg transition-all duration-300 hover:scale-105 hover:border-yellow-400"
              >
                {program.image && (
                  <div className="relative h-72 w-full bg-black">
                    <Image
                      src={program.image}
                      alt={program.presenter}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                )}

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-yellow-400">
                    {program.title}
                  </h2>

                  <p className="mt-3 text-gray-300">
                    📅 {program.day}
                  </p>

                  <p className="text-gray-300">
                    🕒 {program.start_time} - {program.end_time}
                  </p>

                  <p className="mt-3 font-semibold text-white">
                    🎙 {program.presenter}
                  </p>

                  <p className="mt-4 text-gray-400">
                    {program.description}
                  </p>

                  <div className="mt-6 flex gap-3">
                    <Link
                      href="/"
                      className="rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
                    >
                      ▶ Escuchar
                    </Link>

                    <Link
                      href={program.locutor_url || "/locutores"}
                      className="rounded-lg border border-yellow-400 px-4 py-2 text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
                    >
                      Ver locutor
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}