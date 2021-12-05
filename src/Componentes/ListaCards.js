import React from "react";
import BtnAgragarCard from "./BtnAgragarCard";
import CardItems from "./CardItems";

const contenedorLista = document.querySelector('.contenedor-lista-items')
const flechaIzquierda = document.getElementById('flecha-izquierda')
const flechaDerecha = document.getElementById('flecha-derecha')

flechaDerecha.addEventListener('click', () =>{
    contenedorLista.scrollLeft +=  contenedorLista.offsetWidth
})

flechaIzquierda.addEventListener('click', () =>{
    contenedorLista.scrollLeft -=  contenedorLista.offsetWidth
})


function ListaCards() {

  return (
    <section className="contenedor-principal">
      <h3 className="categoria-lista">Peliculas</h3>
      <button id="flecha-izquierda" className="flecha-izquierda">
        <i className="fas fa-caret-left"></i>
      </button>
      <section className="contenedor-lista-items">
        <section className="lista-items">
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
      <button id="flecha-derecha" className="flecha-derecha">
        <i className="fas fa-caret-right"></i>
      </button>
    </section>
  );
}



export default ListaCards;
