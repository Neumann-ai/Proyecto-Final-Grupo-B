import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Configuracion from "./Componentes/Configuracion";
import MisDatos from "./Componentes/PaginasPanelAdmin/MisDatos";
import Peliculas from "./Componentes/PaginasPanelAdmin/Peliculas";
import PeliculaEditar from "./Componentes/PaginasPanelAdmin/PeliculaEditar";
import ListasPeliculas from "./Componentes/PaginasPanelAdmin/ListasPeliculas";
import ListaPeliculasEditar from "./Componentes/PaginasPanelAdmin/ListaPeliculasEditar";
import UsuariosLista from "./Componentes/PaginasPanelAdmin/UsuariosLista";
import Series from "./Componentes/PaginasPanelAdmin/Series";
import SerieEditar from "./Componentes/PaginasPanelAdmin/SerieEditar";
import ListasSeries from "./Componentes/PaginasPanelAdmin/ListasSeries";
import ListaSeriesEditar from "./Componentes/PaginasPanelAdmin/ListaSeriesEditar";

import User from "./Componentes/PaginasPanelAdmin/User";
import SeccionIndividual from "./Componentes/SeccionIndividual";
import NotFound from "./Componentes/404/NotFound";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/peliculas" element={<Home tipo="pelicula" />} />
          <Route path="/series" element={<Home tipo="serie" />} />
          <Route path="/configuracion" element={<Configuracion />}>
            <Route index element={<MisDatos />} />
            <Route path="misdatos" element={<MisDatos />} />
            <Route path="usuarioslista" element={<UsuariosLista />}>
              <Route path="user/:userId" element={<User />} />
            </Route>
            <Route path="peliculas" element={<Peliculas />}>
              <Route path="pelicula/:peliId" element={<PeliculaEditar />} />
            </Route>
            <Route path="listapeliculas" element={<ListasPeliculas />}>
              <Route path="listapelicula/:listaId" element={<ListaPeliculasEditar/>} />
            </Route>
            <Route path="series" element={<Series />}>
              <Route path="serie/:serieId" element={<SerieEditar />} />
            </Route>
            <Route path="listaseries" element={<ListasSeries />}>
              <Route path="listaseries/:listaId" element={<ListaSeriesEditar/>} />
            </Route>
          </Route>
          <Route path="/ver/:id"  element={<SeccionIndividual/>}/>
          <Route path="*"element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}
