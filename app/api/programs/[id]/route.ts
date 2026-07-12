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
    .from("programs")
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
    .from("programs")
    .update({
      title: body.title,
      day: body.day,
      presenter: body.presenter,
      start_time: body.start_time,
      end_time: body.end_time,
      description: body.description,
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