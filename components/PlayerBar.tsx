"use client";

import { useRef, useState } from "react";

export default function PlayerBar() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="http://hoth.alonhosting.com:5430/stream"
      />

      <div className="fixed bottom-0 left-0 right-0 bg-neutral-950 border-t border-yellow-500/20 px-6 py-4 flex items-center justify-between z-50">

        <div>
          <h3 className="font-bold text-yellow-400">
            SUR20 RADIO
          </h3>

          <p className="text-sm text-gray-400">
            Tu compañía, tu voz
          </p>
        </div>

        <button
          onClick={togglePlay}
          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-bold"
        >
          {playing ? "⏸ Pausar" : "▶ Escuchar"}
        </button>

      </div>
    </>
  );
}