import { Link } from "react-router-dom";
import "../../Estilos/User.css";

export default function User() {
  return (
    <div className="user">
      <div className="contenedor-titulo-user">
        <h2>Editar Usuario</h2>
        <Link to="/usuarionuevo">
          <button>Crear usuario</button>
        </Link>
      </div>
      <div className="contenedor-usuario">
        <div className="datos-usuarios">
          <figure>
            <img
              src="https://picsum.photos/id/237/200/300"
              alt="Avatar usuario"
            />
          </figure>
          <div className="apodo">
            <p className="titulo-dato">Apodo</p>
            <h3 className="dato-actual">Teito</h3>
          </div>
          <div className="email">
            <p className="titulo-dato">E-mail</p>
            <p className="dato-actual">123@gmail.com</p>
          </div>
          <div className="contrasenia">
            <p className="titulo-dato">Contraseña</p>
            <p className="dato-actual">6dfyttryryrtfhhdf</p>
          </div>
        </div>
        <div className="editar-usuario">
          <span className="editar-titulo">Editar</span>
          <form className="formulario-editar">
            <div className="editar-izquierda">
              <div className="item-input">
                <label htmlFor="apodo">Apodo</label>
                <input type="text" placeholder="Teito" id="apodo"></input>
              </div>
              <div className="item-input">
                <label htmlFor="email">E-mail</label>
                <input
                  type="text"
                  placeholder="123@gmail.com"
                  id="email"
                ></input>
              </div>
              <div className="item-input">
                <label htmlFor="contrasenia">Contraseña</label>
                <input
                  type="text"
                  placeholder="2132155"
                  id="contrasenia"
                ></input>
              </div>
            </div>
            <div className="editar-derecha">
              <img
                src="https://picsum.photos/id/237/200/300"
                alt="Avatar usuario"
              />

              <div className="item-input">
                <label htmlFor="avatar">Avatar</label>
                <input
                  type="url"
                  placeholder="https://picsum.photos/id/237/200/300"
                  id="avatar"
                ></input>
              </div>
              <button className="enviar-edicion">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
