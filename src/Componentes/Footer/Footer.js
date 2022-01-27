import "./Footer.css"
import {Link} from "react-router-dom"

function Footer() {
    return (
        <>
            <div className="footer">
                <ul className="redes">
                    <li ><Link className="redes-item" to="/"><i className="bi bi-github"></i></Link></li>


                </ul>
                <ul className="redes">
                    <li ><Link className="redes-item" to="/"><i className="bi bi-meta"></i></Link></li>


                </ul>
                <ul className="redes">
                    <li ><Link className="redes-item" to="/"><i className="bi bi-instagram"></i></Link></li>


                </ul>
                <ul className="flecha">
                    <li>
                        <Link className="btn  boton" to="#top">
                            <i className="bi bi-arrow-up-circle"></i>
                        </Link>

                    </li>
                </ul>
            </div>
        </>
    );
}
export default Footer;