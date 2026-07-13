"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAVIGATION } from "../lib/navigation";

type Props = {
  playing: boolean;
  toggle: () => void;
};

export default function MobileMenu({
  playing,
  toggle,
}: Props) {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden rounded-lg p-2 text-white hover:bg-white/10"
      >
        <Menu size={28} />
      </button>

      {open && (
        <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-lg">

          <div className="flex items-center justify-between p-6">

            <h2 className="text-2xl font-black text-yellow-400">
              SUR20 RADIO
            </h2>

            <button
              onClick={close}
              className="text-white"
            >
              <X size={32} />
            </button>

          </div>

          <nav className="mt-10 flex flex-col">

            {NAVIGATION.map((item) => (

              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="border-b border-white/10 px-8 py-6 text-2xl font-bold hover:bg-yellow-400 hover:text-black"
              >
                {item.label}
              </Link>

            ))}

          </nav>

          <div className="p-8">

            <button
              onClick={() => {
                toggle();
                close();
              }}
              className={`w-full rounded-xl py-5 text-xl font-bold ${
                playing
                  ? "bg-green-600"
                  : "bg-red-600"
              }`}
            >
              {playing
                ? "⏸ Pausar"
                : "▶ Escuchar en directo"}
            </button>

          </div>

        </div>
      )}
    </>
  );
}