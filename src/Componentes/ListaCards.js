import { useState } from "react";
import CardItems from "./CardItems";
import "../Estilos/EstilosCard.css";

function ListaCards({ lista }) {
  const [scrollX, setScrollX] = useState(-500);

  const handleLeft = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRight = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);

    if (window.innerWidth > 900) {
      let listaWidth = lista.contenido.length * 250;
      if (window.innerWidth - listaWidth > x) {
        x = window.innerWidth - listaWidth;
      }
      setScrollX(x);
    } else {
      let listaWidth = lista.contenido.length * 150;
      if (window.innerWidth - listaWidth > x) {
        x = window.innerWidth - listaWidth;
      }
      setScrollX(x);
    }
  };

  return (
    <section className="contenedor-principal">
      <h3 className="categoria-lista">{lista.nombre}</h3>
      <button
        id="flecha-izquierda"
        className="flecha-izquierda"
        onClick={handleLeft}
      >
        <i className="fas fa-caret-left"></i>
      </button>
      <section className="contenedor-lista-items">
        <section className="lista-items" style={{ left: scrollX }}>
          { lista.contenido.length > 1 ?  lista.contenido.map((item, index) => (
            <CardItems item={item} index={index} />
          )) : ""}
        </section>
      </section>
      <button
        id="flecha-derecha"
        className="flecha-derecha"
        onClick={handleRight}
      >
        <i className="fas fa-caret-right"></i>
      </button>
    </section>
  );
}

export default ListaCards;
