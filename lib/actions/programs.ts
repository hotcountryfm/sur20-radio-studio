"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function createProgram(formData: FormData) {
  const title = formData.get("title")?.toString() ?? "";
  const day = formData.get("day")?.toString() ?? "";
  const presenter = formData.get("presenter")?.toString() ?? "";
  const start_time = formData.get("start_time")?.toString() ?? "";
  const end_time = formData.get("end_time")?.toString() ?? "";
  const description = formData.get("description")?.toString() ?? "";

  const { data, error } = await supabase
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
    ])
    .select();

  if (error) {
    return {
      success: false,
      error,
    };
  }

  revalidatePath("/programacion");
  revalidatePath("/admin/programas");

  return {
    success: true,
    data,
  };
}