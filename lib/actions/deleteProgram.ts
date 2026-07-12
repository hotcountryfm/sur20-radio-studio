"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function deleteProgram(formData: FormData) {
  const id = formData.get("id")?.toString();

  if (!id) {
    throw new Error("No se recibió el id del programa.");
  }

  const { error } = await supabase
    .from("programs")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/programas");
  revalidatePath("/programacion");
}