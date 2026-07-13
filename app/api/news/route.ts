import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  const body = await request.json();

  const { data, error } = await supabase
    .from("news")
    .insert({
      title: body.title,
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