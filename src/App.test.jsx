import React from "react";
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';
import { GlobalProvider } from "./context/GlobalContext";

describe('App component', () => {
  it('renderiza la app', () => {
    render(
      <GlobalProvider>
        <App></App>
      </GlobalProvider>
    );

    //Existe div clasName='App'
    const divApp = document.querySelector('.App');
    expect(divApp).toBeInTheDocument();
  });
});