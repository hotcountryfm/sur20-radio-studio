"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import ImageUploader from "@/components/ImageUploader";

type News = {
  id: string;
  title: string;
  summary: string | null;
  content: string | null;
  image_url: string | null;
  status: string;
};

export default function EditNewsForm({
  news,
}: {
  news: News;
}) {
  const router = useRouter();

  const [title, setTitle] = useState(news.title);
  const [summary, setSummary] = useState(news.summary ?? "");
  const [content, setContent] = useState(news.content ?? "");
  const [imageUrl, setImageUrl] = useState(news.image_url ?? "");
  const [status, setStatus] = useState(news.status);
  const [saving, setSaving] = useState(false);

  async function guardar(e: React.FormEvent) {
    e.preventDefault();

    setSaving(true);

    const res = await fetch(`/api/news/${news.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        summary,
        content,
        image_url: imageUrl,
        status,
      }),
    });

    const json = await res.json();

    setSaving(false);

    if (!json.success) {
      alert(json.error);
      return;
    }

    router.push("/admin/noticias");
    router.refresh();
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
          Resumen
        </label>

        <textarea
          rows={3}
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="w-full rounded-xl border border-neutral-700 bg-neutral-900 p-4"
        />
      </div>

      <div>
        <label className="mb-2 block font-semibold">
          Contenido
        </label>

        <textarea
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full rounded-xl border border-neutral-700 bg-neutral-900 p-4"
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
          <option value="published">Publicada</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={saving}
        className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-black hover:bg-yellow-300 disabled:opacity-50"
      >
        {saving ? "Guardando..." : "Guardar cambios"}
      </button>

    </form>
  );
}