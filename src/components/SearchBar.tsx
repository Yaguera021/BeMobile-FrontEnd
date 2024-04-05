import React from 'react';
import './SearchBar.css';
import SearchIcon from '../assets/searchicon.svg';

function SearchBar() {
  return (
    <div className='search-container'>
      <h4>Funcionários</h4>
      <div className='input-container'>
        <input type='text' placeholder='Pesquisar' />
        <button className='search-button'>
          <img src={SearchIcon} alt='search' />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
