import { Link } from "react-router-dom";

const Nosotros = () => {
  return (
    <section className="nosotros-container">

      <div className="nosotros-card">
        <h2>Librería universitaria Nexus</h2>

        <img
          src="/img/nexus-library.jpg"
          alt="Librería universitaria Nexus"
          className="nosotros-img"
        />

        <p>
          Nexus es una librería universitaria y espacio multifuncional pensada
          para estudiantes, docentes y profesionales del ámbito académico.
        </p>

        <p>
          Nuestro objetivo es ofrecer un entorno cómodo donde combinar el
          aprendizaje, el trabajo colaborativo y la cultura, reuniendo en un
          mismo espacio la venta y alquiler de libros, zonas de co‑working y
          una cafetería.
        </p>

        <p>
          A través de esta aplicación es posible consultar el catálogo de libros
          disponibles y realizar reservas de forma rápida y sencilla.
        </p>

        {/* Botón volver al inicio */}
        <Link to="/" className="nav-button volver-inicio">
          Volver al inicio
        </Link>
      </div>

    </section>
  );
};

export default Nosotros;