import React from 'react';

const NavBurger = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className={`burger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
    </div>
  );
};

export default NavBurger;