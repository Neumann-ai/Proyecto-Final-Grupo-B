import "../../Estilos/Peliculas.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Peliculas(pelis) {
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
    { field: "director", headerName: "Director", width: 100 },
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

  //MOSTRAR PELICULAS EN LISTA
  const [pelicula, setPelicula] = useState({});

  useEffect(() => {
    const getPeliculas = async () => {
      try {
        const res = await axios.get("peliculas/" + pelis);
        setPelicula(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPeliculas();
  }, [pelis]);

  const rows = [
    {
      id: 1,
      imagen: "https://picsum.photos/id/237/200/300",
      nombre: "Snow",
      director: "nose",
      estreno: "2021",
      duracion: "100min",
      protagonistas:
        "Leonardo Di Caprio,Leonardo Di Caprio,Leonardo Di Caprio,Leonardo Di Caprio,Leonardo Di Caprio",
      sinopsis: "loremasdadfrfgdgdfgrdgdfgd",
      trailer: "www.youtube.com",
      genero: "Romance",
    },
  ];

  // AGREGAR NUEVA PELICULA
  const [item, setItem] = useState({
    nombre: "",
    director: "",
    protagonistas: "",
    duracion: "",
    trailer: "",
    imagen: "",
    fecha_de_Estreno: "",
    sinopsis: "",
    genero: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setItem((prevImput) => {
      return {
        ...prevImput,
        [name]: value,
      };
    });
  }

  function agregarItem(event) {
    event.preventDefault();
    const nuevoItem = {
      nombre: item.nombre,
      director: item.director,
      protagonistas: item.protagonistas,
      duracion: item.duracion,
      trailer: item.trailer,
      imagen: item.imagen,
      fecha_de_Estreno: item.fecha_de_Estreno,
      sinopsis: item.sinopsis,
      genero: item.genero,
    };
    axios.post("/peliculas", nuevoItem);

    setItem({
      nombre: "",
      director: "",
      protagonistas: "",
      duracion: "",
      trailer: "",
      imagen: "",
      fecha_de_Estreno: "",
      sinopsis: "",
      genero: "",
    });
  }

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
      <button
        type="button"
        class="agregar-pelicula"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Agregar Pelicula
      </button>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Ingrese los datos
              </h5>

              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form className="row">
                <div className="editar-izquierda col-6">
                  <div className="item-input">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                      onChange={handleChange}
                      name="nombre"
                      value={item.nombre}
                      type="text"
                      placeholder=" Titanic"
                      id="nombre"
                      required
                    ></input>
                  </div>
                  <div className="item-input">
                    <label htmlFor="nombre">Direccion</label>
                    <input
                      onChange={handleChange}
                      name="director"
                      value={item.director}
                      type="text"
                      placeholder=" quien sabe"
                      id="director"
                      required
                    ></input>
                  </div>
                  <div className="item-input">
                    <label htmlFor="duracion">Estreno</label>
                    <input
                      onChange={handleChange}
                      name="fecha_de_Estreno"
                      value={item.fecha_de_Estreno}
                      type="number"
                      placeholder="2021"
                      id="estreno"
                      required
                    ></input>
                  </div>
                  <div className="item-input">
                    <label htmlFor="duracion">Duracion</label>
                    <input
                      onChange={handleChange}
                      name="duracion"
                      value={item.duracion}
                      type="text"
                      placeholder="2021"
                      id="duracion"
                      required
                    ></input>
                  </div>
                  <div className="item-input">
                    <label htmlFor="protagonistas">Protagonistas</label>
                    <input
                      onChange={handleChange}
                      name="protagonistas"
                      value={item.protagonistas}
                      type="text"
                      placeholder="Leonardo Di Caprio"
                      id="protagonistas"
                      required
                    ></input>
                  </div>
                  <div className="item-input">
                    <label htmlFor="sinopsis">Sinopsis</label>
                    <input
                      onChange={handleChange}
                      name="sinopsis"
                      value={item.sinopsis}
                      type="text"
                      placeholder="bla bla"
                      id="sinopsis"
                      required
                    ></input>
                  </div>
                  <div className="item-input">
                    <label htmlFor="trailer">Trailer</label>
                    <input
                      onChange={handleChange}
                      name="trailer"
                      value={item.trailer}
                      type="url"
                      placeholder="Romance"
                      id="trailer"
                      required
                    ></input>
                  </div>
                </div>
                <div className="editar-derecha col-6">
                  <div className="item-input">
                    <label htmlFor="imagen">Imagen</label>
                    <input
                      onChange={handleChange}
                      name="imagen"
                      value={item.imagen}
                      type="url"
                      placeholder="https://picsum.photos/id/237/200/300"
                      id="imagen"
                      required
                    ></input>
                  </div>
                  <div className="item-input">
                    <label htmlFor="genero">Genero</label>
                    <input
                      onChange={handleChange}
                      name="genero"
                      value={item.genero}
                      type="text"
                      placeholder="Romance"
                      id="genero"
                      required
                    ></input>
                  </div>
                  <div className="item-input">
                    <div className="opcion-tipo">
                      <input
                        type="radio"
                        name="tipo"
                        id="pelicula"
                        value="pelicula"
                        
                      ></input>
                      <label htmlFor="pelicula">Pelicula</label>
                    </div>
                    <div className="opcion-tipo">
                      <input
                        type="radio"
                        name="tipo"
                        required
                        id="serie"
                        value="serie"
                      ></input>
                      <label htmlFor="serie">Serie</label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                onClick={agregarItem}
                type="button"
                class="btn btn-primary"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
