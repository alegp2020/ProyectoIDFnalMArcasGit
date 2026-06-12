import { obtenerAulas } from "@/lib/db"
import { AulaForm } from "./AulaForm"

export default async function Page() {
    const aulas = await obtenerAulas()

    return (
        <main >
            <h1 className="text-center bg-fuchsia-200 text-4xl p-2 text-gray-900">Gestión de aulas</h1>

            <div className="w-full md:w-1/2">
                <AulaForm />
            </div>


            <section className="w-full md:w-1/2">
                <h2>Aulas guardadas</h2>

                {aulas.length === 0 ? (
                    <p>Todavía no hay aulas.</p>
                ) : (
                    <ul>
                        {aulas.map((aula, i) => (
                            <li key={i}>
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
