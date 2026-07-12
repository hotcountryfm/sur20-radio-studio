import { supabase } from "../../lib/supabase";

export default async function TestDbPage() {
  const { data, error } = await supabase
    .from("programs")
    .select("*");

  if (error) {
    return (
      <main className="p-10 text-red-500">
        <h1>Error al conectar con Supabase</h1>
        <pre>{error.message}</pre>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black p-10 text-white">
      <h1 className="mb-8 text-4xl font-bold text-yellow-400">
        Conexión con Supabase
      </h1>

      {data?.map((program) => (
        <div
          key={program.id}
          className="mb-6 rounded-xl border border-yellow-500/30 bg-neutral-900 p-6"
        >
          <h2 className="text-2xl font-bold">
            {program.title}
          </h2>

          <p className="text-gray-300">
            {program.day}
          </p>

          <p className="text-gray-300">
            {program.start_time} - {program.end_time}
          </p>

          <p className="mt-2 text-yellow-400">
            {program.presenter}
          </p>

          <p className="mt-2 text-gray-400">
            {program.description}
          </p>
        </div>
      ))}
    </main>
  );
}