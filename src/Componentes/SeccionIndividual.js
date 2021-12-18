import { useLocation } from "react-router-dom";
import "../Estilos/SeccionIndividual.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";


export default function SeccionIndividual() {
  let location = useLocation()
  console.log(location);
  return (
    <div>
      <Navbar/>
      <section className="container-sm contenedor-pelicula">
        <figure className="header-pelicula">
          <img
            src="https://imagenes.20minutos.es/files/article_amp/uploads/imagenes/2012/03/31/54652.jpg"
            alt=""
          />
        </figure>
        <div className="contenedor-texto row">
          <div className="titulo-resenia col-xl-8">
            <div className="titulo">
              <h1>SUPERMAN: HOMBRE DE ACERO</h1>
            </div>
            <div className="resenia">
              <p>
                Temiendo las acciones desenfrenadas de un superhéroe con poderes
                similares a los de un Dios, el formidable y poderoso vigilante
                de Ciudad Gótica se convierte en salvador moderno y el más
                aclamado de Metropolis, mientras el mundo parece abrumarse por
                saber a qué tipo de héroe realmente necesita. Mientras Batman
                (Affleck) y Superman (Cavill) se encuentran en...
              </p>
            </div>
          </div>

          <div className="datos col-xl-4">
            <div className="item-datos">
              <p className="titulo-dato">Director:</p>
              <p className="dato">Pepito sanchez</p>
            </div>
            <div className="item-datos">
              <p className="titulo-dato">Protagonistas:</p>
              <p className="dato">pepito, martita, lupi, teo, teito, pelu, pumi</p>
            </div>
            <div className="item-datos">
              <p className="titulo-dato">Estreno:</p>
              <p className="dato">2009</p>
            </div>
            <div className="item-datos">
              <p className="titulo-dato">Duracion:</p>
              <p className="dato">1000min</p>
            </div>
            <div className="item-datos">
              <p className="titulo-dato">Genero:</p>
              <p className="dato">Ciencia ficcion</p>
            </div>
          </div>
        </div>
        <div className="trailer ratio ratio-16x9">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/l17xRHxqYMY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
