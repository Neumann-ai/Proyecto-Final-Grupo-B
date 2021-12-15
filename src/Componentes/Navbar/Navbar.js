import home from './home-solid.svg';
import search from './search-solid.svg';
import user from './user-circle-solid.svg';
import './Navbar.css'
const cerrarSesion= () => {
    // TODO cerrar sesion
}
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-sm">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navPeliculas" aria-controls="navPeliculas" aria-expanded="false" aria-label="Toggle navigation">
                    <button className="navbar-toggler-icon"></button>
                </button>
                <div className="collapse navbar-collapse" id="navPeliculas">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <img className={"icon filter-purple"} src={home} alt="icono home" />
                                <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <form className="align-items-center my-2 my-lg-0 d-flex">
                                <input id="search" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn boton my-2 my-sm-0" type="submit">
                                    <img className={"icon filter-white"} src={search} alt="icono home" />
                                </button>
                            </form>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img className={"icon filter-purple"} src={user} alt="icono home" />
                            </a>
                            <div className="dropdown-menu" aria-labelledby="userDropdown">
                                <a className="dropdown-item" href="#">Ayuda</a>
                                <a className="dropdown-item" href="#">Configuracion</a>
                                <div className="dropdown-divider"></div>
                                <button className="dropdown-item" onClick={cerrarSesion()}>Cerrar sesion</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;