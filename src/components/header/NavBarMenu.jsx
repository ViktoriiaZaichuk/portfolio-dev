import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const NavBarMenu = ({ isMenuOpen }) => {
  const { t } = useTranslation();

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <ul className="menu-items">
        <li>
          <NavLink to="/">
            {t('navbar.home')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            {t('navbar.about')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects">
            {t('navbar.projects')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            {t('navbar.contact')}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarMenu;