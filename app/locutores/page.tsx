import Link from "next/link";
import { supabase } from "@/lib/supabase";
import DeleteLocutorButton from "@/components/admin/DeleteLocutorButton";

export default async function AdminLocutoresPage() {
  const { data: locutores, error } = await supabase
    .from("locutores")
    .select("*")
    .order("nombre");

  if (error) {
    return (
      <main className="p-10 text-red-500">
        <h1 className="text-3xl font-bold">
          Error cargando locutores
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
              Locutores
            </h1>

            <p className="mt-3 text-gray-400">
              Gestión de locutores de SUR20 Radio
            </p>

          </div>

          <Link
            href="/admin/locutores/nuevo"
            className="rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black hover:bg-yellow-300"
          >
            + Nuevo locutor
          </Link>

        </div>

        <div className="overflow-hidden rounded-2xl border border-yellow-500/20">

          <table className="w-full">

            <thead className="bg-neutral-900">

              <tr>

                <th className="p-4 text-left">
                  Foto
                </th>

                <th className="p-4 text-left">
                  Nombre
                </th>

                <th className="p-4 text-left">
                  País
                </th>

                <th className="p-4 text-left">
                  Estado
                </th>

                <th className="p-4 text-center">
                  Acciones
                </th>

              </tr>

            </thead>

            <tbody>

              {locutores?.map((locutor) => (

                <tr
                  key={locutor.id}
                  className="border-t border-neutral-800 hover:bg-neutral-900"
                >

                  <td className="p-4">

                    {locutor.foto ? (

                      <img
                        src={locutor.foto}
                        alt={locutor.nombre}
                        className="h-14 w-14 rounded-full object-cover"
                      />

                    ) : (

                      <div className="h-14 w-14 rounded-full bg-neutral-800"></div>

                    )}

                  </td>

                  <td className="p-4 font-bold text-yellow-400">
                    {locutor.nombre}
                  </td>

                  <td className="p-4">
                    {locutor.pais}
                  </td>

                  <td className="p-4">
                    {locutor.activo ? "🟢 Activo" : "🔴 Inactivo"}
                  </td>

                  <td className="p-4">

                    <div className="flex justify-center gap-3">

                      <Link
                        href={`/admin/locutores/editar/${locutor.id}`}
                        className="rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-700"
                      >
                        ✏ Editar
                      </Link>

                      <DeleteLocutorButton
                        id={locutor.id}
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