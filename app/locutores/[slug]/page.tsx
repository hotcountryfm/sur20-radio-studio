import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function LocutorPage({ params }: Props) {
  const { slug } = await params;

  const { data: locutor, error } = await supabase
    .from("locutores")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !locutor) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-[350px_1fr]">

          <div>
            <img
              src={locutor.foto || "/locutores/default.png"}
              alt={locutor.nombre}
              className="w-full rounded-3xl object-cover shadow-2xl"
            />
          </div>

          <div>

            <div className="flex items-center gap-4">

              <h1 className="text-5xl font-black text-yellow-400">
                {locutor.nombre}
              </h1>

              {locutor.bandera && (
                <span className="text-4xl">
                  {locutor.bandera}
                </span>
              )}

            </div>

            <p className="mt-4 text-xl text-gray-400">
              {locutor.ciudad}
              {locutor.ciudad && locutor.pais ? " · " : ""}
              {locutor.pais}
            </p>

            {locutor.programa && (
              <div className="mt-8 rounded-2xl border border-yellow-500/30 bg-neutral-900 p-6">

                <h2 className="text-sm uppercase tracking-widest text-yellow-400">
                  Programa
                </h2>

                <p className="mt-2 text-2xl font-bold">
                  {locutor.programa}
                </p>

              </div>
            )}

            <div className="prose prose-invert mt-10 max-w-none">

              <p className="whitespace-pre-line text-lg leading-8 text-gray-300">
                {locutor.biografia}
              </p>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}