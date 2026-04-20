import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import LibroDetalle from './LibroDetalle';
import { GlobalContext } from '../context/GlobalContext';
import { useLibros } from '../hooks/useLibros';

//Mock del hook useLibros
vi.mock('../hooks/useLibros', () => ({
    useLibros: vi.fn()
}));

//Mock del libro para el test
describe('LibroDetalle component', ()=> {
    const route = '/libros/2';

    beforeEach(() => {
        const libroMock = {
        id: 2,
        imagen: "https://example.com/libro2.jpg",
        titulo: "El nombre del viento",
        autor: "Patrick Rothfuss",
        año: 2007,
        sinopsis: "La historia de Kvothe, un mago legendario que relata su vida llena de aventuras, tragedias y magia.",
        categoria: "fantasia",
        };

        //Configuración del mock para que devuelva el libroMock
        useLibros.mockReturnValue({
            getBooksById: vi.fn(() => libroMock),
            libros: [libroMock]
        });
    });
        
    //Test
    it('renderiza la info del libro de useParams', () => {
        //Mock de comprar un libro
        const comprarLibro = vi.fn();
        render (
            <MemoryRouter initialEntries={[route]}>
                <GlobalContext.Provider value={{ comprarLibro }}>
                    <Routes>
                        <Route path="/libros/:id" element={<LibroDetalle/ >}></Route>
                    </Routes>
                </GlobalContext.Provider>
            </MemoryRouter>
        );

        //Verificar que se muestra el título
        expect(screen.getByText(/El nombre del viento/i)).toBeInTheDocument();
    
        //Verificar que se muestra el autor
        expect(screen.getByText(/Patrick Rothfuss/i)).toBeInTheDocument();
    
        //Verificar que se muestra el año
        expect(screen.getByText(/2007/i)).toBeInTheDocument();
    
        //Verificar que se muestra la categoría
        expect(screen.getByText(/fantasia/i)).toBeInTheDocument();

        //Verificar que se muestra la imagen
        const imagen = screen.getByAltText("Portada del libro");
        expect(imagen).toBeInTheDocument();

        //Verificar que se muestran los botones
        const button = screen.getByText(/Comprar libro/i);
        expect(button).toBeInTheDocument();
        const link = screen.getByText(/Volver al inicio/i);
        expect(link).toBeInTheDocument();
    });
})