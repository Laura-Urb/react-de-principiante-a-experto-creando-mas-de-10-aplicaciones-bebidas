import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

//Crear el Context
export const ModalContext = createContext();

//Provider es donde se encuentran las funciones y state
const ModalProvider = (props) => {
  const [idReceta, setIdReceta] = useState(null);
  const [recetaDetalle, setReceta] = useState({});

  useEffect(() => {
    const getReceta = async () => {
      if (!idReceta) return;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
      const resultado = await Axios.get(url);
      setReceta(resultado.data.drinks[0]);
    };
    getReceta();
  }, [idReceta]);

  return (
    <ModalContext.Provider
      value={{
        recetaDetalle,
        setIdReceta,
        setReceta
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
