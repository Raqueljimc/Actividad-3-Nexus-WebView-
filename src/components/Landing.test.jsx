import { render, screen } from "@testing-library/react";
import Landing from "./Landing";
import { vi } from "vitest";

// 🔹 Mock de Header, Menu y Footer
vi.mock("./Header", () => ({
  default: () => <div>Header Mock</div>,
}));

vi.mock("./Menu", () => ({
  default: () => <div>Menu Mock</div>,
}));

vi.mock("./Footer", () => ({
  default: () => <div>Footer Mock</div>,
}));

// 🔹 Mock de Libro (MUY IMPORTANTE)
vi.mock("./Libro", () => ({
  default: ({ libros }) => <div>{libros.titulo}</div>,
}));

// 🔹 Mock del hook useLibros
vi.mock("../hooks/useLibros", () => ({
  useLibros: () => ({
    libros: [
      { id: 1, titulo: "Libro Test 1" },
      { id: 2, titulo: "Libro Test 2" },
    ],
  }),
}));

test("renderiza libros en Landing", () => {
  render(<Landing />);

  expect(screen.getByText("Libro Test 1")).toBeInTheDocument();
  expect(screen.getByText("Libro Test 2")).toBeInTheDocument();
});