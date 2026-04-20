import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("selecciona");
  const [librosComprados, setLibrosComprados] = useState([]);

  const [año, setAño] = useState("selecciona");
  const [autor, setAutor] = useState("selecciona");

  const changeCategoria = (newCategoria) => {
    setCategoria(newCategoria);
  };

  const changeAño = (newAño) => {
    setAño(newAño);
  };

  const changeAutor = (newAutor) => {
    setAutor(newAutor);
  };
  const comprarLibro = (libro) => {
  setLibrosComprados((prev) => [...prev, libro]);
};


  return (
  <GlobalContext.Provider
    value={{
      categoria,
      año,
      autor,
      changeCategoria,
      changeAño,
      changeAutor,
      librosComprados,
      comprarLibro
    }}
  >
    {children}
  </GlobalContext.Provider>
);

};