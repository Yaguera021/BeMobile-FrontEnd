import React from 'react';
import './Header.css';
const BeIcon = require('../assets/bemobile-icon.svg') as string;

function Header() {
  return (
    <div className='header'>
      <img src={BeIcon} alt='Be Mobile Icon' className='icon' />
    </div>
  );
}
export default Header;
