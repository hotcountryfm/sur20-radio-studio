import Link from "next/link";
import CreateNewsForm from "@/components/admin/CreateNewsForm";

export default function NuevaNoticiaPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl px-8 py-20">

        <h1 className="text-5xl font-black text-yellow-400">
          Nueva noticia
        </h1>

        <p className="mt-3 text-gray-400">
          Publica una nueva noticia en SUR20 Radio.
        </p>

        <CreateNewsForm />

        <div className="mt-8">
          <Link
            href="/admin/noticias"
            className="text-yellow-400 hover:underline"
          >
            ← Volver a Noticias
          </Link>
        </div>

      </div>
    </main>
  );
}