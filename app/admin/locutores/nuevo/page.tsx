"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { subirImagen } from "@/lib/storage";
import LocutorForm from "../components/LocutorForm";

type FormData = {
  nombre: string;
  pais: string;
  ciudad: string;
  biografia: string;
  foto?: File | null;
};

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

  async function guardar(data: FormData) {
    try {
      let fotoUrl: string | null = null;

      // Subir imagen si existe
      if (data.foto) {
        fotoUrl = await subirImagen(
          "locutores",
          data.foto
        );
      }

      const slug = crearSlug(data.nombre);

      const { error } = await supabase
        .from("locutores")
        .insert([
          {
            nombre: data.nombre,
            slug,
            pais: data.pais,
            ciudad: data.ciudad,
            biografia: data.biografia,
            foto: fotoUrl,
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

    } catch (error) {
      console.error(error);
      alert("Error subiendo la imagen.");
    }
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