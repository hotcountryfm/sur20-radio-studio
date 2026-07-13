import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function NoticiaPage({ params }: Props) {
  const { slug } = await params;

  const { data: news, error } = await supabase
    .from("news")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !news) {
    return (
      <main className="min-h-screen bg-black text-white p-10">
        <h1 className="text-4xl font-bold text-red-500">
          Noticia no encontrada
        </h1>

        <Link
          href="/noticias"
          className="mt-8 inline-block text-yellow-400 hover:underline"
        >
          ← Volver a Noticias
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">

      <article className="mx-auto max-w-5xl px-8 py-20">

        {news.image_url && (

          <Image
            src={news.image_url}
            alt={news.title}
            width={1200}
            height={700}
            className="mb-10 rounded-3xl object-cover"
            priority
          />

        )}

        <p className="text-gray-400">
          {new Date(news.created_at).toLocaleDateString("es-ES")}
        </p>

        <h1 className="mt-4 text-5xl font-black text-yellow-400">
          {news.title}
        </h1>

        {news.summary && (
          <p className="mt-8 text-2xl text-gray-300">
            {news.summary}
          </p>
        )}

        <div className="mt-10 whitespace-pre-wrap text-lg leading-8 text-gray-200">
          {news.content}
        </div>

        <Link
          href="/noticias"
          className="mt-12 inline-block text-yellow-400 hover:underline"
        >
          ← Volver a Noticias
        </Link>

      </article>

    </main>
  );
}