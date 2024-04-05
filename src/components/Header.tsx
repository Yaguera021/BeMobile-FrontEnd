import React from 'react';
import './Header.css';
import BeIcon from '../assets/bemobile-icon.svg';

function Header() {
  return (
    <div className='header'>
      <img src={BeIcon} alt='Be Mobile Icon' className='icon' />
    </div>
  );
}
export default Header;
