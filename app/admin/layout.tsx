import Link from "next/link";
import type { ReactNode } from "react";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-black text-white">

      <div className="flex min-h-screen">

        {/* Menú lateral */}

        <aside className="w-72 border-r border-yellow-500/20 bg-neutral-950">

          <div className="border-b border-yellow-500/20 p-8">

            <h1 className="text-3xl font-black text-yellow-400">
              SUR20
            </h1>

            <p className="mt-2 text-sm text-gray-400">
              Radio Studio
            </p>

          </div>

          <nav className="p-6 space-y-3">

            <Link
              href="/admin"
              className="block rounded-xl px-4 py-3 transition hover:bg-yellow-400 hover:text-black"
            >
              🏠 Dashboard
            </Link>

            <Link
              href="/admin/programas"
              className="block rounded-xl px-4 py-3 transition hover:bg-yellow-400 hover:text-black"
            >
              🎵 Programas
            </Link>

            <Link
              href="/programacion"
              className="block rounded-xl px-4 py-3 transition hover:bg-yellow-400 hover:text-black"
            >
              📻 Ver programación
            </Link>

          </nav>

        </aside>

        {/* Contenido */}

        <section className="flex-1">

          {children}

        </section>

      </div>

    </main>
  );
}