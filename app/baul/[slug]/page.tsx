import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import type { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import ShareButtons from "@/components/ShareButtons";
import { getCategorySlug } from "@/lib/baulCategories";


type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const { data: article } = await supabase
    .from("baul_articles")
    .select("title,excerpt,image_url,slug")
    .eq("slug", slug)
    .single();

  if (!article) {
    return {
      title: "Artículo no encontrado | SUR20 Radio",
    };
  }

  const url = `https://sur20radio.com/baul/${article.slug}`;
  const img =
    article.image_url || "https://sur20radio.com/og-image.png";

  const desc = (article.excerpt || "")
    .replace(/<[^>]*>/g, " ")
    .trim()
    .slice(0, 160);

  return {
    title: `${article.title} | El Baúl de los Recuerdos`,
    description: desc,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.title,
      description: desc,
      url,
      siteName: "SUR20 Radio",
      type: "article",
      images: [{ url: img }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: desc,
      images: [img],
    },
  };
}

export default async function BaulArticle({
  params,
}: Props) {
  const { slug } = await params;

  const { data: article, error } = await supabase
    .from("baul_articles")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !article) {
    return (
      <main className="min-h-screen bg-black text-white p-10">
        <h1>Artículo no encontrado</h1>

        <Link href="/baul">
          ← Volver al Baúl
        </Link>
      </main>
    );
  }

  const { data: related } = await supabase
  .from("baul_articles")
  .select("id,title,slug,created_at,category")
  .eq("status", "published")
  .eq("category", article.category)
  .neq("id", article.id)
  .order("created_at", { ascending: false })
  .limit(3);

  const articleUrl =
    `https://sur20radio.com/baul/${article.slug}`;

  const image =
    article.image_url ||
    "https://sur20radio.com/og-image.png";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    image: [image],
    datePublished: article.created_at,
    dateModified:
      article.updated_at || article.created_at,
    mainEntityOfPage: articleUrl,
    author: {
      "@type": "Person",
      name: article.author || "JM. Torres",
    },
    publisher: {
      "@type": "Organization",
      name: "SUR20 Radio",
    },
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <article className="mx-auto max-w-5xl px-8 py-20">

      {article.category && (
  <Link
    href={`/baul/categoria/${getCategorySlug(article.category)}`}
    className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-yellow-500 hover:underline"
  >
    {article.category}
  </Link>
)}

        {article.image_url && (
          <Image
            src={article.image_url}
            alt={article.title}
            width={1200}
            height={700}
            className="mb-10 rounded-3xl object-cover"
            priority
          />
        )}

        <p className="text-gray-400">
          {new Date(article.created_at).toLocaleDateString(
            "es-ES"
          )}
        </p>

        <h1 className="mt-4 text-5xl font-black text-yellow-400">
          {article.title}
        </h1>

        {article.excerpt && (
          <div className="prose prose-invert mt-8 max-w-none text-2xl text-gray-300">
            {parse(article.excerpt)}
          </div>
        )}

        <div
          className="
            prose
            prose-invert
            mt-10
            max-w-none
            text-lg
            leading-8
            [&_iframe]:w-full
            [&_iframe]:aspect-video
            [&_iframe]:h-auto
            [&_iframe]:rounded-xl
            [&_img]:max-w-full
            [&_img]:h-auto
            [&_table]:block
            [&_table]:overflow-x-auto
          "
        >
          {parse(article.content || "")}
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8">
          <p className="font-bold text-yellow-400">
            JM. Torres
          </p>

          <p className="text-gray-400">
            Director de SUR20 Radio
          </p>
        </div>

        <ShareButtons
          title={article.title}
          url={articleUrl}
        />

        <Link
          href="/baul"
          className="mt-12 inline-block text-yellow-400 hover:underline"
        >
          ← Volver al Baúl
        </Link>

        {related && related.length > 0 && (
          <section className="mt-20 border-t border-zinc-800 pt-10">
            <h2 className="mb-8 text-3xl font-bold text-yellow-400">
              También te puede interesar
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {related.map((item: any) => (
                <Link
                  key={item.id}
                  href={`/baul/${item.slug}`}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
                >
                  <p className="mb-3 text-sm text-gray-400">
                    {new Date(
                      item.created_at
                    ).toLocaleDateString("es-ES")}
                  </p>

                  <h3 className="font-bold text-white">
                    {item.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
}