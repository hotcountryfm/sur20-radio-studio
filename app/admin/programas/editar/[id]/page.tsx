import Link from "next/link";
import { supabase } from "@/lib/supabase";
import EditProgramForm from "@/components/admin/EditProgramForm";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditarProgramaPage({ params }: Props) {
  const { id } = await params;

  const { data: program, error } = await supabase
    .from("programs")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !program) {
    return (
      <main className="min-h-screen bg-black text-white p-10">
        <h1 className="text-3xl font-bold text-red-500">
          Programa no encontrado
        </h1>

        <Link
          href="/admin/programas"
          className="mt-6 inline-block text-yellow-400 hover:underline"
        >
          ← Volver
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">

      <div className="mx-auto max-w-3xl px-8 py-20">

        <h1 className="text-5xl font-black text-yellow-400">
          Editar programa
        </h1>

        <p className="mt-3 text-gray-400">
          Modifica los datos del programa.
        </p>

        <EditProgramForm program={program} />

        <div className="mt-8">
          <Link
            href="/admin/programas"
            className="text-yellow-400 hover:underline"
          >
            ← Cancelar y volver
          </Link>
        </div>

      </div>

    </main>
  );
}