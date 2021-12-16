import mongoose from 'mongoose';
import { ModeloUsuario } from "../usuario/usuario.js";
// import { ModeloObjetivo } from "../objetivo/objetivo.js";

const { Schema, model} = mongoose;

//definir el esquema:
const esquemaProyecto = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true,
    },
    presupuesto: {
        type: Number,
        required: true,
    },
    fechaInicio: {
        type: Date,
        required: true,
    },
    fechaFin:{
        type: Date,
        required: true,
    },
    estado:{
        type: String,
        enum: ["ACTIVO", "INACTIVO"],
        default: "INACTIVO",
    },
    fase:{
        type: String,
        enum: ["INICIADO", "EN_DESARROLLO", "TERMINADO", "NULA"],
        default: "NULA",
    },
    lider: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: ModeloUsuario,        
    },
    objetivoGeneral: {
        type: String,
        required: true,
    },
    objetivoEspecifico1: {
        type: String,
        required: true,
    },
    objetivoEspecifico2: {
        type: String,
        required: true,
    },
}
,{
    toJSON: { virtuals: true }, //parte del virtual populate para avances
    toObject: {virtuals: true }, //parte del virtual populate para avances
}
);

//VirtualPopulate para traer todos los avances del proyecto:
esquemaProyecto.virtual("avance",{
    ref:"Avance",
    localField:"_id",
    foreignField: "proyecto"
})

esquemaProyecto.virtual("inscripciones",{
    ref:"Inscripcion",
    localField:"_id",
    foreignField: "proyecto"
})

// se define el modelo:
const ModeloProyecto = model("Proyecto", esquemaProyecto, "Proyectos");

export { ModeloProyecto } ;