import {useRef} from "react";
import BtnAgragarCard from "./BtnAgragarCard";
import CardItems from "./CardItems";

// const contenedorLista = document.querySelector('.contenedor-lista-items')
// const flechaIzquierda = document.getElementById('flecha-izquierda')
// const flechaDerecha = document.getElementById('flecha-derecha')

// flechaDerecha.addEventListener('click', () =>{
//     contenedorLista.scrollLeft +=  contenedorLista.offsetWidth
// })

// flechaIzquierda.addEventListener('click', () =>{
//     contenedorLista.scrollLeft -=  contenedorLista.offsetWidth
// })


function ListaCards() {
  
  const listRef = useRef()

  const handleClick = (direccion) =>{

    const anchoPantalla = listRef.current.offsetWidth

    if (direccion === "left"  ) {     
      listRef.current.style.transform = `translateX(${anchoPantalla}px)`
      //listRef.current.scrollLeft +=  listRef.current.offsetWidth  
    }

    if (direccion === "right" ) {   
      listRef.current.style.transform = `translateX(-${anchoPantalla}px)`
      //listRef.current.scrollLeft -=  listRef.current.offsetWidth
    }
  }

  return (
    <section className="contenedor-principal">
      <h3 className="categoria-lista">Peliculas</h3>
      <button id="flecha-izquierda" className="flecha-izquierda" onClick={() => handleClick('left')}>
        <i className="fas fa-caret-left"></i>
      </button>
      <section className="contenedor-lista-items" ref={listRef}>
        <section className="lista-items" ref={listRef} >
          <BtnAgragarCard />
          <CardItems />
          <CardItems />
          <CardItems />
          <CardItems />
          <CardItems />
          <CardItems />
          <CardItems />
          <CardItems />
          <CardItems />
        </section>
      </section>
      <button id="flecha-derecha" className="flecha-derecha" onClick={() => handleClick('right')}>
        <i className="fas fa-caret-right"></i>
      </button>
    </section>
  );
}



export default ListaCards;
