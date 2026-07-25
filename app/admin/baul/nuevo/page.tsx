import Link from "next/link";
import CreateBaulForm from "@/components/admin/CreateBaulForm";

export default function NuevoArticuloBaulPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl px-8 py-20">

        <h1 className="text-5xl font-black text-yellow-400">
          Nuevo artículo
        </h1>

        <p className="mt-3 text-gray-400">
          Publica un nuevo artículo en El Baúl de los Recuerdos.
        </p>

        <CreateBaulForm />

        <div className="mt-8">
          <Link
            href="/admin/baul"
            className="text-yellow-400 hover:underline"
          >
            ← Volver al Baúl
          </Link>
        </div>

      </div>
    </main>
  );
}