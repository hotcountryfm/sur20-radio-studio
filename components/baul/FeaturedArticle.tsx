import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { getCategorySlug } from "@/lib/baulCategories";

type Props = {
  article: any;
};

export default function FeaturedArticle({ article }: Props) {
  if (!article) return null;

  return (
    <section className="mt-16 overflow-hidden rounded-3xl bg-neutral-900 shadow-xl transition hover:shadow-yellow-500/20">

      <div className="grid lg:grid-cols-2">

        <div className="relative min-h-[420px]">
          <Image
            src={article.image_url || "/images/baul-default.jpg"}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-10 lg:p-14">

          <Link
            href={`/baul/categoria/${getCategorySlug(article.category)}`}
            className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400 hover:underline"
          >
            {article.category}
          </Link>

          <p className="mt-3 text-sm text-gray-400">
            {new Date(article.created_at).toLocaleDateString("es-ES")}
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight text-white">
            {article.title}
          </h2>

          <div
            className="
              mt-6
              text-lg
              leading-8
              text-gray-300
              line-clamp-5
              [&_h2]:text-2xl
              [&_h2]:font-bold
              [&_h3]:text-xl
              [&_h3]:font-bold
              [&_ul]:list-disc
              [&_ul]:pl-5
              [&_ol]:list-decimal
              [&_ol]:pl-5
            "
          >
            {parse(article.excerpt || "")}
          </div>

          <Link
            href={`/baul/${article.slug}`}
            className="mt-8 inline-flex w-fit rounded-full bg-yellow-400 px-8 py-4 font-bold text-black transition hover:bg-yellow-300"
          >
            Leer artículo →
          </Link>

        </div>

      </div>

    </section>
  );
}