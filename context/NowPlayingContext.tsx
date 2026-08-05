"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type NowPlaying = {
  artist: string;
  song: string;
  cover: string;
};

const NowPlayingContext = createContext<NowPlaying>({
  artist: "SUR20 RADIO",
  song: "Tu compañía, tu voz",
  cover: "/icons/icon-512.png",
});

export function NowPlayingProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [artist, setArtist] = useState("SUR20 RADIO");
  const [song, setSong] = useState("Tu compañía, tu voz");
  const [cover, setCover] = useState("/icons/icon-512.png");

  useEffect(() => {
    let mounted = true;

    async function loadSong() {
      try {
        const res = await fetch("/api/now-playing", {
          cache: "no-store",
        });

        if (!res.ok) return;

        const data = await res.json();

        if (!mounted) return;

        setArtist(data.artist ?? "SUR20 RADIO");
        setSong(data.song ?? "Tu compañía, tu voz");
        setCover(data.cover ?? "/icons/icon-512.png");

      } catch (error) {
        console.warn("Now Playing no disponible:", error);
      }
    }

    loadSong();

    const interval = setInterval(loadSong, 10000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <NowPlayingContext.Provider
      value={{
        artist,
        song,
        cover,
      }}
    >
      {children}
    </NowPlayingContext.Provider>
  );
}

export function useNowPlaying() {
  return useContext(NowPlayingContext);
}