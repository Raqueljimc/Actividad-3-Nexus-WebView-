import { render, screen } from "@testing-library/react";
import MisLibros from "./MisLibros";
import { GlobalContext } from "../context/GlobalContext";
import { MemoryRouter } from "react-router-dom";

describe("MisLibros component", () => {

  test("muestra mensaje cuando no hay libros comprados", () => {
    render(
      <MemoryRouter>
        <GlobalContext.Provider value={{ librosComprados: [] }}>
          <MisLibros />
        </GlobalContext.Provider>
      </MemoryRouter>
    );

    expect(
      screen.getByText("No has comprado ningún libro todavía.")
    ).toBeInTheDocument();
  });

  test("renderiza correctamente los libros comprados", () => {
    const librosMock = [
      { titulo: "Libro A", autor: "Autor A" },
      { titulo: "Libro B", autor: "Autor B" },
    ];

    render(
      <MemoryRouter>
        <GlobalContext.Provider value={{ librosComprados: librosMock }}>
          <MisLibros />
        </GlobalContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText("Libro A")).toBeInTheDocument();
    expect(screen.getByText("Autor A")).toBeInTheDocument();
    expect(screen.getByText("Libro B")).toBeInTheDocument();
  });

});