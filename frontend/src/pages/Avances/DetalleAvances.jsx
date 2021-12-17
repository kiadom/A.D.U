import React, { useRef, useEffect, useState }from 'react'
import { useParams, Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import useFormData from "../../hooks/useFormData";
import { toast } from 'react-toastify';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import ButtonLoading from '../../components/ButtonLoading';

import { GET_AVANCES2 } from "../../graphql/avances/queries";
import { EDITAR_AVANCE } from "../../graphql/avances/mutations"


/* FUNCION PRINCIPAL QUE SE EJECUTA, DESDE ACA SE LLAMAN LAS DEMAS FUNCIONES Y SE DEFINEN LOS ESTADOS */
function DetalleAvances () {
    
    const { form, formData, updateFormData } = useFormData(null);
    const { _id } = useParams();

    const {
        data: queryData,
        error: queryError,
        loading: queryLoading,
    } = useQuery(GET_AVANCES2, {
        variables: {_id},
    });

    console.log("este es el queryData",queryData);

    const [editarAvance, { 
        data: mutationData, 
        loading: mutationLoading, 
        error: mutationError 
    }] = useMutation(EDITAR_AVANCE);

    const submitForm = (e) => {
        e.preventDefault();
        console.log('FormData', formData);
        {/*delete formData.descripcion;
        delete formData.observacionesLider;*/}
        editarAvance({
            variables: { _id, ...formData },
        });
    };

     useEffect(() => {
        if (mutationError) {
          toast.error('Error modificando el Avance');
        }
    
        if (queryError) {
          toast.error('Error consultando el Avance');
        }
    }, [queryError, mutationError]);

    useEffect(() => {
        if (mutationData) {
          toast.success('Avance modificado correctamente');
        }
    }, [mutationData]);

    if (queryLoading) return
    <div className = "contenedor-body">
        <div className='cargando'>        
        </div>
    </div>;

    return (
        <div className='body-text flew flex-col w-full h-full items-center justify-center p-10'>
            <Link to='/Avances/EntradaAvances'>
            <h1 className = "rp_subtitulo">
                <FontAwesomeIcon icon={ faArrowLeft } size="1x" color='#F0A500' className='cursor-pointer'/>
                <span>   Volver Menu Avances </span></h1>            
            </Link>
            <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Editar Avance</h1>
            <br />
            <form
                onSubmit={submitForm}
                onChange={updateFormData}
                ref={form}
                className='flex flex-col items-center justify-center'
                >
                <span>Proyecto: {queryData.DetalleAvance.proyecto.nombre}</span>
                <br/>
                <span>Titulo: {queryData.DetalleAvance.titulo}</span>
                <br/>
                <span>ID del Avance: {queryData.DetalleAvance._id}</span>
                <br/>    
                <span>Observaciones del Lider: {queryData.DetalleAvance.observacionesLider}</span>
                <br/>
                <table>
                    <tr>
                        <td>
                            <p>Descripcion: </p>
                        </td>
                        <td>
                            <input 
                                name = "descripcion" 
                                defaultValue = { queryData.DetalleAvance.descripcion } 
                                required = {false} 
                                
                            />
                        </td>
                    </tr>
                    {/*
                    <tr>
                        <td>
                            <p>Observaciones Lider: </p>
                        </td>
                        <td>
                            <input 
                                name = "observacionesLider" 
                                defaultValue ={ queryData.DetalleAvance.observacionesLider } 
                                required = {false} 
                                
                            />
                        </td>
                    </tr>
                    */}
                    <tr>
                        <td>
                            <ButtonLoading
                            disabled={Object.keys(formData).length === 0}
                            loading={mutationLoading}
                            text='CONFIRMAR'
                            />
                        </td>
                    </tr>
                </table>            
            </form>
        </div>
    );
};

export {DetalleAvances};

