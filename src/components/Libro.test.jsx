import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Libro from './Libro';

describe('Libro component', ()=> {
  it('renderiza la info del libro', () => {
    const libro1 = {
      id: 1,
      imagen: "https://example.com/libro1.jpg",
      titulo: "La sombra del viento",
      autor: "Carlos Ruiz Zafón",
      año: 2001,
      sinopsis: "Un joven descubre un libro misterioso que lo lleva a desentrañar secretos ocultos en la Barcelona de posguerra.",
      categoria: "misterio",
    };
    render(
      <BrowserRouter>
        <Libro libros={libro1}/>
      </BrowserRouter>
    );

    //Verificar que se muestra el título
    expect(screen.getByText(/La sombra del viento/i)).toBeInTheDocument();

    //Verificar que se muestra el autor
    expect(screen.getByText(/Carlos Ruiz Zafón/i)).toBeInTheDocument();

    //Verificar que se muestra el año
    expect(screen.getByText(/2001/i)).toBeInTheDocument();

    //Verificar que se muestra la categoría
    expect(screen.getByText("misterio")).toBeInTheDocument();

    //Verificar que se muestra la imagen
    const imagen = screen.getByAltText("Portada del libro");
    expect(imagen).toBeInTheDocument();

    //Verificar que se muestra el link "Ver más detalles"
    const link = screen.getByText(/Ver más detalles/i);
    expect(link).toBeInTheDocument();
  });
})
