import { useState, useEffect } from "react";
import ListaCards from "./Componentes/ListaCards";
import axios from "axios";

export default function Home({ tipo }) {
  const [listas, setListas] = useState([]);

  useEffect(() => {
    const getListaRandom = async () => {
      try {
        const res = await axios.get(
          `listapeliculas${tipo ? "?tipo=" + tipo : ""}`
        );
        setListas(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getListaRandom();
  }, [tipo]);

  return (
    <div>
      <h1>AQUI VA EL NAVBAR</h1>
      <h2>Aqui va el slider</h2>
      {listas.map((lista) => (
        <ListaCards lista={lista} />
      ))}
    </div>
  );
}
