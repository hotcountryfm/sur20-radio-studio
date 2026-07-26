import type { Metadata } from "next";

import HeroBanner from "@/components/sections/HeroBanner";
import LocutorCard from "@/components/LocutorCard";
import StatsCard from "@/components/ui/StatsCard";

import { locutores } from "@/data/locutores";

import {
  Users,
  Globe2,
  RadioTower,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nuestros Locutores | SUR20 RADIO",
  description:
    "Conoce al equipo de locutores de SUR20 RADIO.",
};

export default function LocutoresPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <HeroBanner
        badge="SUR20 RADIO"
        title="Nuestros Locutores"
        subtitle="La voz de SUR20 RADIO está formada por profesionales apasionados por la música y la comunicación, emitiendo desde distintos lugares del mundo."
      >
        <div className="grid gap-6 md:grid-cols-3">

          <StatsCard
            icon={<Users size={42} />}
            value={String(locutores.length)}
            label="Locutores"
          />

          <StatsCard
            icon={<Globe2 size={42} />}
            value="3"
            label="Países"
          />

          <StatsCard
            icon={<RadioTower size={42} />}
            value="24/7"
            label="Emisión"
          />

        </div>
      </HeroBanner>

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

          {locutores.map((locutor) => (
            <LocutorCard
              key={locutor.id}
              locutor={locutor}
            />
          ))}

        </div>

      </section>

      <section className="border-t border-slate-800">

        <div className="mx-auto max-w-4xl px-6 py-20 text-center">

          <h2 className="text-4xl font-bold">
            ¿Quieres formar parte de SUR20 RADIO?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Si la radio es tu pasión y tienes un proyecto que compartir,
            estaremos encantados de conocerte.
          </p>

          <a
            href="/contacto"
            className="mt-10 inline-flex rounded-xl bg-sky-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-sky-400"
          >
            Contactar con SUR20 RADIO
          </a>

        </div>

      </section>

    </main>
  );
}