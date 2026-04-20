import { render, screen, fireEvent } from "@testing-library/react";
import Menu from "./Menu";
import { vi } from "vitest";

// 🔹 Mock del hook useLibros
vi.mock("../hooks/useLibros", () => ({
  useLibros: () => ({
    categoria: "selecciona",
    año: "selecciona",
    autor: "selecciona",
    changeCategoria: vi.fn(),
    changeAño: vi.fn(),
    changeAutor: vi.fn(),
  }),
}));

describe("Menu component", () => {

  test("renderiza el botón de filtros", () => {
    render(<Menu />);
    expect(screen.getByText("Filtros ☰")).toBeInTheDocument();
  });

  test("muestra el desplegable al hacer click", () => {
    render(<Menu />);
    
    const boton = screen.getByText("Filtros ☰");
    fireEvent.click(boton);

    expect(screen.getByText("Categoria:")).toBeInTheDocument();
    expect(screen.getByText("Año:")).toBeInTheDocument();
    expect(screen.getByText("Autor:")).toBeInTheDocument();
  });

});