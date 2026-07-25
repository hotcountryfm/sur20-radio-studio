import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

import FeaturedArticle from "@/components/baul/FeaturedArticle";
import ArticleCard from "@/components/baul/ArticleCard";
import CategorySection from "@/components/baul/CategorySection";

export const dynamic = "force-dynamic";

export default async function BaulPage() {
  const { data: articles, error } = await supabase
    .from("baul_articles")
    .select("*")
    .eq("status", "published")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main className="min-h-screen bg-black text-white p-10">
        <h1 className="text-3xl font-bold text-red-500">
          Error cargando los artículos
        </h1>

        <p className="mt-4">{error.message}</p>
      </main>
    );
  }

  const featured = articles?.[0];
  const remainingArticles = articles?.slice(1) ?? [];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-8 py-20">

        {/* HERO */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">

          <Image
            src="/images/baul-header.png"
            alt="El Baúl de los Recuerdos"
            width={1600}
            height={500}
            priority
            className="h-[420px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

          <div className="absolute inset-0 flex items-center">

            <div className="max-w-3xl px-10">

              <p className="text-sm uppercase tracking-[0.4em] text-yellow-400">
                SUR20 RADIO
              </p>

              <h1 className="mt-3 text-5xl font-black text-white">
                📼 El Baúl de los Recuerdos
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-200">
                Un viaje por la historia de la música.
                Artistas inolvidables,
                discos legendarios,
                conciertos históricos
                y canciones que siguen emocionándonos décadas después.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <Link
                  href="#articulos"
                  className="rounded-full bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-300"
                >
                  Explorar artículos
                </Link>

                <Link
                  href="#categorias"
                  className="rounded-full border border-yellow-400 px-6 py-3 font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
                >
                  Explorar categorías
                </Link>

              </div>

            </div>

          </div>

        </div>

        <FeaturedArticle article={featured} />

        <section
          id="articulos"
          className="mt-20"
        >

          <div className="mb-10">

            <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
              Últimos artículos
            </p>

            <h2 className="mt-2 text-4xl font-black">
              Sigue explorando el Baúl
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {remainingArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
              />
            ))}

          </div>

        </section>

        <div id="categorias">
          <CategorySection />
        </div>

      </div>
    </main>
  );
}