import React from "react";
import ReactDOM from "react-dom";
import ListaCards from "./Componentes/ListaCards";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Sidebar from "./Componentes/Panel-Admin/Sidebar";
import UsuariosLista from "./Componentes/Paginas/UsuariosLista";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./Componentes/Paginas/User";

ReactDOM.render(
  <>
    <ListaCards />
    <ListaCards />
    <Router>
      {/* esto luego se pasara a la pagina que corresponta */}
      <div className="container-adminpanel">
        <Sidebar />
        <Routes>
          <Route path="/usuarioslista" element={<UsuariosLista />} />
          <Route path="/user/:userId" element={<User/>} />
        </Routes>
      </div>
    </Router>
  </>,
  document.getElementById("root")
);

reportWebVitals();
