"use client";

import { useRef, useState } from "react";

type Props = {
  label?: string;
  value?: string;
  onChange: (file: File | null) => void;
};

export default function ImageUploader({
  label = "Imagen",
  value,
  onChange,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState<string | null>(
    value ?? null
  );

  function seleccionarArchivo(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    onChange(file);

    const url = URL.createObjectURL(file);

    setPreview(url);
  }

  return (
    <div className="space-y-4">

      <label className="block font-semibold">
        {label}
      </label>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={seleccionarArchivo}
        className="hidden"
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="rounded-lg bg-neutral-800 px-5 py-3 hover:bg-neutral-700"
      >
        📷 Seleccionar imagen
      </button>

      {preview && (
        <img
          src={preview}
          alt="Vista previa"
          className="mt-4 h-52 rounded-xl border border-neutral-700 object-cover"
        />
      )}

    </div>
  );
}