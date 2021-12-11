import { Link } from "react-router-dom";
import "../../Estilos/Pelicula.css";

export default function Pelicula() {
  return (
    <>
      <div className="pelicula">
        <div className="contenedor-titulo-pelicula">
          <h2>Editar Pelicula</h2>
        </div>
      </div>
      <div className="contenedor-info-editar row">
        <form>
          <div className="editar-izquierda col-xl-9">
            <div className="item-input">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" placeholder="titanic" id="nombre"></input>
            </div>
            <div className="item-input">
              <label htmlFor="estreno">Estreno</label>
              <input type="text" placeholder="2021" id="estreno"></input>
            </div>
            <div className="item-input">
              <label htmlFor="duracion">Duracion</label>
              <input type="text" placeholder="2021" id="duracion"></input>
            </div>
            <div className="item-input">
              <label htmlFor="protagonistas">Protagonistas</label>
              <input
                type="text"
                placeholder="Leonardo Di Caprio"
                id="protagonistas"
              ></input>
            </div>
            <div className="item-input">
              <label htmlFor="sinopsis">Sinopsis</label>
              <input type="text" placeholder="bla bla" id="sinopsis"></input>
            </div>
            <div className="item-input">
              <label htmlFor="genero">Genero</label>
              <input type="text" placeholder="Romance" id="genero"></input>
            </div>
          </div>
          <div className="editar-derecha col-xl-3">
            <img
              src="https://picsum.photos/id/237/200/300"
              alt="imagen pelicula"
            />
            <div className="item-input">
              <label htmlFor="avatar">Avatar</label>
              <input
                type="url"
                placeholder="https://picsum.photos/id/237/200/300"
                id="avatar"
              ></input>
            </div>
            <div className="item-input">
              <div className="opcion-tipo">
                <input type="radio" name="tipo" required id="pelicula"></input>
                <label htmlFor="pelicula">Pelicula</label>
              </div>
              <div className="opcion-tipo">
                <input type="radio" name="tipo" required id="serie"></input>
                <label htmlFor="serie">Serie</label>
              </div>
            </div>
            <button className="enviar-edicion">Enviar</button>
          </div>
        </form>
      </div>
    </>
  );
}
