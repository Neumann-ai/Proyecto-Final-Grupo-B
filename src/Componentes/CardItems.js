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
  return (
    <Link to={{ pathname: `/ver/${pelicula._id}` }} className="link-card">
      <div className="card-contenedor">
        <img src={pelicula.imagen} alt="imagen pelicula" />
        <div className="card-info">
          <p className="card-titulo">{pelicula.nombre}</p>
        </div>
      </div>
    </Link>
  );
}

export default CardItems;
