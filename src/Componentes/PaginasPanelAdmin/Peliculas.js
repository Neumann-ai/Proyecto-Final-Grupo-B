import "../../Estilos/Peliculas.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link, Outlet } from "react-router-dom";


export default function Peliculas() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "nombre",
      headerName: "Nombre",
      width: 200,
      renderCell: (params) => {
        return (
          <figure className="pelicula-nombre">
            <img src={params.row.imagen} alt="imagen" />
            {params.row.nombre}
          </figure>
        );
      },
    },
    { field: "estreno", headerName: "Estreno", width: 100 },
    {
      field: "duracion",
      headerName: "Duracion",
      width: 130,
    },
    {
      field: "protagonistas",
      headerName: "Protagonistas",
      width: 160,
    },
    {
        field: "sinopsis",
        headerName: "Sinopsis",
        width: 160,
      },
      {
        field: "trailer",
        headerName: "Trailer",
        width: 160,
      },
      {
        field: "genero",
        headerName: "Genero",
        width: 160,
      },
    {
      field: "accion",
      headerName: "Acciones",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="acciones">
            <Link to={"pelicula/" + params.row.id}>
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
      imagen: "https://picsum.photos/id/237/200/300",
      nombre: "Snow",
      estreno: "2021",
      duracion: "100min",
      protagonistas: "Leonardo Di Caprio,Leonardo Di Caprio,Leonardo Di Caprio,Leonardo Di Caprio,Leonardo Di Caprio",
      sinopsis:"loremasdadfrfgdgdfgrdgdfgd",
      trailer:"www.youtube.com",
      genero:"Romance",
    },
    
  ];
  return (
    <div className="lista-peliculas">
      <DataGrid
        className="dataGrid"
        disableSelectionOnClick
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      <Link to="/nuevapelicula">
        <button className="agregar-pelicula">Agregar Pelicula</button>
      </Link>
      <Outlet/>
    </div>
  );
}
