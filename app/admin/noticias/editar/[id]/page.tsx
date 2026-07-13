import Link from "next/link";
import { supabase } from "@/lib/supabase";
import EditNewsForm from "@/components/admin/EditNewsForm";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditarNoticiaPage({ params }: Props) {
  const { id } = await params;

  const { data: news, error } = await supabase
    .from("news")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !news) {
    return (
      <main className="min-h-screen bg-black text-white p-10">
        <h1 className="text-3xl font-bold text-red-500">
          Noticia no encontrada
        </h1>

        <Link
          href="/admin/noticias"
          className="mt-6 inline-block text-yellow-400 hover:underline"
        >
          ← Volver
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl px-8 py-20">

        <h1 className="text-5xl font-black text-yellow-400">
          Editar noticia
        </h1>

        <p className="mt-3 text-gray-400">
          Modifica la noticia y guarda los cambios.
        </p>

        <EditNewsForm news={news} />

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