import home from './home-solid.svg';
import search from './search-solid.svg';
import user from './user-circle-solid.svg';
import './Navbar.css'
const cerrarSesion = () => {
    // TODO cerrar sesion
}
function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-sm navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Rollflix</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">
                                    <img className={"icon filter-purple"} src={home} alt="icono home" />
                                </a>
                            </li>
                            <li class="nav-item">
                                   <form class="d-flex">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn boton" type="submit">
                                        <img className={"icon filter-white"} src={search} alt="icono home" />
                                    </button>
                                </form>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img className={"icon filter-purple"} src={user} alt="icono home" />

                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Ayuda</a></li>
                                    <li><a class="dropdown-item" href="#">Configuracionn</a></li>
                                    <li><div class="dropdown-divider"> </div></li>
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