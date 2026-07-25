import Link from "next/link";
import {
  BAUL_CATEGORIES,
} from "@/lib/baulCategories";

export default function CategorySection() {
  return (
    <section className="mt-24">

      <div className="mb-10">

        <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
          Explorar
        </p>

        <h2 className="mt-2 text-4xl font-black text-white">
          Categorías del Baúl
        </h2>

        <p className="mt-4 max-w-3xl text-gray-400">
          Descubre historias, discos, conciertos y curiosidades
          recorriendo todas las secciones de El Baúl de los Recuerdos.
        </p>

      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {BAUL_CATEGORIES.map((category) => (

          <Link
            key={category.slug}
            href={`/baul/categoria/${category.slug}`}
            className="
              rounded-2xl
              border
              border-zinc-800
              bg-neutral-900
              p-6
              transition
              hover:-translate-y-1
              hover:border-yellow-400
              hover:bg-neutral-800
            "
          >

            <p className="text-xl font-bold text-yellow-400">
              {category.name}
            </p>

            <p className="mt-3 text-sm text-gray-400">
              Explorar artículos de esta categoría →
            </p>

          </Link>

        ))}

      </div>

    </section>
  );
}