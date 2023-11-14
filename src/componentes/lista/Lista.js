import Meta from "./meta";

const listaMock = [
    {
        "id": "1",
        "detalles": "Correr por 30 minutos",
        "periodo": "día",
        "eventos": 1,
        "icono": "🏃🏻‍♂️",
        "meta": 365,
        "plazo": "2030-01-01",
        "completado": 100
    },
    {
        "id": "2",
        "detalles": "Leer libros",
        "periodo": "año",
        "eventos": 6,
        "icono": "📚",
        "meta": 12,
        "plazo": "2030-01-01",
        "completado": 0
    },
    {
        "id": "3",
        "detalles": "Viajar a pueblos mágicos",
        "periodo": "mes",
        "eventos": 1,
        "icono": "🚘",
        "meta": 60,
        "plazo": "2030-01-01",
        "completado": 30
    },
    {
        "id": "4",
        "detalles": "Ver películas",
        "periodo": "semana",
        "eventos": 1,
        "icono": "🎬",
        "meta": 30,
        "plazo": "2030-01-01",
        "completado": 5
    },
];

function Lista() {
    return (
        listaMock.map(meta => <Meta {...meta}></Meta>)
    );
}

export default Lista;
