import { useEffect, useState } from "react";
import estilos from './Detalles.module.css';


function Detalles() {
    const [form, setForm] = useState({
        detalles: '',
        eventos: 1,
        periodo: 'semana',
        icono: '🏃🏻‍♂️',
        meta: 52,
        plazo: '2030-01-01',
        completado: 0
    });

    const { detalles, eventos, periodo, icono, meta, plazo, completado } = form;
    const onChange = (event, prop) =>{
        setForm(estado => ({...estado, [prop]: event.target.value}));
        console.log(form);
    }

    useEffect(() => {
        // console.log(form);
    }, [form]);

    const crear = async() =>{
        console.log(form);
    }

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
                        value={detalles}
                        onChange={e => onChange(e, 'detalles')}
                    />
                </label>
                <label className="label">
                    ¿Con que frecuencia deseas cumplir tu meta? <span>(ej. 1 vez por semana)</span>
                    <div className="flex mb-6">
                        <input
                            className="input mr-6 pl-2"
                            type="number"
                            value={eventos}
                            onChange={e => onChange(e, 'eventos')}
                        />
                        <select
                            className="input pl-2"
                            value={periodo}
                            onChange={e => onChange(e, 'periodo')}
                        >
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
                    <input
                        className="input pl-2"
                        type="number"
                        value={meta}
                        onChange={e => onChange(e, 'meta')}
                    />
                </label>
                <label className="label">
                    ¿Tienes una fecha límite?
                    <input
                        className="input pl-2"
                        type="date"
                        value={plazo}
                        onChange={e => onChange(e, 'plazo')}
                    />
                </label>
                <label className="label">
                    ¿Cuantas veces haz completado ya esta meta?
                    <input
                        className="input pl-2"
                        type="number"
                        value={completado}
                        onChange={e => onChange(e, 'completado')}
                    />
                </label>
                <label className="label">
                    Escoge el icono para la meta
                    <select
                        className="input pl-2"
                        value={icono}
                        onChange={e => onChange(e, 'icono')}
                    >
                        {iconos.map(opcion => <option value={opcion}>{opcion}</option>)}
                    </select>
                </label>
            </form>
            <div className={estilos.botones}>
                <button 
                className="boton boton--negro"
                onClick={crear}
                >Crear</button>
                <button className="boton boton--rojo">Cancelar</button>
            </div>
        </div>

    );
}

export default Detalles;