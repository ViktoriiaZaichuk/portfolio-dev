import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import Button from '../ui/Button';

const Footer = () => {
    const { t } = useTranslation();

    const emailAddress = 'viktoriia.zaichuk@gmail.com';
    const subject = 'Hi, Viktoriia!';


    const handleClick = () => {
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
        window.location.href = mailtoLink;
    };

    return (
        <footer className='footer'>
            <div className='footer--links'>
                <div className='footer--links__nav'>
                    <span className=''><NavLink to="/">Viktoriia Zaichuk</NavLink></span>
                    <p>{t('footer.position')}</p>
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
                <div className='footer--links__social'>
                    <div className='contact-links'>
                        <p>{t('footer.contactintro')}</p>
                        <Button
                            text={t('footer.button')}
                            onClick={handleClick}
                            className="main-button" 
                        />
                    </div>
                    <div className='social-links'>
                        <div>
                            <a href='https://www.linkedin.com/in/viktoriia-zaichuk-a303ba123/' target="_blank" rel="noreferrer">LinkedIn</a>
                            <a href='https://github.com/ViktoriiaZaichuk' target='_blank' rel="noreferrer">Github</a>
                            <a href='https://codepen.io/viktoriiazaichuk' target='_blank'  rel="noreferrer">Codepen</a>
                        </div>
                        <div>
                            <a href='https://vikazaichuk.com/' target='_blank' rel="noreferrer">Design portfolio</a>
                            <a href='https://www.behance.net/vikazaichuk' target='_blank' rel="noreferrer">Behance</a>
                        </div>
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