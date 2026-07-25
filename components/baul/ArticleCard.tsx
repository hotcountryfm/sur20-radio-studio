import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { getCategorySlug } from "@/lib/baulCategories";

type Props = {
  article: any;
};

export default function ArticleCard({ article }: Props) {
  return (
    <article className="overflow-hidden rounded-2xl bg-neutral-900 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-yellow-500/20">

      <Link href={`/baul/${article.slug}`}>

        <div className="relative h-56 w-full overflow-hidden">

          <Image
            src={article.image_url || "/images/baul-default.jpg"}
            alt={article.title}
            fill
            className="object-cover transition duration-500 hover:scale-105"
          />

        </div>

      </Link>

      <div className="p-6">

        <Link
          href={`/baul/categoria/${getCategorySlug(article.category)}`}
          className="text-sm font-semibold text-yellow-500 hover:underline"
        >
          {article.category}
        </Link>

        <p className="mt-2 text-sm text-gray-400">
          {new Date(article.created_at).toLocaleDateString("es-ES")}
        </p>

        <Link href={`/baul/${article.slug}`}>
          <h2 className="mt-3 text-2xl font-bold text-yellow-400 transition hover:text-yellow-300">
            {article.title}
          </h2>
        </Link>

        <div
          className="
            mt-4
            line-clamp-4
            text-gray-300
            [&_h2]:text-xl
            [&_h2]:font-bold
            [&_h3]:text-lg
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
          className="mt-6 inline-block font-bold text-yellow-400 hover:underline"
        >
          Leer artículo →
        </Link>

      </div>

    </article>
  );
}