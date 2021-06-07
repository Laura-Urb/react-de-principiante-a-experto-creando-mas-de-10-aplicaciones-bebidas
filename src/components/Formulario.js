import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {
  const { setBusquedaReceta, setConsultar } = useContext(RecetasContext);
  const { categorias } = useContext(CategoriasContext);
  const [busqueda, setBusqueda] = useState({
    nombre: "",
    categoria: "",
  });

  const getDatosReceta = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className="col-12"
      onSubmit={(e) => {
        e.preventDefault();
        setBusquedaReceta(busqueda);
        setConsultar(true);
      }}
    >
      <fieldset className="text-center">
        <legend> Busca bebidas por Categoría o Ingrediente</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="nombre"
            className="form-control"
            type="text"
            placeholder="Buscar por Ingrediente"
            onChange={getDatosReceta}
          ></input>
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            name="categoria"
            onChange={getDatosReceta}
          >
            <option value="">--Selecciona Categoría--</option>
            {categorias &&
              categorias.map((categoria) => (
                <option
                  key={categoria.strCategory}
                  value={categoria.strCategory}
                >
                  {categoria.strCategory}
                </option>
              ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar Bebidas"
          ></input>
        </div>
      </div>
    </form>
  );
};

export default Formulario;
