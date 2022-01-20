import React from 'react';
import NotFountImg from "../../Imagenes/404.png";
import "../404/NotFound.css"
import { Link } from "react-router-dom";


export default function NotFound() {
  return <div className='contenedor-notfound'>
    <div className='texto'>
      <span>ERROR 404</span>
      <span>PAGINA NO ENCONTRADA</span>
      <Link to="/">
      <p> VOLVER A INICIO</p>
      </Link>
    </div>
    <div className='imagen'>
      <img src={NotFountImg} alt='Pagina no encontrada'></img>
    </div>
  </div>;
}
