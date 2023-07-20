import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
    const { t } = useTranslation();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='navbar'>
            <div className={`burger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            <ul className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
                <li>
                    <a>{t('navbar.about')}</a>
                </li>
                <li>
                    <a>{t('navbar.projects')}</a>
                </li>
                <li>
                    <a>{t('navbar.contact')}</a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;