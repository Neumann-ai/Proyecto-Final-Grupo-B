import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Configuracion from "./Componentes/Configuracion";
import MisDatos from "./Componentes/PaginasPanelAdmin/MisDatos";
import Peliculas from "./Componentes/PaginasPanelAdmin/Peliculas";
import Pelicula from "./Componentes/PaginasPanelAdmin/Pelicula";
import ListasPeliculas from "./Componentes/PaginasPanelAdmin/ListasPeliculas";
import ListaPeliculasEditar from "./Componentes/PaginasPanelAdmin/ListaPeliculasEditar";
import UsuariosLista from "./Componentes/PaginasPanelAdmin/UsuariosLista";
import User from "./Componentes/PaginasPanelAdmin/User";
import SeccionIndividual from "./Componentes/SeccionIndividual";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/peliculas" element={<Home tipo="peliculas" />} />
          <Route path="/series" element={<Home tipo="series" />} />
          <Route path="/configuracion" element={<Configuracion />}>
            <Route index element={<MisDatos />} />
            <Route path="misdatos" element={<MisDatos />} />
            <Route path="usuarioslista" element={<UsuariosLista />}>
              <Route path="user/:userId" element={<User />} />
            </Route>
            <Route path="peliculas" element={<Peliculas />}>
              <Route path="pelicula/:peliId" element={<Pelicula />} />
            </Route>
            <Route path="listapeliculas" element={<ListasPeliculas />}>
              <Route path="listapelicula/:listaId" element={<ListaPeliculasEditar/>} />
            </Route>
          </Route>
          <Route path="/ver/:id"  element={<SeccionIndividual/>}/>
        </Routes>
      </Router>
    </div>
  );
}
