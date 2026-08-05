import { supabase } from "@/lib/supabase";
import LocutorCard from "@/components/LocutorCard";

export const metadata = {
  title: "Locutores | SUR20 RADIO",
};

export default async function LocutoresPage() {
  const { data: locutores, error } = await supabase
    .from("locutores")
    .select("*")
    .eq("activo", true)
    .order("orden", { ascending: true });

  if (error) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-3xl text-red-500">
          Error cargando locutores
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black">

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-16 text-center">

          <h1 className="text-5xl font-black text-white md:text-6xl">
            Nuestro Equipo
          </h1>

          <div className="mx-auto mt-5 h-1 w-40 rounded-full bg-sky-500" />

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Las voces que cada día hacen posible SUR20 RADIO.
            Música, entretenimiento y pasión por la radio.
          </p>

        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

          {locutores?.map((locutor) => (

            <LocutorCard
              key={locutor.id}
              locutor={locutor}
            />

          ))}

        </div>

      </section>

    </main>
  );
}