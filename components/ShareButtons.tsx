"use client";

import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaTelegramPlane,
  FaXTwitter,
  FaEnvelope,
  FaLink,
  FaShareNodes,
} from "react-icons/fa6";

type Props = {
  title: string;
  url: string;
};

export default function ShareButtons({ title, url }: Props) {
  const [canShare, setCanShare] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCanShare(typeof navigator !== "undefined" && !!navigator.share);
  }, []);

  const share = async () => {
    if (!canShare) return;

    try {
      await navigator.share({
        title,
        url,
      });
    } catch {
      // El usuario canceló el diálogo de compartir
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-10 border-t pt-8">
      <h3 className="mb-4 text-lg font-semibold">
        Comparte esta noticia
      </h3>

      <div className="flex flex-wrap gap-3">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:opacity-90"
        >
          <FaFacebookF />
          Facebook
        </a>

        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            title
          )}&url=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white transition hover:opacity-90"
        >
          <FaXTwitter />
          X
        </a>

        <a
          href={`https://wa.me/?text=${encodeURIComponent(
            `${title} ${url}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white transition hover:opacity-90"
        >
          <FaWhatsapp />
          WhatsApp
        </a>

        <a
          href={`https://t.me/share/url?url=${encodeURIComponent(
            url
          )}&text=${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-white transition hover:opacity-90"
        >
          <FaTelegramPlane />
          Telegram
        </a>

        <a
          href={`mailto:?subject=${encodeURIComponent(
            title
          )}&body=${encodeURIComponent(url)}`}
          className="flex items-center gap-2 rounded-lg bg-gray-700 px-4 py-2 text-white transition hover:opacity-90"
        >
          <FaEnvelope />
          Email
        </a>

        <button
          onClick={copyLink}
          className="flex items-center gap-2 rounded-lg bg-gray-200 px-4 py-2 transition hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
        >
          <FaLink />
          Copiar enlace
        </button>

        {canShare && (
          <button
            onClick={share}
            className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white transition hover:opacity-90"
          >
            <FaShareNodes />
            Compartir
          </button>
        )}
      </div>

      {copied && (
        <div className="mt-4 rounded-lg border border-green-500 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-600 dark:text-green-400">
          ✅ Enlace copiado al portapapeles
        </div>
      )}
    </div>
  );
}