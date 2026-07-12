import { createProgram } from "@/lib/actions/programs";

export default function NuevoProgramaPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <div className="mx-auto max-w-3xl px-8 py-20">

        <h1 className="text-5xl font-black text-yellow-400">
          Nuevo programa
        </h1>

        <p className="mt-3 text-gray-400">
          Añade un nuevo programa a SUR20 Radio.
        </p>

        <form action={createProgram} className="mt-12 space-y-6">

          <div>
            <label className="mb-2 block font-semibold">
              Título
            </label>

            <input
              name="title"
              type="text"
              required
              className="w-full rounded-xl border border-neutral-700 bg-neutral-900 p-4 outline-none focus:border-yellow-400"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block font-semibold">
                Día
              </label>

              <input
                name="day"
                type="text"
                required
                className="w-full rounded-xl border border-neutral-700 bg-neutral-900 p-4 outline-none focus:border-yellow-400"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Presentador
              </label>

              <input
                name="presenter"
                type="text"
                className="w-full rounded-xl border border-neutral-700 bg-neutral-900 p-4 outline-none focus:border-yellow-400"
              />
            </div>

          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block font-semibold">
                Hora inicio
              </label>

              <input
                name="start_time"
                type="time"
                required
                className="w-full rounded-xl border border-neutral-700 bg-neutral-900 p-4 outline-none focus:border-yellow-400"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Hora fin
              </label>

              <input
                name="end_time"
                type="time"
                required
                className="w-full rounded-xl border border-neutral-700 bg-neutral-900 p-4 outline-none focus:border-yellow-400"
              />
            </div>

          </div>

          <div>

            <label className="mb-2 block font-semibold">
              Descripción
            </label>

            <textarea
              name="description"
              rows={5}
              className="w-full rounded-xl border border-neutral-700 bg-neutral-900 p-4 outline-none focus:border-yellow-400"
            />

          </div>

          <button
            type="submit"
            className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-black transition hover:scale-105"
          >
            Guardar programa
          </button>

        </form>

      </div>

    </main>
  );
}