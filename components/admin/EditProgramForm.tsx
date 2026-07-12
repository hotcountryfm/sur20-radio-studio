"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Program = {
  id: string;
  title: string;
  day: string;
  presenter: string;
  start_time: string;
  end_time: string;
  description: string;
};

export default function EditProgramForm({
  program,
}: {
  program: Program;
}) {
  const router = useRouter();

  const [title, setTitle] = useState(program.title);
  const [day, setDay] = useState(program.day);
  const [presenter, setPresenter] = useState(program.presenter);
  const [startTime, setStartTime] = useState(program.start_time);
  const [endTime, setEndTime] = useState(program.end_time);
  const [description, setDescription] = useState(program.description);
  const [saving, setSaving] = useState(false);

  async function guardar(e: React.FormEvent) {
    e.preventDefault();

    setSaving(true);

    const res = await fetch(`/api/programs/${program.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        day,
        presenter,
        start_time: startTime,
        end_time: endTime,
        description,
      }),
    });

    const json = await res.json();

    setSaving(false);

    if (!json.success) {
      alert(json.error);
      return;
    }

    router.push("/admin/programas");
    router.refresh();
  }

  return (
    <form onSubmit={guardar} className="mt-12 space-y-6">

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

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <label className="mb-2 block font-semibold">
            Día
          </label>

          <input
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="w-full rounded-xl border border-neutral-700 bg-neutral-900 p-4"
          />

        </div>

        <div>

          <label className="mb-2 block font-semibold">
            Presentador
          </label>

          <input
            value={presenter}
            onChange={(e) => setPresenter(e.target.value)}
            className="w-full rounded-xl border border-neutral-700 bg-neutral-900 p-4"
          />

        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <label className="mb-2 block font-semibold">
            Hora inicio
          </label>

          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full rounded-xl border border-neutral-700 bg-neutral-900 p-4"
          />

        </div>

        <div>

          <label className="mb-2 block font-semibold">
            Hora fin
          </label>

          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="w-full rounded-xl border border-neutral-700 bg-neutral-900 p-4"
          />

        </div>

      </div>

      <div>

        <label className="mb-2 block font-semibold">
          Descripción
        </label>

        <textarea
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full rounded-xl border border-neutral-700 bg-neutral-900 p-4"
        />

      </div>

      <div className="flex gap-4">

        <button
          type="submit"
          disabled={saving}
          className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-black hover:bg-yellow-300 disabled:opacity-50"
        >
          {saving ? "Guardando..." : "Guardar cambios"}
        </button>

      </div>

    </form>
  );
}