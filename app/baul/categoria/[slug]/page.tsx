import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import { notFound } from "next/navigation";

import { supabase } from "@/lib/supabase";
import {
  BAUL_CATEGORIES,
  getCategoryName,
} from "@/lib/baulCategories";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-dynamic";

export default async function BaulCategoryPage({
  params,
}: Props) {
  const { slug } = await params;

  const category = getCategoryName(slug);

  if (!category) {
    notFound();
  }

  const { data: articles } = await supabase
    .from("baul_articles")
    .select("*")
    .eq("status", "published")
    .eq("category", category)
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen bg-black text-white">

      <div className="mx-auto max-w-7xl px-8 py-20">

        <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
          El Baúl de los Recuerdos
        </p>

        <h1 className="mt-4 text-5xl font-black text-yellow-400">
          {category}
        </h1>

        <p className="mt-4 text-gray-400">
          {articles?.length ?? 0} artículos encontrados
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {articles?.map((item) => (

            <article
              key={item.id}
              className="overflow-hidden rounded-3xl bg-neutral-900"
            >

              {item.image_url && (
                <Image
                  src={item.image_url}
                  alt={item.title}
                  width={600}
                  height={350}
                  className="h-56 w-full object-cover"
                />
              )}

              <div className="p-6">

                <p className="text-sm text-gray-400">
                  {new Date(item.created_at).toLocaleDateString("es-ES")}
                </p>

                <h2 className="mt-3 text-2xl font-bold text-yellow-400">
                  {item.title}
                </h2>

                <div
                  className="
                    mt-4
                    line-clamp-4
                    text-gray-300
                    [&_strong]:font-bold
                    [&_h2]:font-bold
                    [&_h3]:font-bold
                  "
                >
                  {parse(item.excerpt || "")}
                </div>

                <Link
                  href={`/baul/${item.slug}`}
                  className="mt-6 inline-block font-bold text-yellow-400 hover:underline"
                >
                  Leer artículo →
                </Link>

              </div>

            </article>

          ))}

        </div>

        <div className="mt-16 border-t border-zinc-800 pt-8">

          <h2 className="mb-6 text-xl font-bold text-white">
            Explorar categorías
          </h2>

          <div className="flex flex-wrap gap-3">

            {BAUL_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/baul/categoria/${cat.slug}`}
                className={`rounded-full px-5 py-2 font-semibold transition ${
                  cat.slug === slug
                    ? "bg-yellow-400 text-black"
                    : "bg-zinc-800 text-white hover:bg-zinc-700"
                }`}
              >
                {cat.name}
              </Link>
            ))}

          </div>

        </div>

      </div>

    </main>
  );
}