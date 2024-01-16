import React, { useState } from 'react';

import Logo from '../header/Logo';
import NavBurger from '../header/NavBurger';
import NavBarMenu from '../header/NavBarMenu';
import LanguageSwitch from '../header/LanguageSwitch';
import ThemeSwitch from '../header/ThemeSwitch';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
 
    return (
        <header className='header'>
            <div className='header--box'>
                <Logo />
                <NavBurger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
                <div className='header--actions'>
                    <ThemeSwitch />
                    <LanguageSwitch />
                </div>
            </div>
            <NavBarMenu isMenuOpen={isMenuOpen} />
        </header>
    )
}

export default Header;