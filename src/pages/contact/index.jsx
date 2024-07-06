import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import heroImg from "../../assets/img/pages/contact-hero.webp";

import Layout from "../../components/layout/Layout";
import Loader from '../../components/ui/Loader';
import Button from "../../components/ui/Button";


const Contact = () => {
    // Update the document title
    useEffect(() => {
        document.title = 'Contact - Viktoriia Zaichuk';
    }, []);


    const { t } = useTranslation();

    // GSAP animation
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3500);
    }, []); 

    const emailAddress = 'viktoriia.zaichuk@gmail.com';
    const subject = 'Hi, Viktoriia!';


    const handleClick = () => {
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
        window.location.href = mailtoLink;
    };


    return (
        <Layout>
            {loading ? <Loader /> :
            <main className="contact">
                <section className="contact--hero">
                    <h1>Contact</h1>
                    <div className="contact--hero__txt">
                        <div>
                            <div className="contact-location">
                                <span>Location</span>
                                <h3>Toulouse</h3>
                            </div>
                            <div className="contact-btn">
                                <span>E-mail</span>
                                <Button
                                    text={t('footer.button')}
                                    onClick={handleClick}
                                    className="main-button" 
                                />
                            </div>
                        </div>
                        <div>
                            <div className="contact-social">
                                <span>Social</span>
                                <div>
                                    <a href='https://www.linkedin.com/in/viktoriia-zaichuk-a303ba123/' target="_blank" rel="noreferrer">LinkedIn</a>
                                    <a href='https://github.com/ViktoriiaZaichuk' target='_blank' rel="noreferrer">Github</a>
                                    <a href='https://codepen.io/viktoriiazaichuk' target='_blank'  rel="noreferrer">Codepen</a>
                                    <a href='https://vikazaichuk.com/' target='_blank' rel="noreferrer">Design portfolio</a>
                                    <a href='https://www.behance.net/vikazaichuk' target='_blank' rel="noreferrer">Behance</a>
                                </div>
                            </div>
                            <div className="contact-img">
                                <img src={heroImg} alt="Contact" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            }
        </Layout>
    )
}

export default Contact;