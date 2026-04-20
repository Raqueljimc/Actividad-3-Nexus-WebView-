import { useContext } from "react";
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

export default MisLibros;
