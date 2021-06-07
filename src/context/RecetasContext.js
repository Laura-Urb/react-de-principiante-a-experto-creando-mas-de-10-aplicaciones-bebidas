import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

//Crear el Context
export const RecetasContext = createContext();

//Provider es donde se encuentran las funciones y state
const RecetasProvider = (props) => {
  //crear el state del Context
  const [recetas, setRecetas] = useState([]);

  const [busqueda, setBusquedaReceta] = useState({
    nombre: "",
    categoria: "",
  });

  const [consultar, setConsultar] = useState(false);

  const { nombre, categoria } = busqueda;

  useEffect(() => {
    if (consultar) {
      const getRecetas = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
        const resultado = await Axios.get(url);
        setRecetas(resultado.data.drinks);      };
      getRecetas();
    }
  }, [busqueda]);

  return (
    <RecetasContext.Provider
      value={{
        recetas,
        setBusquedaReceta,
        setConsultar,
      }}
    >
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
