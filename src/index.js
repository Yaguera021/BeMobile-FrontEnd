import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FilterProvider } from './context/FilterContext.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <FilterProvider>
      <App />
    </FilterProvider>
  </BrowserRouter>,
);
