import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import { supabase } from "@/lib/supabase";
import { getCategorySlug } from "@/lib/baulCategories";

export default async function LatestBaul() {
  const { data: articles } = await supabase
    .from("baul_articles")
    .select("*")
    .eq("status", "published")
    .order("created_at", { ascending: false })
    .limit(3);

  if (!articles || articles.length === 0) {
    return null;
  }

  const [featured, ...secondary] = articles;

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        <div>

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Nostalgia musical
          </span>

          <h2 className="mt-2 text-4xl font-black text-white">
            📼 El Baúl de los Recuerdos
          </h2>

          <p className="mt-3 max-w-2xl text-gray-400">
            Historias, artistas, canciones y discos que marcaron una época.
          </p>

        </div>

        <Link
          href="/baul"
          className="w-fit rounded-full border border-yellow-400 px-6 py-3 font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
        >
          Ver todos los artículos →
        </Link>

      </div>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">

        <article className="overflow-hidden rounded-3xl bg-neutral-900 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-500/20">

          {featured.image_url && (
            <Image
              src={featured.image_url}
              alt={featured.title}
              width={1200}
              height={700}
              className="h-[420px] w-full object-cover"
              priority
            />
          )}

          <div className="p-8">

            <Link
  href={`/baul/categoria/${getCategorySlug(featured.category)}`}
  className="text-sm font-semibold text-yellow-500 hover:underline"
>
  {featured.category}
</Link>

            <p className="mt-2 text-sm text-gray-400">
              {new Date(featured.created_at).toLocaleDateString("es-ES")}
            </p>

            <h3 className="mt-4 text-4xl font-black text-yellow-400">
              {featured.title}
            </h3>

            <div
              className="
                mt-6
                text-lg
                leading-8
                text-gray-300
                line-clamp-4
                [&_strong]:font-bold
                [&_h2]:font-bold
                [&_h3]:font-bold
              "
            >
              {parse(featured.excerpt || "")}
            </div>

            <Link
              href={`/baul/${featured.slug}`}
              className="mt-8 inline-flex items-center rounded-full bg-yellow-400 px-6 py-3 font-bold text-black transition hover:scale-105"
            >
              Leer artículo →
            </Link>

          </div>

        </article>

        <div className="flex flex-col gap-8">

          {secondary.map((item) => (

            <article
              key={item.id}
              className="overflow-hidden rounded-3xl bg-neutral-900 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-500/20"
            >

              {item.image_url && (
                <Image
                  src={item.image_url}
                  alt={item.title}
                  width={600}
                  height={350}
                  className="h-52 w-full object-cover"
                />
              )}

              <div className="p-6">

                <Link
  href={`/baul/categoria/${getCategorySlug(item.category)}`}
  className="text-sm font-semibold text-yellow-500 hover:underline"
>
  {item.category}
</Link>

                <p className="mt-2 text-sm text-gray-400">
                  {new Date(item.created_at).toLocaleDateString("es-ES")}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <div
                  className="
                    mt-4
                    line-clamp-3
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
                  className="mt-6 inline-flex items-center font-bold text-yellow-400 transition hover:translate-x-1"
                >
                  Leer artículo →
                </Link>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}