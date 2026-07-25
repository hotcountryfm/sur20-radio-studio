"use client";

import { useRouter } from "next/navigation";

export default function DeleteBaulButton({
  id,
}: {
  id: string;
}) {
  const router = useRouter();

  async function eliminar() {
    const ok = confirm(
      "¿Seguro que deseas eliminar este artículo?"
    );

    if (!ok) return;

    const res = await fetch(`/api/baul/${id}`, {
      method: "DELETE",
    });

    const json = await res.json();

    if (!json.success) {
      alert(json.error);
      return;
    }

    router.refresh();
  }

  return (
    <button
      onClick={eliminar}
      className="rounded-lg bg-red-600 px-4 py-2 hover:bg-red-700"
    >
      🗑 Eliminar
    </button>
  );
}