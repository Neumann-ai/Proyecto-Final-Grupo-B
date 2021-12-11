import "../../Estilos/UserNuevo.css";

export default function UserNuevo() {
  return (
    <div className="usuario-nuevo">
      <h2 className="nuevo-usuario-titulo">Usuario Nuevo</h2>
      <form className="formulario-nuevo-usuario">
        <div className="datos-izquierda">
          <div className="item-nuevo-usuairo">
            <label htmlFor="apodo">Apodo</label>
            <input
              id="apodo"
              type="text"
              required
              placeholder="pepito sanchez"
            ></input>
          </div>

          <div className="item-nuevo-usuairo">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              required
              placeholder="falso@gmail.com"
            ></input>
          </div>

          <div className="item-nuevo-usuairo">
            <label htmlFor="contrasenia">Contraseña</label>
            <input
              id="contrasenia"
              type="password"
              required
              placeholder="********"
            ></input>
          </div>
        </div>

        <div className="datos-derecha">
          <div className="item-nuevo-usuairo">
            <label htmlFor="avatar">Avatar</label>
            <input
              id="avatar"
              type="url"
              required
              placeholder="www.imagen.com/123sdfsdf"
            ></input>
          </div>

          <div className="item-nuevo-usuairo">
            <span>Rol</span>
            <div className="opcion-rol">
              <input type="radio" name="rol" required id="admin"></input>
              <label htmlFor="admin">Admin</label>
            </div>
            <div className="opcion-rol">
              <input type="radio" name="rol" required id="userComun"></input>
              <label htmlFor="userComun">Usuario comun</label>
            </div>
            <button>CREAR</button>
          </div>
        </div>
      </form>
    </div>
  );
}
