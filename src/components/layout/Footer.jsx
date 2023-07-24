import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className='footer'>
            <div className='footer--links'>
                <div>
                    <span><NavLink to="/">Viktoriia Zaichuk</NavLink></span>
                    <div>
                        <NavLink to="/about">
                            {t('navbar.about')}
                        </NavLink>
                        <NavLink to="/projects">
                            {t('navbar.projects')}
                        </NavLink>
                        <NavLink to="/contact">
                            {t('navbar.contact')}
                        </NavLink>
                    </div>
                </div>
                <div>
                    <div>Contact me</div>
                    <div>
                        <a>LinkedIn</a>
                        <a>Github</a>
                        <a>Design portfolio</a>
                        <a>Codepen</a>
                    </div>
                </div>
            </div>
            <div className='footer--legal'>
                <span>©2023 Viktoriia Zaichuk</span>
            </div>
        </footer>
    )
}

export default Footer;