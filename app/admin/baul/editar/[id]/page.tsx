import { notFound } from "next/navigation";

import EditBaulForm from "@/components/admin/EditBaulForm";
import { supabase } from "@/lib/supabase";

export default async function EditarBaul({
  params,
}: {
  params: { id: string };
}) {
  const { data: article } = await supabase
    .from("baul_articles")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!article) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="mb-8 text-4xl font-bold">
        Editar artículo
      </h1>

      <EditBaulForm article={article} />
    </main>
  );
}