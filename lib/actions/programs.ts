"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProgram(formData: FormData): Promise<void> {
  const title = formData.get("title")?.toString() ?? "";
  const day = formData.get("day")?.toString() ?? "";
  const presenter = formData.get("presenter")?.toString() ?? "";
  const start_time = formData.get("start_time")?.toString() ?? "";
  const end_time = formData.get("end_time")?.toString() ?? "";
  const description = formData.get("description")?.toString() ?? "";

  const { error } = await supabase
    .from("programs")
    .insert([
      {
        title,
        day,
        presenter,
        start_time,
        end_time,
        description,
      },
    ]);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/programacion");
  revalidatePath("/admin/programas");

  redirect("/admin/programas");
}