"use server";

import { revalidatePath } from "next/cache";
import { insertarAula } from "@/lib/db";

export async function crearAula(formData: FormData) {
  const n = formData.get("nombre");
  const c = formData.get("capacidad");
  const u = formData.get("ubicacion");
  const r = formData.get("recursos_disponibles");
  const e = formData.get("estado");

  if (typeof n !== "string" || typeof c !== "string"|| typeof u !== "string"|| typeof r !== "string"|| typeof e !== "string") {
    return;
  }

if (typeof n !== "string" || typeof c !== "string"|| typeof u !== "string"|| typeof r !== "string"|| typeof e !== "string") {
    return;
  }

  //converision a numero
  let cP = parseInt(c,10);

  await insertarAula(
    n.trim(), 
    cP, 
    u.trim(),       
    r.trim(),       
    e.trim()
  );


  revalidatePath("/reserva_aula");
}
