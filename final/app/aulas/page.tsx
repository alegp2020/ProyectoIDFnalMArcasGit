import { obtenerAulas } from "@/lib/db" 
import { AulaForm } from "./AulaForm"   

export default async function Page() {
  const aulas = await obtenerAulas()

  return (
    <main>
      <h1>Gestión de aulas</h1>

      <AulaForm />

      <section>
        <h2>Aulas guardadas</h2>

        {aulas.length === 0 ? (
          <p>Todavía no hay aulas.</p>
        ) : (
          <ul>
            {aulas.map((aula, index) => (
              <li key={index}>
                <strong>{aula.nombre}</strong>
                <p>Capacidad: {aula.capacidad} personas</p>
                <p>Ubicación: {aula.ubicacion}</p>
                <p>Recursos: {aula.recursos}</p>
                <p>Estado: {aula.estado}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}
