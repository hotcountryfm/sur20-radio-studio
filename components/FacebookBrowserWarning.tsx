"use client";

import { useEffect, useState } from "react";
import { ExternalLink, X } from "lucide-react";

export default function FacebookBrowserWarning() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("fb-browser-warning");

    if (dismissed) return;

    const ua = navigator.userAgent || "";

    const isFacebook =
      ua.includes("FBAN") ||
      ua.includes("FBAV") ||
      ua.includes("Instagram") ||
      ua.includes("Messenger");

    if (isFacebook) {
      setVisible(true);
    }
  }, []);

  const close = () => {
    localStorage.setItem("fb-browser-warning", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-[9999] mx-auto max-w-md rounded-2xl border border-yellow-500 bg-zinc-900 p-5 shadow-2xl">
      <button
        onClick={close}
        className="absolute right-3 top-3 text-gray-400 hover:text-white"
      >
        <X size={20} />
      </button>

      <h3 className="mb-3 text-lg font-bold text-yellow-400">
        🎧 Escucha SUR20 Radio
      </h3>

      <p className="text-sm leading-6 text-gray-300">
        Has abierto la web desde el navegador interno de Facebook o Instagram.
        Ese navegador puede impedir la reproducción de la radio.
      </p>

      <div className="mt-4 rounded-lg bg-black/40 p-3 text-sm text-gray-200">
        <strong>Para escuchar la emisora:</strong>

        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>Pulsa el menú ⋮ de Facebook.</li>
          <li>Selecciona <strong>Abrir en el navegador</strong>.</li>
          <li>Vuelve a pulsar ▶ Escuchar.</li>
        </ol>
      </div>

      <button
        onClick={close}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-500 px-4 py-3 font-bold text-black transition hover:bg-yellow-400"
      >
        <ExternalLink size={18} />
        Entendido
      </button>
    </div>
  );
}