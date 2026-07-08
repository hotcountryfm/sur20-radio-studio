"use client";

import { useRef, useState } from "react";

export default function Player() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlayer = () => {
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

      <button
        onClick={togglePlayer}
        className="mt-10 bg-red-600 hover:bg-red-700 transition-all duration-300 px-10 py-5 rounded-full text-xl font-bold shadow-xl hover:scale-105"
      >
        {playing ? "⏸️ Pausar emisión" : "▶ Escuchar en Directo"}
      </button>
    </>
  );
}