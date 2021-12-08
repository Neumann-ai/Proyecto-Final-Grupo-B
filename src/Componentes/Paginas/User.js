import "../../Estilos/User.css";

export default function User() {
    return (
        <div className="user">
            <div className="contenedor-titulo-user">
                <h2>Editar Usuario</h2>
                <button>Crear usuario</button>
            </div>
            <div className="contenedor-usuario">
                <div className="datos-usuarios"></div>
                <div className="editar-usuario"></div>
            </div>
        </div>
    )
}
