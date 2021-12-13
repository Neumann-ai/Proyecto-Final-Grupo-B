import React from "react";
import "../Estilos/EstilosCard.css";

function BtnAgragarCard() {
  return (
    <>
      <div className="btn-agregar-item">
        <div>
          <i className="fas fa-plus"></i>
        </div>
        <div>
          <p>Agregar</p>
        </div>
      </div>
    </>
  );
}

export default BtnAgragarCard;
