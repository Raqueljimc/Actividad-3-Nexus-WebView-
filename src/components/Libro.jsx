import React from "react";
import { Link } from 'react-router-dom';


const Libro = ({libros}) => {
    return(
        <div className="book">
            
                <h2>{libros.titulo}</h2>
                <img src={libros.imagen} alt="Portada del libro" />
                <p><strong>Autor: </strong> {libros.autor}</p>
                <p><strong>Año de publicación: </strong> {libros.año}</p>
                <p><strong>Sinopsis: </strong> {libros.sinopsis}</p>
                <p><strong>Categoria:  </strong> {libros.categoria}</p>
                <Link to={`/libros/${libros.id}`} className="nav-button">
            Ver más detalles
        </Link>
               
        </div>

    )
}

export default Libro;