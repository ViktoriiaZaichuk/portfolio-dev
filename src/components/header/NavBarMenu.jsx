import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';

import LanguageSwitch from '../header/LanguageSwitch';
import ThemeSwitch from '../header/ThemeSwitch';

const NavBarMenu = ({ isMenuOpen }) => {
  const { t } = useTranslation();

  const location = useLocation();
  // Determine if a given link matches the current location
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <ul className="menu-items">
        <li>
          <NavLink to="/portfolio-dev" className={isActive('/portfolio-dev') ? 'active-link' : ''}>
            {t('navbar.home')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={isActive('/about') ? 'active-link' : ''}>
            {t('navbar.about')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={isActive('/projects') ? 'active-link' : ''}>
            {t('navbar.projects')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={isActive('/contact') ? 'active-link' : ''}>
            {t('navbar.contact')}
          </NavLink>
        </li>
        <li className='menu-items__btns'>
          <ThemeSwitch />
          <LanguageSwitch />
        </li>
      </ul>
    </nav>
  );
};

export default NavBarMenu;