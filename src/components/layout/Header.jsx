import React from 'react';
import LanguageSwitch from '../header/LanguageSwitch';
import ThemeSwitch from '../header/ThemeSwitch';

const Header = () => {
    return (
        <header className=''>
            <p>VZ</p>
            <ThemeSwitch />
            <LanguageSwitch />
        </header>
    )
}

export default Header;