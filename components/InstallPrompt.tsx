"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
  }>;
}

export default function InstallPrompt() {
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = (event: Event) => {
      event.preventDefault();

      setInstallPrompt(event as BeforeInstallPromptEvent);
      setVisible(true);
    };

    window.addEventListener(
      "beforeinstallprompt",
      handler
    );

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handler
      );
    };
  }, []);


  const installApp = async () => {
    if (!installPrompt) return;

    await installPrompt.prompt();

    await installPrompt.userChoice;

    setInstallPrompt(null);
    setVisible(false);
  };


  if (!visible) return null;


  return (
    <div className="fixed bottom-6 left-4 right-4 z-[100] rounded-3xl border border-yellow-500/30 bg-black/95 p-5 shadow-2xl backdrop-blur-xl md:left-auto md:right-6 md:w-96">

      <div className="flex items-center gap-4">

        <Image
          src="/icons/icon-192.png"
          alt="SUR20 RADIO"
          width={64}
          height={64}
          className="rounded-2xl"
        />


        <div>

          <h3 className="font-black text-yellow-400">
            Instala SUR20 RADIO
          </h3>

          <p className="text-sm text-gray-300">
            Escucha nuestra radio desde tu pantalla de inicio.
          </p>

        </div>

      </div>


      <div className="mt-5 flex gap-3">


        <button
          onClick={installApp}
          className="flex-1 rounded-xl bg-yellow-400 py-3 font-black text-black transition hover:scale-105"
        >
          INSTALAR
        </button>


        <button
          onClick={() => setVisible(false)}
          className="rounded-xl border border-gray-600 px-5 text-gray-300"
        >
          AHORA NO
        </button>


      </div>

    </div>
  );
}