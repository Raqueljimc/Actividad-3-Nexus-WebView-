import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";


export const useLibros = () => {
  const { categoria, año, autor, changeCategoria, changeAño, changeAutor } = useContext(GlobalContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://mock.apidog.com/m1/1138921-1131181-default/libros")
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos recibidos de la API:", data);
        console.log("Estructura del primer libro:", data[0]);
        setData(data);
      })
      .catch((error) => console.error("Error fetching libros:", error));
  }, []);

  console.log("Filtros actuales:", { categoria, año, autor });

  const librosFiltrados = data.filter((libro) => {
    const todosSinSeleccionar = categoria === "selecciona" && año === "selecciona" && autor === "selecciona";
    
    if (todosSinSeleccionar) {
      console.log("Todos los filtros sin seleccionar, mostrando todo");
      return true;
    }
    
    const cumpleCategoria = categoria !== "selecciona" && libro.categoria === categoria;
    const cumpleAño = año !== "selecciona" && libro.año === Number(año);
    const cumpleAutor = autor !== "selecciona" && libro.autor === autor;
    
    console.log(`Libro: ${libro.titulo}`, { cumpleCategoria, cumpleAño, cumpleAutor, resultado: cumpleCategoria || cumpleAño || cumpleAutor });
    
    return cumpleCategoria || cumpleAño || cumpleAutor;
  });

  console.log("Total libros filtrados:", librosFiltrados.length);
 
  //Obtener libros por id
  const getBooksById = (id) =>{
    const libros = librosFiltrados;
    return libros.find(libro => libro.id === parseInt(id));
  };
 

  return {
    categoria,
    año,
    autor,
    changeCategoria,
    changeAño,
    changeAutor,
    getBooksById,
    libros: librosFiltrados,
  };
};