import React from 'react';
import './styles/Header.css';
import { BeIcon } from '../svgImports';

function Header() {
  return (
    <div className='header' data-testid='header'>
      <img src={BeIcon} alt='Be Mobile Icon' className='icon' />
    </div>
  );
}
export default Header;
