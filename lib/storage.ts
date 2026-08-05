import { supabase } from "./supabase";

export async function subirImagen(
  bucket: string,
  archivo: File
): Promise<string> {
  const extension = archivo.name.split(".").pop();

  const nombreArchivo =
    crypto.randomUUID() + "." + extension;

  const ruta = nombreArchivo;

  const { error } = await supabase.storage
    .from(bucket)
    .upload(ruta, archivo, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    throw error;
  }

  const {
    data: { publicUrl },
  } = supabase.storage
    .from(bucket)
    .getPublicUrl(ruta);

  return publicUrl;
}