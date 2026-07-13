import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

// ELIMINAR
export async function DELETE(
  request: Request,
  { params }: Params
) {
  const { id } = await params;

  const { error } = await supabase
    .from("news")
    .delete()
    .eq("id", id);

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
  });
}

// EDITAR
export async function PUT(
  request: Request,
  { params }: Params
) {
  const { id } = await params;

  const body = await request.json();

  const { data, error } = await supabase
    .from("news")
    .update({
      title: body.title,
      summary: body.summary,
      content: body.content,
      status: body.status,
    })
    .eq("id", id)
    .select();

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
}