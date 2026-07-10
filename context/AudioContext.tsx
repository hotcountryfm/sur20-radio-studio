"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  ReactNode,
} from "react";

import { STATION } from "../lib/constants";

type AudioContextType = {
  playing: boolean;
  volume: number;
  play: () => Promise<void>;
  pause: () => void;
  toggle: () => void;
  setVolume: (value: number) => void;
};

const AudioContext = createContext<AudioContextType | null>(null);

export function AudioProvider({
  children,
}: {
  children: ReactNode;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [playing, setPlaying] = useState(false);
  const [volume, setVolumeState] = useState(100);

  const play = async () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(STATION.streamUrl);
      audioRef.current.preload = "none";
      audioRef.current.volume = volume / 100;
    }

    try {
      await audioRef.current.play();
      setPlaying(true);
    } catch (err) {
      console.error(err);
    }
  };

  const pause = () => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    setPlaying(false);
  };

  const toggle = () => {
    playing ? pause() : play();
  };

  const setVolume = (value: number) => {
    setVolumeState(value);

    if (audioRef.current) {
      audioRef.current.volume = value / 100;
    }
  };

  return (
    <AudioContext.Provider
      value={{
        playing,
        volume,
        play,
        pause,
        toggle,
        setVolume,
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