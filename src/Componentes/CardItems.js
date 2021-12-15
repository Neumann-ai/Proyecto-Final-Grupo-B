import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CardItems({ index, item }) {
  const [pelicula, setPelicula] = useState({});

  useEffect(() => {
    const getPeliculas = async () => {
      try {
        const res = await axios.get("peliculas/" + item);
        setPelicula(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPeliculas();
  }, [item]);
console.log(pelicula);
  return (
   
      <Link to={{ pathname: "/ver", pelicula: "funciona" }} className="link-card">
        <div className="card-contenedor">
          <img
            src={
              pelicula.imagen ||
              "https://m.media-amazon.com/images/I/81QRVinxfmL._AC_SY355_.jpg"
            }
            alt="imagen pelicula"
          />
          <div className="card-info">
            <p className="card-titulo">{pelicula.nombre}</p>
            <p className="card-estreno">{pelicula.estreno || "no definido"} </p>
          </div>
        </div>
      </Link>
    
  );
}

export default CardItems;
