import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from '@apollo/client';

import { GET_PROYECTOS, GET_PROYECTO } from '../graphql/proyectos/querys';
import { CREAR_PROYECTO } from "../graphql/proyectos/mutations";

/* FUNCION PRINCIPAL QUE SE EJECUTA, DESDE ACA SE LLAMAN LAS DEMAS FUNCIONES Y SE DEFINEN LOS ESTADOS */
const GestionProyectos = () => {

    /* ESTADOS QUE PERMITEN CONTROLAR LA VISIBILIDAD DE LAS INTERFACES */
    // const [mostrarTabla, setMostrarTabla] = useState(true);
    // const [textoBoton, setTextoBoton] = useState('Ver Listado de Proyectos' );

    /* PLANTILLA PARA HACER LA PETICION GET DE PROYECTOS. EL RETORNO SE ALMACENA EN data */
    const { data } = useQuery(GET_PROYECTOS);

    useEffect(() => {
        console.log("data servidor", data);
    }, [data]);

    /* SE DEFINE EL TEXTO DEL BOTON, INICIALMENTE SERÁ "Registrar Proyecto" Y MOSTRARÁ LA INTERFAZ DE TABLA*/
    // useEffect(()=>{
    //     if (mostrarTabla) {
    //         setTextoBoton('Registrar Proyecto');
    //     }
    //     else {
    //         setTextoBoton('Ver Listado de Proyectos');
    //     }
    // },[mostrarTabla]);

    /* EN ESTE RETURN VA EL BOTON QUE PERMITE CAMBIAR DE INTERFAZ. 
    AL DAR CLIC SOBRE ESTE, CAMBIA EL ESTADO DE mostrarTabla, LLAMANDO ASI AL FORMULARIO*/
    return (
        <div className="body-text">

            <h1>Lista de Proyectos</h1>
            <table>
                <thead>
                    <tr>
                        <th>_id</th>
                        <th>nombre</th>
                        <th>presupuesto</th>
                        <th>fechaInicio</th>
                        <th>fechaFin</th>
                        <th>estado</th>
                        <th>fase</th>
                    </tr>
                </thead>
                <tbody>
                    {data && 
                        data.Proyectos.map((p) => {
                            return (
                                <tr key = { p._id }>
                                    <td>{ p._id }</td>
                                    <td>{ p.nombre }</td>
                                    <td>{ p.presupuesto }</td>
                                    <td>{ p.fechaInicio }</td>
                                    <td>{ p.fechaFin }</td>
                                    <td>{ p.estado }</td>
                                    <td>{ p.fase }</td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>

            {/* <button onClick = {() => {
                setMostrarTabla (!mostrarTabla);
                }}
            >{ textoBoton }</button>
            { mostrarTabla ? (<TablaProyectos/>) : (<FormularioRegistroProyectos />)} */}

        </div>
    );
};

/* FUNCION QUE CONTIENE LA INTERFAZ DONDE SE ENCUENTRA LA TABLA QUE MUESTRA EL LISTADO DE PROYECTOS */
const TablaProyectos = () => {
    return (
        <div>
            <h1>Lista de Proyectos</h1>
            <table>
                <thead>
                    <tr>
                        <th>_id</th>
                        <th>nombre</th>
                        <th>presupuesto</th>
                        <th>fechaInicio</th>
                        <th>fechaFin</th>
                        <th>estado</th>
                        <th>fase</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    )
}

/* FUTURA FUNCION PARA CREAR UN PROYECTO, SE DEBE INVOCAR AL DAR CLIC SOBRE EL BOTON EN LA INTERFAZ DEL FORMULARIO */
const CrearProyecto = () => {
};

/* FUNCION QUE CONTIENE LA INTERFAZ DONDE SE ENCUENTRA EL FORMULARIO PARA REGISTRAR LOS PROYECTOS */
const FormularioRegistroProyectos = ()=> {
    return (
        <div>
            <h1>Ingrese el Proyecto</h1>
            <form>
                <table>
                    <tr>
                        <td>
                            <p>Nombre del Proyecto: </p>
                        </td>
                        <td>
                            <input type = "text" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Objetivo General: </p>
                        </td>
                        <td>
                            <input type = "text" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Objetivo Especifico: </p>
                        </td>
                        <td>
                            <input type = "text" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Presupuesto: </p>
                        </td>
                        <td>
                            <input type = "number" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type = "button" value = "Registrar proyecto" />
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
}

export { GestionProyectos };
