export const GetPeliculasComienzo = () =>({
    type: "GET_PELICULAS_COMIENZO",
})

export const GetPeliculasOk = (peliculas) =>({
    type: "GET_PELICULAS_OK",
    payload: peliculas,
})

export const GetPeliculasFallo = () =>({
    type: "GET_PELICULAS_FALLO",
})