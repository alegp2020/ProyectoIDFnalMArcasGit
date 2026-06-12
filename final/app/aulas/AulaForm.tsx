import { crearAula } from "../actions";

export function AulaForm() {
  return (
    <form action={crearAula}>
      <label>
        Nombre del Aula
        <input name="nombre" />
      </label>

      <label>
        Capacidad
        <input name="capacidad" />
      </label>

      <label>
        Ubicación
        <input name="ubicacion" />
      </label>

      <label>
        Recursos Disponibles
        <textarea name="recursos_disponibles" />
      </label>

      <label>
        Estado
        <input name="estado" />
      </label>

      <button type="submit">Guardar Aula</button>
    </form>
  );
}