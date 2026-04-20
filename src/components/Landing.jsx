import React from "react";
import Libro from "./Libro.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Menu from "./Menu.jsx";
import { useLibros } from "../hooks/useLibros";

const Landing = () => {
  const { libros } = useLibros();

  return (
    <>
      <Header />
      <Menu />

      <main className="landing-container">
        <div className="landing-grid">
          {libros?.map((libro) => (
            <Libro key={libro.id} libros={libro} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Landing;