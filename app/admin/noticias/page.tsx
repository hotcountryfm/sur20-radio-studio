import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default async function AdminNoticiasPage() {
  const { data: news, error } = await supabase
    .from("news")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main className="min-h-screen bg-black text-red-500 p-10">
        <h1 className="text-3xl font-bold">
          Error cargando noticias
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
              Noticias
            </h1>

            <p className="mt-3 text-gray-400">
              Gestión de noticias de SUR20 Radio
            </p>

          </div>

          <Link
            href="/admin/noticias/nueva"
            className="rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black hover:bg-yellow-300"
          >
            + Nueva noticia
          </Link>

        </div>

        <div className="overflow-hidden rounded-2xl border border-yellow-500/20">

          <table className="w-full">

            <thead className="bg-neutral-900">

              <tr>

                <th className="p-4 text-left">
                  Título
                </th>

                <th className="p-4 text-left">
                  Estado
                </th>

                <th className="p-4 text-left">
                  Fecha
                </th>

                <th className="p-4 text-center">
                  Acciones
                </th>

              </tr>

            </thead>

            <tbody>

              {news?.map((item) => (

                <tr
                  key={item.id}
                  className="border-t border-neutral-800 hover:bg-neutral-900"
                >

                  <td className="p-4 font-bold text-yellow-400">
                    {item.title}
                  </td>

                  <td className="p-4">
                    {item.status}
                  </td>

                  <td className="p-4">
                    {new Date(item.created_at).toLocaleDateString("es-ES")}
                  </td>

                  <td className="p-4 text-center">

                    <button className="rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-700">
                      ✏ Editar
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}