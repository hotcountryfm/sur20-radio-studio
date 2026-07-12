"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getAlbumCover } from "../lib/itunes";

type CoverArtProps = {
  artist: string;
  song: string;
  size?: number;
};

export default function CoverArt({
  artist,
  song,
  size = 220,
}: CoverArtProps) {
  const [coverUrl, setCoverUrl] = useState("/logo.png");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCover() {
      setLoading(true);

      const cover = await getAlbumCover(artist, song);

      if (cover) {
        setCoverUrl(cover);
      } else {
        setCoverUrl("/logo.png");
      }

      setLoading(false);
    }

    loadCover();
  }, [artist, song]);

  return (
    <div
      className="overflow-hidden rounded-3xl border border-yellow-500/20 bg-neutral-900 shadow-xl"
      style={{
        width: size,
        height: size,
      }}
    >
      <Image
        src={coverUrl}
        alt={`${artist} - ${song}`}
        width={size}
        height={size}
        className={`h-full w-full object-cover transition-all duration-700 ${
          loading ? "scale-110 blur-md" : "scale-100 blur-0"
        }`}
        unoptimized={coverUrl.startsWith("https")}
      />
    </div>
  );
}