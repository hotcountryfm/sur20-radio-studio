"use client";

import { useRouter } from "next/navigation";

type Props = {
  id: string;
};

export default function DeleteProgramButton({ id }: Props) {
  const router = useRouter();

  async function eliminar() {
    const ok = confirm("¿Seguro que quieres eliminar este programa?");

    if (!ok) return;

    const res = await fetch(`/api/programs/${id}`, {
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
      className="rounded-lg bg-red-600 px-4 py-2 hover:bg-red-700 transition"
    >
      🗑 Eliminar
    </button>
  );
}