"use client";

import { useState } from "react";

import ImageUploader from "@/components/ImageUploader";
import RichTextEditor from "@/components/RichTextEditor";

type Props = {
  article: {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    image_url: string;
    category: string;
    status: string;
  };
};

export default function EditBaulForm({ article }: Props) {
  const [title, setTitle] = useState(article.title);
  const [summary, setSummary] = useState(article.excerpt ?? "");
  const [content, setContent] = useState(article.content ?? "");
  const [category, setCategory] = useState(article.category ?? "¿Qué fue de...?");
  const [status, setStatus] = useState(article.status);
  const [imageUrl, setImageUrl] = useState(article.image_url ?? "");
  const [saving, setSaving] = useState(false);

  async function guardar(e: React.FormEvent) {
    e.preventDefault();

    setSaving(true);

    const res = await fetch(`/api/baul/${article.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        excerpt: summary,
        content,
        category,
        status,
        image_url: imageUrl,
      }),
    });

    const json = await res.json();

    setSaving(false);

    if (!json.success) {
      alert(json.error);
      return;
    }

    window.location.href = "/admin/baul";
  }

  return (
    <form onSubmit={guardar} className="mt-12 space-y-8">

      <ImageUploader
        value={imageUrl}
        onUpload={setImageUrl}
      />

      <div>
        <label className="mb-2 block font-semibold">
          Título
        </label>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-xl border border-neutral-700 bg-neutral-900 p-4"
        />
      </div>

      <div>
        <label className="mb-2 block font-semibold">
          Categoría
        </label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-xl border border-neutral-700 bg-neutral-900 p-4"
        >
          <option>¿Qué fue de...?</option>
          <option>La historia detrás de la canción</option>
          <option>Discos que hicieron historia</option>
          <option>Grandes conciertos</option>
          <option>Un día como hoy</option>
          <option>¿Sabías que...?</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block font-semibold">
          Resumen
        </label>

        <RichTextEditor
          value={summary}
          onChange={setSummary}
        />
      </div>

      <div>
        <label className="mb-2 block font-semibold">
          Contenido
        </label>

        <RichTextEditor
          value={content}
          onChange={setContent}
        />
      </div>

      <div>
        <label className="mb-2 block font-semibold">
          Estado
        </label>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full rounded-xl border border-neutral-700 bg-neutral-900 p-4"
        >
          <option value="draft">Borrador</option>
          <option value="published">Publicado</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={saving}
        className="rounded-xl bg-purple-600 px-8 py-4 font-bold text-white hover:bg-purple-700 disabled:opacity-50"
      >
        {saving ? "Guardando..." : "Guardar cambios"}
      </button>

    </form>
  );
}