"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function login(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6">

      <div className="w-full max-w-md rounded-3xl border border-yellow-500/20 bg-neutral-900 p-10">

        <h1 className="text-center text-4xl font-black text-yellow-400">
          SUR20 RADIO STUDIO
        </h1>

        <p className="mt-3 text-center text-gray-400">
          Acceso al panel de administración
        </p>

        <form
          onSubmit={login}
          className="mt-10 space-y-6"
        >

          <div>

            <label className="mb-2 block text-white">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-neutral-700 bg-neutral-800 p-4 text-white outline-none focus:border-yellow-400"
            />

          </div>

          <div>

            <label className="mb-2 block text-white">
              Contraseña
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-neutral-700 bg-neutral-800 p-4 text-white outline-none focus:border-yellow-400"
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-yellow-400 py-4 font-bold text-black transition hover:bg-yellow-300 disabled:opacity-50"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>

        </form>

      </div>

    </main>
  );
}