import estilos from './Detalles.module.css';

function Detalles() {
    const opcionesdefrecuencia = ["al día", "a la semana", "al mes", "al año"];
    const iconos = ["🏃🏻‍♂️", "📚", "🚘", "🎬", "💻", "💰"];

    return (
        <div className="tarjeta">
            <form className="p-4">
                <label className="label">
                    Describe tu meta
                    <input
                        className="input pl-2"
                        placeholder="ej. Completar carreras"
                    />
                </label>
                <label className="label">
                    ¿Con que frecuencia deseas cumplir tu meta? <span>(ej. 1 vez por semana)</span>
                    <div className="flex mb-6">
                        <input
                            className="input mr-6"
                            type="number"
                        />
                        <select className="input">
                            {opcionesdefrecuencia.map(opcion => <option value={opcion}>{opcion}</option>)}
                            {/* <option value="día">al día</option>
                        <option value="semana">a la semana</option>
                        <option value="mes">al mes</option>
                        <option value="año">al año</option> */}
                        </select>
                    </div>
                </label>
                <label className="label">
                    ¿Cuantas veces deseas cumplir esta meta?
                    <input className="input" type="number" />
                </label>
                <label className="label">
                    ¿Tienes una fecha límite?
                    <input className="input pl-2" type="date" />
                </label>
                <label className="label">
                    ¿Cuantas veces haz completado ya esta meta?
                    <input className="input" type="number" />
                </label>
                <label className="label">
                    Escoge el icono para la meta
                    <select className="input pl-2">
                        {iconos.map(opcion => <option value={opcion}>{opcion}</option>)}
                    </select>
                </label>
            </form>
            <div className={estilos.botones}>
                <button className="boton boton--negro">Crear</button>
                <button className="boton boton--rojo">Cancelar</button>
            </div>
        </div>

    );
}

export default Detalles;