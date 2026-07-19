
import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import { supabase } from "@/lib/supabase";
export const dynamic = "force-dynamic";


export default async function NoticiasPage() {


  const { data: news, error } = await supabase
    .from("news")
    .select("*")
    .eq("status", "published")
    .order("created_at", { ascending: false });



  if (error) {

    return (

      <main className="min-h-screen bg-black text-white p-10">

        <h1 className="text-3xl font-bold text-red-500">
          Error cargando noticias
        </h1>


        <p className="mt-4">
          {error.message}
        </p>


      </main>

    );

  }



  return (

    <main className="min-h-screen bg-black text-white">


      <div className="mx-auto max-w-7xl px-8 py-20">


        <h1 className="text-5xl font-black text-yellow-400">
          Noticias
        </h1>


        <p className="mt-3 text-gray-400">
          Últimas noticias de SUR20 Radio
        </p>



        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">


          {news?.map((item) => (


            <article
              key={item.id}
              className="overflow-hidden rounded-2xl bg-neutral-900 shadow-lg"
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

                  {new Date(item.created_at)
                    .toLocaleDateString("es-ES")}

                </p>




                <h2 className="mt-3 text-2xl font-bold text-yellow-400">

                  {item.title}

                </h2>





                <div
                  className="
                    mt-4
                    text-gray-300
                    line-clamp-4
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

                  {parse(item.summary || "")}


                </div>




console.log("SLUG NOTICIA:", item.slug);
                <Link

                  href={`/noticias/${item.slug}`}

                  className="mt-6 inline-block font-bold text-yellow-400 hover:underline"

                >

                  Leer noticia →

                </Link>



              </div>


            </article>


          ))}



        </div>


      </div>


    </main>

  );

}