import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';


describe('Header component', ()=> {
    it('debe renderizar el título principal dentro de un enlace y renderizar los enlaces correctamente', () =>{
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        )

        const heading =screen.getByRole('heading', {name:/NEXUS/i});
        expect(heading).toBeInTheDocument();

        //verifica que los enlaces se renderizan
        const link = screen.getByRole('link', {name: /NEXUS/i});
        expect(link).toHaveAttribute('href', '/');

        const compraslink = screen.getByRole('link', {name: /Compras/i});
        expect(compraslink).toHaveAttribute('href', '/mis-libros');
    })
        
    
})
