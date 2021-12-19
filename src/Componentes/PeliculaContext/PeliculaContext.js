import PeliculaReducer from "./PeliculaReducer";
import {createContext, useEffect, useReducer } from "react"

const ESTADO_INICIAL = {
    peliculas:[],
    isFetching: false,
    error: false,
}

export const PeliculaContext = createContext(ESTADO_INICIAL);

//export console Pelicul