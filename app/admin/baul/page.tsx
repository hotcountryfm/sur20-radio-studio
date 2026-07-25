import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import DeleteBaulButton from "@/components/admin/DeleteBaulButton";

export const dynamic = "force-dynamic";

export default async function AdminBaulPage() {
  const { data: articles, error } = await supabase
    .from("baul_articles")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main className="min-h-screen bg-black text-red-500 p-10">
        <h1 className="text-3xl font-bold">
          Error cargando artículos
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
              El Baúl de los Recuerdos
            </h1>

            <p className="mt-3 text-gray-400">
              Gestión de artículos históricos de SUR20 Radio
            </p>
          </div>

          <Link
            href="/admin/baul/nuevo"
            className="rounded-xl bg-purple-600 px-6 py-3 font-bold text-white hover:bg-purple-700"
          >
            + Nuevo artículo
          </Link>

        </div>

        <div className="overflow-hidden rounded-2xl border border-yellow-500/20">

          <table className="w-full">

            <thead className="bg-neutral-900">
              <tr>
                <th className="p-4 text-left">Imagen</th>
                <th className="p-4 text-left">Título</th>
                <th className="p-4 text-left">Categoría</th>
                <th className="p-4 text-left">Estado</th>
                <th className="p-4 text-left">Fecha</th>
                <th className="p-4 text-center">Acciones</th>
              </tr>
            </thead>

            <tbody>

              {articles?.map((item) => (

                <tr
                  key={item.id}
                  className="border-t border-neutral-800 hover:bg-neutral-900"
                >

                  <td className="p-4">

                    {item.image_url ? (

                      <Image
                        src={item.image_url}
                        alt={item.title}
                        width={90}
                        height={60}
                        className="rounded-lg object-cover"
                      />

                    ) : (

                      <div className="flex h-[60px] w-[90px] items-center justify-center rounded-lg bg-neutral-800 text-xs text-gray-500">
                        Sin imagen
                      </div>

                    )}

                  </td>

                  <td className="p-4 font-bold text-yellow-400">
                    {item.title}
                  </td>

                  <td className="p-4">
                    {item.category}
                  </td>

                  <td className="p-4">
                    {item.status === "published"
                      ? "🟢 Publicado"
                      : "🟡 Borrador"}
                  </td>

                  <td className="p-4">
                    {new Date(item.created_at).toLocaleDateString("es-ES")}
                  </td>

                  <td className="p-4">

                    <div className="flex justify-center gap-3">

                      <Link
                        href={`/admin/baul/editar/${item.id}`}
                        className="rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-700"
                      >
                        ✏️ Editar
                      </Link>

                      <DeleteBaulButton id={item.id} />

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