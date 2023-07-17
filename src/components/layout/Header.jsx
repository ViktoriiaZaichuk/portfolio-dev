import React from 'react';
import LanguageSwitch from '../header/LanguageSwitch';
import ThemeSwitch from '../header/ThemeSwitch';

const Header = () => {
    return (
        <div className=''>
            <p>Header</p>
            <ThemeSwitch />
            <LanguageSwitch />
        </div>
    )
}

export default Header;