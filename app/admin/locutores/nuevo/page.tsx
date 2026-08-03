"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import LocutorForm from "../components/LocutorForm";

export default function NuevoLocutorPage() {
  const router = useRouter();

  function crearSlug(texto: string) {
    return texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ñ/g, "n")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }

  async function guardar(data: {
    nombre: string;
    pais: string;
    ciudad: string;
    biografia: string;
  }) {
    const slug = crearSlug(data.nombre);

    const { error } = await supabase
      .from("locutores")
      .insert([
        {
          ...data,
          slug,
          activo: true,
          destacado: false,
          orden: 0,
        },
      ]);

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/admin/locutores");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-8 py-20">

        <h1 className="mb-10 text-5xl font-black text-yellow-400">
          Nuevo locutor
        </h1>

        <LocutorForm onSubmit={guardar} />

      </div>
    </main>
  );
}