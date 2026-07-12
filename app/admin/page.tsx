import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <div className="mx-auto max-w-6xl px-8 py-20">

        <h1 className="text-5xl font-black text-yellow-400">
          SUR20 RADIO STUDIO
        </h1>

        <p className="mt-4 text-gray-400">
          Panel de administración
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          <Link
            href="/admin/programas"
            className="rounded-3xl border border-yellow-500/20 bg-neutral-900 p-8 transition hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(234,179,8,.25)]"
          >
            <div className="text-5xl">
              🎵
            </div>

            <h2 className="mt-6 text-2xl font-bold text-yellow-400">
              Programación
            </h2>

            <p className="mt-4 text-gray-400">
              Gestionar todos los programas de la emisora.
            </p>

          </Link>

          <div className="rounded-3xl border border-neutral-700 bg-neutral-900 p-8 opacity-60">

            <div className="text-5xl">
              📰
            </div>

            <h2 className="mt-6 text-2xl font-bold">
              Noticias
            </h2>

            <p className="mt-4 text-gray-500">
              Próximamente
            </p>

          </div>

          <div className="rounded-3xl border border-neutral-700 bg-neutral-900 p-8 opacity-60">

            <div className="text-5xl">
              🎙
            </div>

            <h2 className="mt-6 text-2xl font-bold">
              Locutores
            </h2>

            <p className="mt-4 text-gray-500">
              Próximamente
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}