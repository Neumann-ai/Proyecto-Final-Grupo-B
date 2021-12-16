import { useState, useEffect } from "react";
import ListaCards from "./Componentes/ListaCards";
import axios from "axios";
import Footer from "./Componentes/Footer/Footer";
import Navbar from "./Componentes/Navbar/Navbar";
<<<<<<< HEAD

=======
>>>>>>> 45bdd8b4fec6f2309f1821464e24a00bdb2d999e
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
<<<<<<< HEAD
      <Navbar />
=======
      <Navbar/>
>>>>>>> 45bdd8b4fec6f2309f1821464e24a00bdb2d999e
      <h2>Aqui va el slider</h2>
      {listas.map((lista) => (
        <ListaCards lista={lista} />
      ))}
      <Footer />
    </div>
  );
}
