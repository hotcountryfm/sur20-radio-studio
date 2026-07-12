"use client";

type DeleteButtonProps = {
  onDelete: () => Promise<void>;
};

export default function DeleteButton({
  onDelete,
}: DeleteButtonProps) {
  async function handleDelete() {
    const ok = window.confirm(
      "¿Seguro que quieres eliminar este programa?"
    );

    if (!ok) return;

    await onDelete();
  }

  return (
    <button
      onClick={handleDelete}
      className="rounded-lg bg-red-600 px-4 py-2 hover:bg-red-700"
    >
      🗑 Eliminar
    </button>
  );
}