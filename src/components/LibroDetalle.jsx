import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import React from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLibros } from "../hooks/useLibros";



const LibroDetalle = () => {
    const {id} = useParams();
    const {getBooksById} = useLibros();
    const book = getBooksById(id);
    const { comprarLibro } = useContext(GlobalContext);
    const navigate = useNavigate();



    if(!book){
        return(
            <div>
                <p>--</p>
                

            </div>
        )
    }
    return(
        
        
        <div className="book-detail">
            
            <Link to="/" className="nav-button">Volver al inicio</Link>
                <h2>{book.titulo}</h2>
                <img src={book.imagen} alt="Portada del libro" />
                <p><strong>Autor: </strong> {book.autor}</p>
                <p><strong>Año de publicación: </strong> {book.año}</p>
                <p><strong>Sinopsis: </strong> {book.sinopsis}</p>
                <p><strong>Categoria:  </strong> {book.categoria}</p>
                <button
                    onClick={() => {
                    comprarLibro(book);
                     navigate("/mis-libros");
                 }}
                >
                    Comprar libro
                </button>

        </div>
        

    )
}

export default LibroDetalle;