import mysql from "mysql2/promise";

export type aula = {
  nombre: string;
  capacidad: number;
  ubicacion: string;
  recursos_disponibles: string;
  estado: "activa" | "inactiva";
};

export type reserva = {
  aula_id: number;
  persona: string;
  grupo: string;
  fecha: string;
  hora_inicio: string;
  hora_fin: string;
  motivo: string;
  estado: "pendiente" | "confirmada" | "cancelada";
};
export async function abrirConexion() {
  return mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT) || 3307
  });
}

export async function obtenerAulas() {
  const conexion = await abrirConexion()
  const [filas] = await conexion.execute(
    "SELECT nombre,capacidad,ubicacion,recursos_disponibles,estado FROM aula ORDER BY nombre DESC",
  )
  await conexion.end()
  return filas as aula[]
};

export async function insertarAula(nombre: string,capacidad:number,ubicacion:string,recursos_disponibles:string, estado:string) {
  const conexion = await abrirConexion()
  try {
     await conexion.execute(
      "INSERT INTO aula (nombre, capacidad, ubicacion, recursos_disponibles, estado) VALUES (?, ?, ?, ?, ?)",
      [nombre, capacidad, ubicacion, recursos_disponibles, estado],
    )
  } finally {
    await conexion.end()
  }
};
