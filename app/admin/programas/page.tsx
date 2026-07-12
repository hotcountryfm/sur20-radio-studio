import Link from "next/link";
import { supabase } from "@/lib/supabase";
import DeleteProgramButton from "@/components/admin/DeleteProgramButton";

export default async function AdminProgramasPage() {
  const { data: programs, error } = await supabase
    .from("programs")
    .select("*")
    .order("day")
    .order("start_time");

  if (error) {
    return (
      <main className="p-10 text-red-500">
        <h1 className="text-3xl font-bold">
          Error cargando programas
        </h1>

        <p className="mt-4">{error.message}</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">

      <div className="mx-auto max-w-7xl px-8 py-20">

        <div className="mb-10 flex items-center justify-between">

          <div>

            <h1 className="text-5xl font-black text-yellow-400">
              Programación
            </h1>

            <p className="mt-3 text-gray-400">
              Gestión de programas de SUR20 Radio
            </p>

          </div>

          <Link
            href="/admin/programas/nuevo"
            className="rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black hover:bg-yellow-300"
          >
            + Nuevo programa
          </Link>

        </div>

        <div className="overflow-hidden rounded-2xl border border-yellow-500/20">

          <table className="w-full">

            <thead className="bg-neutral-900">

              <tr>

                <th className="p-4 text-left">
                  Programa
                </th>

                <th className="p-4 text-left">
                  Día
                </th>

                <th className="p-4 text-left">
                  Horario
                </th>

                <th className="p-4 text-left">
                  Presentador
                </th>

                <th className="p-4 text-center">
                  Acciones
                </th>

              </tr>

            </thead>

            <tbody>

              {programs?.map((program) => (

                <tr
                  key={program.id}
                  className="border-t border-neutral-800 hover:bg-neutral-900"
                >

                  <td className="p-4 font-bold text-yellow-400">
                    {program.title}
                  </td>

                  <td className="p-4">
                    {program.day}
                  </td>

                  <td className="p-4">
                    {program.start_time} - {program.end_time}
                  </td>

                  <td className="p-4">
                    {program.presenter}
                  </td>

                  <td className="p-4">

                    <div className="flex justify-center gap-3">

                      <button className="rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-700">
                        ✏ Editar
                      </button>

                      <DeleteProgramButton
                        id={String(program.id)}
                      />

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        <div className="mt-10">

          <Link
            href="/admin"
            className="text-yellow-400 hover:underline"
          >
            ← Volver al panel
          </Link>

        </div>

      </div>

    </main>
  );
}