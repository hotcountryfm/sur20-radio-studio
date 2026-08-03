"use client";

import { useState } from "react";

type Props = {
  initialData?: {
    nombre?: string;
    pais?: string;
    ciudad?: string;
    biografia?: string;
  };

  onSubmit: (data: {
    nombre: string;
    pais: string;
    ciudad: string;
    biografia: string;
  }) => Promise<void>;
};

export default function LocutorForm({
  initialData,
  onSubmit,
}: Props) {
  const [nombre, setNombre] = useState(initialData?.nombre ?? "");
  const [pais, setPais] = useState(initialData?.pais ?? "");
  const [ciudad, setCiudad] = useState(initialData?.ciudad ?? "");
  const [biografia, setBiografia] = useState(
    initialData?.biografia ?? ""
  );

  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    await onSubmit({
      nombre,
      pais,
      ciudad,
      biografia,
    });

    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label className="mb-2 block">
          Nombre
        </label>

        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full rounded-lg bg-neutral-900 p-4"
          required
        />
      </div>

      <div>
        <label className="mb-2 block">
          País
        </label>

        <input
          value={pais}
          onChange={(e) => setPais(e.target.value)}
          className="w-full rounded-lg bg-neutral-900 p-4"
        />
      </div>

      <div>
        <label className="mb-2 block">
          Ciudad
        </label>

        <input
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
          className="w-full rounded-lg bg-neutral-900 p-4"
        />
      </div>

      <div>
        <label className="mb-2 block">
          Biografía
        </label>

        <textarea
          rows={6}
          value={biografia}
          onChange={(e) => setBiografia(e.target.value)}
          className="w-full rounded-lg bg-neutral-900 p-4"
        />
      </div>

      <button
        disabled={loading}
        className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-black hover:bg-yellow-300"
      >
        {loading ? "Guardando..." : "Guardar locutor"}
      </button>
    </form>
  );
}