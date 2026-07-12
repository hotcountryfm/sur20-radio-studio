import Link from "next/link";
import { supabase } from "@/lib/supabase";
import LogoutButton from "@/components/admin/LogoutButton";

export default async function AdminPage() {
  const { count: totalProgramas } = await supabase
    .from("programs")
    .select("*", { count: "exact", head: true });

  const { count: totalNoticias } = await supabase
    .from("news")
    .select("*", { count: "exact", head: true });

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-8 py-20">

        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-5xl font-black text-yellow-400">
              SUR20 RADIO STUDIO
            </h1>

            <p className="mt-3 text-gray-400">
              Panel de administración
            </p>
          </div>

          <LogoutButton />

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">

          <div className="rounded-3xl bg-neutral-900 p-8">
            <p className="text-gray-400">
              🎵 Programas
            </p>

            <h2 className="mt-4 text-5xl font-black text-yellow-400">
              {totalProgramas ?? 0}
            </h2>
          </div>

          <div className="rounded-3xl bg-neutral-900 p-8">
            <p className="text-gray-400">
              📰 Noticias
            </p>

            <h2 className="mt-4 text-5xl font-black text-yellow-400">
              {totalNoticias ?? 0}
            </h2>
          </div>

          <div className="rounded-3xl bg-neutral-900 p-8">
            <p className="text-gray-400">
              🎙 Locutores
            </p>

            <h2 className="mt-4 text-5xl font-black text-yellow-400">
              0
            </h2>
          </div>

          <div className="rounded-3xl bg-neutral-900 p-8">
            <p className="text-gray-400">
              🎧 Podcasts
            </p>

            <h2 className="mt-4 text-5xl font-black text-yellow-400">
              0
            </h2>
          </div>

        </div>

        <div className="mt-12 rounded-3xl bg-neutral-900 p-8">

          <h2 className="text-3xl font-bold text-yellow-400">
            Accesos rápidos
          </h2>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              href="/admin/programas"
              className="rounded-xl bg-yellow-400 px-6 py-4 font-bold text-black transition hover:bg-yellow-300"
            >
              🎵 Gestionar Programas
            </Link>

            <Link
              href="/admin/noticias"
              className="rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-700"
            >
              📰 Gestionar Noticias
            </Link>

          </div>

        </div>

      </div>
    </main>
  );
}