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

async function generateUniqueSlug(title: string) {
  const baseSlug = createSlug(title);
  let slug = baseSlug;
  let counter = 2;

  while (true) {
    const { data } = await supabase
      .from("news")
      .select("id")
      .eq("slug", slug)
      .maybeSingle();

    if (!data) {
      return slug;
    }

    slug = `${baseSlug}-${counter}`;
    counter++;
  }
}

export async function POST(request: Request) {
  const body = await request.json();

  const slug = await generateUniqueSlug(body.title);

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