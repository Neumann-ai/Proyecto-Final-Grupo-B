import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Configuracion from "./Componentes/Configuracion";
import MisDatos from "./Componentes/PaginasPanelAdmin/MisDatos";
import Peliculas from "./Componentes/PaginasPanelAdmin/Peliculas";
import UsuariosLista from "./Componentes/PaginasPanelAdmin/UsuariosLista";
import CrearNuevoUser from "./Componentes/PaginasPanelAdmin/CrearNuevoUser";
import User from "./Componentes/PaginasPanelAdmin/User";
import Pelicula from "./Componentes/PaginasPanelAdmin/Pelicula";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/configuracion" element={<Configuracion />}>
            <Route index element={<MisDatos />} />
            <Route path="misdatos" element={<MisDatos />} />
            <Route path="usuarioslista" element={<UsuariosLista />}>
              <Route path="user/:userId" element={<User />} />
              <Route path="usuarionuevo" element={<CrearNuevoUser />} />
            </Route>
            <Route path="peliculas" element={<Peliculas />}>
              <Route path="pelicula/:peliId" element={<Pelicula />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
