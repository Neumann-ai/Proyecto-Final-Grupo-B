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
<<<<<<< HEAD
            <nav className="navbar navbar-expand-sm navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
=======
            <nav class="navbar navbar-expand-sm navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Rollflix</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
>>>>>>> 45bdd8b4fec6f2309f1821464e24a00bdb2d999e
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">
                                    <img className={"icon filter-purple"} src={home} alt="icono home" />
                                </a>
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
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img className={"icon filter-purple"} src={user} alt="icono home" />

                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/">Ayuda</a></li>
                                    <li><a className="dropdown-item" href="/">Configuracionn</a></li>
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