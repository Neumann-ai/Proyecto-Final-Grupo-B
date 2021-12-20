import home from './home-solid.svg';
import search from './search-solid.svg';
import user from './user-circle-solid.svg';
import {Link} from "react-router-dom";
import './Navbar.css'
const cerrarSesion = () => {
    // TODO cerrar sesion
}
function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-sm navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Rollflix</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    <img className={"icon filter-purple"} src={home} alt="icono home" />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn boton" type="submit">
                                        <img className={"icon filter-white"} src={search} alt="icono home" />
                                    </button>
                                </form>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img className={"icon filter-purple"} src={user} alt="icono home" />

                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/">Ayuda</Link></li>
                                    <li><Link className="dropdown-item" to="/configuracion">Configuracion</Link></li>
                                    <li><div className="dropdown-divider"> </div></li>
                                    <li><button className="dropdown-item" onClick={cerrarSesion()}>Cerrar sesion</button></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;