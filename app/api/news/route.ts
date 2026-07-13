import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

function createSlug(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function POST(request: Request) {
  const body = await request.json();

  const slug = createSlug(body.title);

  const { data, error } = await supabase
    .from("news")
    .insert({
      title: body.title,
      slug,
      summary: body.summary,
      content: body.content,
      image_url: body.image_url,
      status: body.status,
    })
    .select();

  if (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }

  return NextResponse.json({
    success: true,
    data,
  });
}