"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import LocutorForm from "../../components/LocutorForm";

export default function EditarLocutorPage() {
  const router = useRouter();
  const params = useParams();

  const id = params.id as string;

  const [loading, setLoading] = useState(true);

  const [locutor, setLocutor] = useState({
    nombre: "",
    pais: "",
    ciudad: "",
    biografia: "",
  });

  useEffect(() => {
    cargarLocutor();
  }, []);

  async function cargarLocutor() {
    const { data, error } = await supabase
      .from("locutores")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      alert(error.message);
      return;
    }

    setLocutor({
      nombre: data.nombre ?? "",
      pais: data.pais ?? "",
      ciudad: data.ciudad ?? "",
      biografia: data.biografia ?? "",
    });

    setLoading(false);
  }

  async function actualizar(data: {
    nombre: string;
    pais: string;
    ciudad: string;
    biografia: string;
  }) {
    const { error } = await supabase
      .from("locutores")
      .update(data)
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/admin/locutores");
    router.refresh();
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Cargando...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-8 py-20">

        <h1 className="mb-10 text-5xl font-black text-yellow-400">
          Editar locutor
        </h1>

        <LocutorForm
          initialData={locutor}
          onSubmit={actualizar}
        />

      </div>
    </main>
  );
}