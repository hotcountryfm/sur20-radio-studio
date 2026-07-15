"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import ImageUploader from "@/components/ImageUploader";
import RichTextEditor from "@/components/RichTextEditor";


export default function CreateNewsForm() {

  const router = useRouter();


  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("draft");
  const [imageUrl, setImageUrl] = useState("");
  const [saving, setSaving] = useState(false);



  async function guardar(e: React.FormEvent) {

    e.preventDefault();

    setSaving(true);


    const res = await fetch("/api/news", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({

        title,
        summary,
        content,
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



    router.push("/admin/noticias");
    router.refresh();

  }





  return (

    <form
      onSubmit={guardar}
      className="mt-12 space-y-8"
    >


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

          onChange={(e) =>
            setTitle(e.target.value)
          }

          className="w-full rounded-xl border border-neutral-700 bg-neutral-900 p-4"

        />

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

          onChange={(e) =>
            setStatus(e.target.value)
          }

          className="w-full rounded-xl border border-neutral-700 bg-neutral-900 p-4"

        >

          <option value="draft">
            Borrador
          </option>


          <option value="published">
            Publicada
          </option>


        </select>


      </div>





      <button

        type="submit"

        disabled={saving}

        className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-black hover:bg-yellow-300 disabled:opacity-50"

      >

        {saving
          ? "Guardando..."
          : "Guardar noticia"
        }


      </button>



    </form>

  );

}