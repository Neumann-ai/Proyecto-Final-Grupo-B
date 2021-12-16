import { useRef, useState } from "react";
import CardItems from "./CardItems";
import "../Estilos/EstilosCard.css"

function ListaCards({ lista }) {
  const listRef = useRef();
  const [contador, setContador] = useState(0);

  const handleClick = (direccion) => {
    const anchoPantalla = listRef.current.offsetWidth / 5;

    if (direccion === "left") {
      setContador(contador - 1 < 0 ? 0 : contador - 1);
      listRef.current.style.transform = `translateX(-${
        contador * anchoPantalla
      }px)`;
    }

    if (direccion === "right") {
      console.log(listRef.current.offsetWidth);
      setContador(
        contador * anchoPantalla > listRef.current.offsetWidth
          ? contador
          : contador + 1
      );

      listRef.current.style.transform = `translateX(-${
        contador * anchoPantalla
      }px)`;
    }
  };

  return (
    <section className="contenedor-principal">
      <h3 className="categoria-lista">{lista.nombre}</h3>
      <button
        id="flecha-izquierda"
        className="flecha-izquierda"
        onClick={() => handleClick("left")}
      >
        <i className="fas fa-caret-left"></i>
      </button>
      <section className="contenedor-lista-items">
        <section className="lista-items" ref={listRef}>
          {lista.contenido.map((item, index) => (
            <CardItems item={item} index={index} />
          ))}
        </section>
      </section>
      <button
        id="flecha-derecha"
        className="flecha-derecha"
        onClick={() => handleClick("right")}
      >
        <i className="fas fa-caret-right"></i>
      </button>
    </section>
  );
}

export default ListaCards;
