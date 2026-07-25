import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const slug = slugify(body.title);

    const { data, error } = await supabase
      .from("baul_articles")
      .insert({
        title: body.title,
        slug,
        excerpt: body.excerpt,
        content: body.content,
        image_url: body.image_url,
        category: body.category,
        author: body.author ?? "JM. Torres",
        seo_title: body.seo_title ?? body.title,
        seo_description: body.seo_description ?? body.excerpt,
        status: body.status ?? "draft",
        published_at:
          body.status === "published"
            ? new Date().toISOString()
            : null,
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Error al crear el artículo.",
      },
      { status: 500 }
    );
  }
}