import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from './Footer';

describe('Footer component', () =>{
    it('renderiza el elemento footer con el texto correcto', () =>{
        render(<Footer />);
        
        const footer = screen.getByRole('contentinfo');
        expect(footer).toBeInTheDocument();
    });
});