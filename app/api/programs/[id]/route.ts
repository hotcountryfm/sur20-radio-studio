import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export async function DELETE(
  request: Request,
  { params }: Params
) {
  const { id } = await params;

  console.log("================================");
  console.log("DELETE PROGRAMA");
  console.log("ID:", id);

  const { data, error, count } = await supabase
    .from("programs")
    .delete({
      count: "exact",
    })
    .eq("id", id)
    .select();

  console.log("RESULTADO:");
  console.log(data);

  console.log("COUNT:");
  console.log(count);

  console.log("ERROR:");
  console.log(error);

  console.log("================================");

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
    count,
  });
}

export async function PUT(
  request: Request,
  { params }: Params
) {
  const { id } = await params;

  const body = await request.json();

  const { data, error } = await supabase
    .from("programs")
    .update(body)
    .eq("id", id)
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