import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  console.log("ID:", id);

  const resultado = await supabase
    .from("programs")
    .delete()
    .eq("id", id)
    .select();

  console.log(resultado);

  return NextResponse.json(resultado);
}