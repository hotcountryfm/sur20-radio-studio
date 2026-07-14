"use client";

import { Mail, Radio, Send, Mic2 } from "lucide-react";

const TUNEIN_URL =
  "https://tunein.com/radio/RADIO-SUR-VEINTE-s354977/";

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-black px-6 pb-32 pt-32 text-white">

      <div className="mx-auto max-w-6xl">

        {/* Cabecera */}

        <section className="mb-12 text-center">

          <Radio className="mx-auto mb-5 text-yellow-400" size={52} />

          <h1 className="text-4xl font-black uppercase md:text-6xl">
            Contacta con
            <span className="block text-yellow-400">
              SUR20 RADIO
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-gray-300">
            Ponte en contacto con nosotros para enviarnos propuestas,
            ideas, colaboraciones o simplemente saludarnos.
          </p>

        </section>


        <section className="grid gap-8 md:grid-cols-2">


          {/* Información */}

          <div className="rounded-3xl border border-yellow-500/20 bg-white/5 p-8">

            <h2 className="mb-5 text-2xl font-bold text-yellow-400">
              SUR20 RADIO
            </h2>


            <p className="leading-relaxed text-gray-300">
              Radio online 24 horas con la mejor música de los años 80,
              90 y 2000.
              <br /><br />
              Disfruta de nuestra programación estés donde estés.
            </p>


            <div className="mt-8 space-y-4">


              <a
                href={TUNEIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl bg-yellow-400 px-5 py-3 font-bold text-black transition hover:scale-105"
              >
                <Radio size={20} />
                Escuchar en TuneIn
              </a>


              <div className="flex items-center gap-3 text-gray-300">

                <Mail className="text-yellow-400" size={22} />

                contacto@sur20radio.com

              </div>


            </div>

          </div>



          {/* Formulario */}

          <div className="rounded-3xl border border-yellow-500/20 bg-white/5 p-8">


            <h2 className="mb-6 text-2xl font-bold">
              Envíanos un mensaje
            </h2>


            <form
              action="https://formspree.io/f/TU_ID"
              method="POST"
              className="space-y-4"
            >

              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                required
                className="w-full rounded-xl bg-black/70 p-4 outline-none focus:ring-2 focus:ring-yellow-400"
              />


              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                required
                className="w-full rounded-xl bg-black/70 p-4 outline-none focus:ring-2 focus:ring-yellow-400"
              />


              <input
                type="text"
                name="asunto"
                placeholder="Asunto"
                required
                className="w-full rounded-xl bg-black/70 p-4 outline-none focus:ring-2 focus:ring-yellow-400"
              />


              <textarea
                name="mensaje"
                placeholder="Mensaje"
                rows={5}
                required
                className="w-full rounded-xl bg-black/70 p-4 outline-none focus:ring-2 focus:ring-yellow-400"
              />


              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 py-4 font-bold transition hover:bg-red-700"
              >

                <Send size={20} />

                ENVIAR MENSAJE

              </button>


            </form>


          </div>


        </section>



        {/* Colaboradores */}

        <section className="mt-10 rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-8 text-center">


          <Mic2
            size={42}
            className="mx-auto mb-4 text-yellow-400"
          />


          <h2 className="text-3xl font-black">
            ¿Quieres hacer radio?
          </h2>


          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Buscamos nuevas voces, programas y colaboradores.
            Si tienes un proyecto radiofónico, queremos escucharte.
          </p>


        </section>


      </div>

    </main>
  );
}