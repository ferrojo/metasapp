import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Meta from "./meta";
import { Contexto } from "../../servicios/Memoria";
import { pedirMetas } from "../../servicios/Pedidos";



function Lista() {

    const [estado] = useContext(Contexto);

    return (
        <>
            {estado.orden.map(id => <Meta key={id} {...estado.objetos[id]}></Meta>)}
            <Outlet />
        </>
    );
}

export default Lista;
