"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LogoutButton() {
  const router = useRouter();

  async function logout() {
    await supabase.auth.signOut();

    router.push("/login");
    router.refresh();
  }

  return (
    <button
      onClick={logout}
      className="rounded-xl bg-red-600 px-6 py-3 font-bold text-white transition hover:bg-red-700"
    >
      🚪 Cerrar sesión
    </button>
  );
}