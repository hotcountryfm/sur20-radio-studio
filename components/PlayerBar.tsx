'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  Pause,
  Play,
  Radio,
  Volume2,
  ExternalLink,
} from 'lucide-react';

import { useAudio } from '../context/AudioContext';
import { useNowPlaying } from '../context/NowPlayingContext';
import { STATION } from '../lib/constants';

export default function PlayerBar() {
  const { playing, toggle, volume, setVolume } = useAudio();
  const { artist, song } = useNowPlaying();

  const [visible, setVisible] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current < 100) {
        setVisible(true);
      } else if (current > lastScroll.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScroll.current = current;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer
      className={`fixed bottom-0 inset-x-0 z-50 border-t border-yellow-500/20 bg-gradient-to-r from-black via-zinc-900 to-black/95 backdrop-blur-xl transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-3 md:flex-row md:items-center md:justify-between">
        <div className="flex min-w-0 items-center gap-4">
          <Image
            src="/logo.png"
            alt={STATION.name}
            width={64}
            height={64}
            className="rounded-2xl border border-yellow-500/30 shadow-lg"
          />

          <div className="min-w-0">
            <div className="text-xs font-bold uppercase tracking-[3px] text-yellow-400">
              {STATION.name}
            </div>

            <div className="truncate font-bold text-white">
              {artist}
            </div>

            <div className="truncate text-sm text-yellow-300">
              {song}
            </div>

            <div className="mt-1 flex items-center gap-2 text-xs text-red-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500"></span>
              <Radio size={13} />
              EN DIRECTO
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-3">
          <a
            href="https://tunein.com/radio/RADIO-SUR-VEINTE-s354977/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-yellow-400 px-4 py-2 text-sm text-yellow-300 transition hover:bg-yellow-400 hover:text-black"
          >
            Escuchar en TuneIn
            <ExternalLink size={16} />
          </a>

          <div className="hidden items-center gap-2 sm:flex">
            <Volume2
              className="text-yellow-400"
              size={18}
            />

            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) =>
                setVolume(Number(e.target.value))
              }
              className="w-28 accent-yellow-400"
            />
          </div>

          <button
            onClick={toggle}
            className={`flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl transition hover:scale-110 ${
              playing ? 'bg-green-600' : 'bg-red-600'
            }`}
          >
            {playing ? (
              <Pause size={28} />
            ) : (
              <Play
                size={28}
                className="ml-1"
              />
            )}
          </button>
        </div>
      </div>
    </footer>
  );
}