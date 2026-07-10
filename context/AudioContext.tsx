"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  ReactNode,
} from "react";

type AudioContextType = {
  playing: boolean;
  play: () => Promise<void>;
  pause: () => void;
  toggle: () => void;
};

const AudioContext = createContext<AudioContextType | null>(null);

export function AudioProvider({
  children,
}: {
  children: ReactNode;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  // ✅ Stream HTTPS
  const streamUrl = "https://hoth.alonhosting.com/radiosur";

  const play = async () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(streamUrl);
      audioRef.current.volume = 1;
      audioRef.current.preload = "none";
    }

    try {
      await audioRef.current.play();
      setPlaying(true);
    } catch (err) {
      console.error("Error al reproducir:", err);
    }
  };

  const pause = () => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    setPlaying(false);
  };

  const toggle = () => {
    if (playing) {
      pause();
    } else {
      play();
    }
  };

  return (
    <AudioContext.Provider
      value={{
        playing,
        play,
        pause,
        toggle,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);

  if (!context) {
    throw new Error("useAudio debe usarse dentro de AudioProvider");
  }

  return context;
}