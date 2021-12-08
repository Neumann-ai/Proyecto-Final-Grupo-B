import "../../Estilos/Sidebar.css"

import { Link } from  "react-router-dom"

export default function Sidebar() {
    return (
        <div className="sidebar">   
                 <div className="sidebar-contenedor">
                     <div className="sidebar-menu">
                         <h3 className="sidebar-titulo">
                             Panel
                         </h3>
                         <ul>
                         <Link to="/otrapagina">
                             <li className="sidebar-item">
                                <i class="fas fa-user-tie"></i> <p>Mis datos</p>
                             </li>
                             </Link>
                             <Link to="/usuarioslista">
                             <li className="sidebar-item">
                                <i class="fas fa-users"></i> <p>Usuarios</p>
                             </li>
                             </Link>
                             <li className="sidebar-item">
                                <i class="fas fa-film"></i> <p>Peliculas</p>
                             </li>
                         </ul>
                     </div>
                 </div>
        </div>
    )
}
