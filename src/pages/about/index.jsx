import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import heroImg from "../../assets/img/pages/about-hero.webp";
import infoImg from "../../assets/img/pages/about-info.webp";
import pdfCv from "../../assets/files/Viktoriia_Zaichuk_CV.pdf";

import Layout from "../../components/layout/Layout";
import Button from "../../components/ui/Button";
import Loader from '../../components/ui/Loader';

const About = () => {
    // Update the document title
    useEffect(() => {
        document.title = 'Web Developer - Viktoriia Zaichuk';
    }, []);

    const { t } = useTranslation();

    // GSAP animation
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3500);
    }, []); 

    // Download CV
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfCv;
        link.download = 'Viktoriia Zaichuk CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <Layout>
            {loading ? <Loader /> :
            <main className="about">
                <section className="about--hero">
                    <div className="about--hero__txt">
                        <h1>{t('about.hero.title')}</h1>
                        <p>{t('about.hero.p')}</p>
                    </div>
                    <div className="about--hero__img">
                        <img src={heroImg} alt="Viktoriia Zaichuk" />
                    </div>
                </section>

                <section className="about--intro">
                    <span>Creative</span>
                    <div>
                        <h2>{t('about.intro.title')}</h2>
                        <span>Developer</span>
                    </div>
                </section>

                <section className="about--info">
                    <div className="about--info__img">
                        <img src={infoImg} alt="Viktoriia Zaichuk" />
                    </div>
                    <div className="about--info__txt">
                        <p>{t('about.info.txt01')}</p>
                        <p>{t('about.info.txt02')}</p>
                    </div>
                </section>

                <section className="about--skills">
                    <div className="about--skills__txt">
                        <h2>{t('about.skills.title')}</h2>
                        <p>{t('about.skills.description')}</p>
                    </div>
                    <div className="about--skills__list">
                        <div className="skills-card">
                            <h3>Front-end</h3>
                            <span>#JavaScript</span>
                            <span>#React</span>
                            <span>#HTML</span>
                            <span>#CSS</span>
                            <span>#Sass</span>
                            <span>#Bootstrap</span>
                            <span>#Wordpress</span>
                            <span>#Wix</span>
                        </div>
                        <div className="skills-card">
                            <h3>Back-end</h3>
                            <span>#Php</span>
                            <span>#Laravel</span>
                            <span>#Python</span>
                            <span>#Django</span>
                            <span>#Node.js</span>
                            <span>#SQL</span>
                        </div>
                        <div className="skills-card">
                            <h3>Design</h3>
                            <span>#UX</span>
                            <span>#UI</span>
                            <span>#Photoshop</span>
                            <span>#Illustrator</span>
                            <span>#Figma</span>
                            <span>#Adobe XD</span>
                        </div>
                        <div className="skills-card">
                            <h3>Other</h3>
                            <span>#Git</span>
                            <span>#GitHub</span>
                            <span>#VS Code</span>
                            <span>#Jira</span>
                            <span>#Trello</span>
                        </div>
                    </div>
                    <div className="about--skills__cv">
                        <p>{t('about.skills.cv')}</p>
                        <Button
                            text={t('about.skills.btn')}
                            onClick={handleDownload}
                            className="main-button" 
                        />
                    </div>
                </section>
            </main>
            }
        </Layout>
    ) 
}

export default About;