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

  // NUEVOS CAMPOS
  const image = formData.get("image")?.toString() ?? "";
  const locutor_url = formData.get("locutor_url")?.toString() ?? "";

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
        image,
        locutor_url,
        active: true,
      },
    ]);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/programacion");
  revalidatePath("/admin/programas");

  redirect("/admin/programas");
}