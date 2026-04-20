import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

const MisLibros = () => {
  const { librosComprados } = useContext(GlobalContext);

  return (
    <section className="nosotros-container">
      <div className="nosotros-card">
        <h2>Mis libros reservados</h2>

        <img
          src="/img/nexus-libroscomprados.jpg"
          alt="Libros comprados Nexus"
          className="nosotros-img"
        />

        {librosComprados.length === 0 ? (
          <p>
            Todavía no has realizado ninguna compra o reserva de libros.
          </p>
        ) : (
          <>
            <p>
              A continuación se muestra el listado de libros que has reservado
              o adquirido a través de la aplicación.
            </p>

            <div className="lista-libros-comprados">
              {librosComprados.map((libro, index) => (
                <div key={index} className="libro-comprado">
                  <h4>{libro.titulo}</h4>
                  <p>{libro.autor}</p>
                </div>
              ))}
            </div>
          </>
        )}

        <Link to="/" className="nav-button volver-inicio">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
};

export default MisLibros;





/*import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from 'react-router-dom';

const MisLibros = () => {
  const { librosComprados } = useContext(GlobalContext);
  console.log(librosComprados);

  return (
    <div>
      <Link to="/" className="nav-button">Volver al inicio</Link>
      <h2>Mis libros comprados</h2>

      {librosComprados.length === 0 && (
        <p>No has comprado ningún libro todavía.</p>
        
      )}


      {librosComprados.map((libro, index) => (
        <div key={index}>
          <h4>{libro.titulo}</h4>
          <p>{libro.autor}</p>
        </div>
      ))}

      
    </div>
  );
};

export default MisLibros;*/
