const PeliculaReducer = (state, action) => {
  switch (action.type) {
    case "GET_PELICULAS_COMIENZO":
      return {
        peliculas: [],
        isFetching: true,
        error: false,
      };
    case "GET_PELICULAS_OK":
      return {
        peliculas: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_PELICULAS_fallo":
      return {
        peliculas: [],
        isFetching: false,
        error: false,
      };
      default:
          return {...state}
  }
};

export default PeliculaReducer
