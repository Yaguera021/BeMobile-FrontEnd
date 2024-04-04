import React from 'react';
import './Header.css';
import icon from '../assets/bemobileicon.svg';

function Header() {
  return (
    <div className='header'>
      <img src={icon} alt='Be Mobile Icon' className='icon' />
    </div>
  );
}
export default Header;
