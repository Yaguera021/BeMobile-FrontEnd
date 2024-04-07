import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, screen } from '@testing-library/react';
import renderWithProviders from '../utils/renderWithProviders';
import App from '../App.js';

describe('App', () => {
  test('Renderiza a aplicação e verifica os elementos iniciais', () => {
    renderWithProviders(<App />);

    const header = screen.getByTestId('header');
    const searchBar = screen.getByTestId('search-bar');
    const employeeTable = screen.getByTestId('employee-table');

    expect(header).toBeInTheDocument();
    expect(searchBar).toBeInTheDocument();
    expect(employeeTable).toBeInTheDocument();
  });
});

describe('Employee Table', () => {
  test('Renderiza a aplicação e verifica se a tabela  é exibida', () => {
    global.innerWidth = 1024;

    renderWithProviders(<App />);

    const mobileTable = screen.queryByTestId('mobile-table');
    const employeeTable = screen.getByTestId('employee-table');

    expect(mobileTable).not.toBeInTheDocument();
    expect(employeeTable).toBeInTheDocument();
  });
});

describe('Mobile Table', () => {
  test('Renderiza a aplicação e verifica se a tabela mobile é exibida', () => {
    global.innerWidth = 650;

    renderWithProviders(<App />);

    const mobileTable = screen.getByTestId('mobile-table');
    const employeeTable = screen.queryByTestId('employee-table');

    expect(mobileTable).toBeInTheDocument();
    expect(employeeTable).not.toBeInTheDocument();
  });
});

describe('Search Bar', () => {
  test('Renderiza a aplicação e verifica se a barra de pesquisa é exibida', () => {
    renderWithProviders(<App />);

    const searchBar = screen.getByTestId('search-bar');

    expect(searchBar).toBeInTheDocument();
  });

  test('Renderiza a aplicação e verifica se a barra de pesquisa é funcional', async () => {
    renderWithProviders(<App />);

    const searchBar = screen.getByPlaceholderText('Pesquisar');

    fireEvent.change(searchBar, { target: { value: 'Mario' } });

    expect(searchBar.value).toBe('Mario');
  });
});
