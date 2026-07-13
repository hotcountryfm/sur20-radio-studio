"use client";

import { useRef, useState } from "react";
import { supabase } from "@/lib/supabase";

type Props = {
  value?: string;
  onUpload: (url: string) => void;
};

export default function ImageUploader({
  value,
  onUpload,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [uploading, setUploading] = useState(false);

  async function upload(file: File) {
    setUploading(true);

    const extension = file.name.split(".").pop();

    const fileName = `${Date.now()}.${extension}`;

    const { error } = await supabase.storage
      .from("news")
      .upload(fileName, file);

    if (error) {
      alert(error.message);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage
      .from("news")
      .getPublicUrl(fileName);

    onUpload(data.publicUrl);

    setUploading(false);
  }

  return (
    <div>

      <label className="mb-2 block font-semibold">
        Imagen destacada
      </label>

      <div
        onClick={() => inputRef.current?.click()}
        className="cursor-pointer rounded-xl border-2 border-dashed border-neutral-700 p-8 text-center hover:border-yellow-400"
      >

        {uploading
          ? "Subiendo imagen..."
          : "Pulsa aquí para seleccionar una imagen"}

      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => {
          if (e.target.files?.length) {
            upload(e.target.files[0]);
          }
        }}
      />

      {value && (

        <img
          src={value}
          alt=""
          className="mt-6 rounded-xl"
        />

      )}

    </div>
  );
}