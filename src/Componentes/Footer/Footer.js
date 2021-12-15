import "./Footer.css"
function Footer() {
    return (
        <>
            <div className="footer">
                <ul className="redes">
                    <li><a href="#"><i className="bi bi-github"></i></a></li>


                </ul>
                <ul className="redes">
                    <li><a href="#"><i className="bi bi-meta"></i></a></li>


                </ul>
                <ul className="redes">
                    <li><a href="#"><i class="bi bi-instagram"></i></a></li>


                </ul>
                <ul className="flecha">
                    <li>
                        <a className="btn  boton" href="#top">
                            <i className="bi bi-arrow-up-circle"></i>
                        </a>

                    </li>
                </ul>
            </div>
        </>
    );
}
export default Footer;