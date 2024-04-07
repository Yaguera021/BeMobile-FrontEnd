import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { FilterProvider } from '../context/FilterContext';

const renderWithProviders = (ui, options = {}) => {
  return render(
    <BrowserRouter>
      <FilterProvider>{ui}</FilterProvider>
    </BrowserRouter>,
    options,
  );
};

export default renderWithProviders;
