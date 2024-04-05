/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './SearchBar.css';
import { useFilter } from '../context/FilterContext.tsx';
const SearchIcon = require('../assets/search-icon.svg') as string;

function SearchBar() {
  const { filter, setFilter } = useFilter();
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = () => {
    setFilter(searchTerm.toLowerCase());
    setSearchTerm('');
  };

  return (
    <div className='search-container'>
      <h4>Funcionários</h4>
      <div className='input-container'>
        <input
          type='text'
          placeholder='Pesquisar'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className='search-button' onClick={handleSearch}>
          <img src={SearchIcon} alt='search' />
        </button>
      </div>
    </div>
  );
}
export default SearchBar;
