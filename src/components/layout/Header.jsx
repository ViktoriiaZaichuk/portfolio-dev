import React from 'react';
import Logo from '../header/Logo';
import NavBar from '../header/NavBar';
import LanguageSwitch from '../header/LanguageSwitch';
import ThemeSwitch from '../header/ThemeSwitch';

const Header = () => {
    return (
        <header className='header'>
            <Logo />
            <NavBar />
            <div className='header--actions'>
                <ThemeSwitch />
                <LanguageSwitch />
            </div>
        </header>
    )
}

export default Header;