import "../../Estilos/UsuariosLista.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link, Outlet } from "react-router-dom";

export default function UsuariosLista() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "apodo",
      headerName: "Apodo",
      width: 200,
      renderCell: (params) => {
        return (
          <figure className="user-apodo">
            <img src={params.row.avatar} alt="avatar" />
            {params.row.apodo}
          </figure>
        );
      },
    },
    { field: "email", headerName: "E-mail", width: 200 },
    {
      field: "rol",
      headerName: "Rol",
      width: 130,
    },
    {
      field: "contrasenia",
      headerName: "Contraseña",
      width: 160,
    },

    {
      field: "accion",
      headerName: "Acciones",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="acciones">
            <Link to={"user/" + params.row.id}>
              <i class="fas fa-user-edit"></i>
            </Link>
            <i class="fas fa-trash-alt"></i>
          </div>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      avatar: "https://picsum.photos/id/237/200/300",
      apodo: "Snow",
      email: "1234@gmail.com",
      rol: "usuario comun",
      contrasenia: "sdfvzdsdfs",
    },
  
           
  ];
  return (
    <>
      <div className="UsuariosLista">
        <DataGrid
          className="dataGrid"
          disableSelectionOnClick
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />

        <Link to="/usuarionuevo">
          <button className="crear-usuario">Crear usuario</button>
        </Link>
        <Outlet />
      </div>
    </>
  );
}
