"use client";

import { useRef } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Youtube from "@tiptap/extension-youtube";

import { supabase } from "@/lib/supabase";


type Props = {
  value: string;
  onChange: (value: string) => void;
};


export default function RichTextEditor({
  value,
  onChange,
}: Props) {


  const imageInputRef = useRef<HTMLInputElement>(null);



  const editor = useEditor({

    extensions: [

      StarterKit.configure({
        heading: {
          levels: [2, 3],
        },
      }),


      Link.configure({
        openOnClick: false,
        autolink: true,
        linkOnPaste: true,
      }),


      Image.configure({
        inline: false,
      }),


      Youtube.configure({
        controls: true,
        nocookie: true,
      }),

    ],



    content: value,


    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },


    editorProps: {

      attributes: {

        class:
          "min-h-[250px] rounded-xl border border-neutral-700 bg-neutral-900 p-4 text-white outline-none [&_h2]:text-3xl [&_h2]:font-black [&_h2]:text-yellow-400 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-yellow-300 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_img]:rounded-xl",

      },

    },


  });




  if (!editor) {
    return null;
  }





  async function subirImagen(file: File) {


    const extension = file.name.split(".").pop();

    const fileName = `${Date.now()}.${extension}`;


    const { error } = await supabase.storage
      .from("news")
      .upload(fileName, file);



    if (error) {

      alert(error.message);
      return;

    }



    const { data } = supabase.storage
      .from("news")
      .getPublicUrl(fileName);



    editor
      .chain()
      .focus()
      .setImage({
        src: data.publicUrl,
      })
      .run();


  }





  function añadirEnlace() {


    const url = window.prompt(
      "Introduce la URL del enlace:",
      "https://"
    );


    if (!url) return;



    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({
        href: url,
      })
      .run();

  }





  function añadirYoutube() {


    const url = window.prompt(
      "Pega la URL de YouTube:"
    );


    if (!url) return;



    editor
      .chain()
      .focus()
      .setYoutubeVideo({
        src: url,
      })
      .run();

  }






  return (

    <div className="space-y-3">


      <input
        ref={imageInputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => {

          const file = e.target.files?.[0];

          if (file) {
            subirImagen(file);
          }

        }}
      />



      <div className="flex flex-wrap gap-2 rounded-xl border border-neutral-700 bg-neutral-950 p-3">



        <button
          type="button"
          onClick={() =>
            editor.chain()
              .focus()
              .toggleBold()
              .run()
          }
          className="rounded-lg bg-neutral-800 px-3 py-2 font-bold"
        >
          B
        </button>



        <button
          type="button"
          onClick={() =>
            editor.chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className="rounded-lg bg-neutral-800 px-3 py-2 italic"
        >
          I
        </button>




        <button
          type="button"
          onClick={añadirEnlace}
          className="rounded-lg bg-neutral-800 px-3 py-2"
        >
          🔗
        </button>




        <button
          type="button"
          onClick={() =>
            imageInputRef.current?.click()
          }
          className="rounded-lg bg-neutral-800 px-3 py-2"
        >
          🖼️
        </button>




        <button
          type="button"
          onClick={añadirYoutube}
          className="rounded-lg bg-red-700 px-3 py-2"
        >
          ▶️
        </button>




        <button
          type="button"
          onClick={() =>
            editor.chain()
              .focus()
              .toggleBulletList()
              .run()
          }
          className="rounded-lg bg-neutral-800 px-3 py-2"
        >
          • Lista
        </button>




        <button
          type="button"
          onClick={() =>
            editor.chain()
              .focus()
              .toggleOrderedList()
              .run()
          }
          className="rounded-lg bg-neutral-800 px-3 py-2"
        >
          1 2 3
        </button>




        <button
          type="button"
          onClick={() =>
            editor.chain()
              .focus()
              .toggleHeading({
                level: 2,
              })
              .run()
          }
          className="rounded-lg bg-neutral-800 px-3 py-2"
        >
          H2
        </button>




        <button
          type="button"
          onClick={() =>
            editor.chain()
              .focus()
              .toggleHeading({
                level: 3,
              })
              .run()
          }
          className="rounded-lg bg-neutral-800 px-3 py-2"
        >
          H3
        </button>



      </div>




      <EditorContent editor={editor} />



    </div>

  );

}