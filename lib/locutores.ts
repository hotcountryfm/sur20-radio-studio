import { supabase } from "./supabase";

export interface Locutor {
  id?: string;
  nombre: string;
  slug: string;
  foto?: string;
  banner?: string;
  biografia?: string;
  pais?: string;
  ciudad?: string;
  facebook?: string;
  instagram?: string;
  x?: string;
  tiktok?: string;
  web?: string;
  activo?: boolean;
  destacado?: boolean;
  orden?: number;
}

export async function obtenerLocutores() {
  return supabase
    .from("locutores")
    .select("*")
    .order("orden")
    .order("nombre");
}

export async function obtenerLocutor(id: string) {
  return supabase
    .from("locutores")
    .select("*")
    .eq("id", id)
    .single();
}

export async function crearLocutor(locutor: Locutor) {
  return supabase
    .from("locutores")
    .insert([locutor]);
}

export async function actualizarLocutor(
  id: string,
  datos: Partial<Locutor>
) {
  return supabase
    .from("locutores")
    .update(datos)
    .eq("id", id);
}

export async function eliminarLocutor(id: string) {
  return supabase
    .from("locutores")
    .delete()
    .eq("id", id);
}