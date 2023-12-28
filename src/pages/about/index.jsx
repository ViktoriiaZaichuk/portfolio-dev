import React from "react";
import { useTranslation } from 'react-i18next';

import infoImg from "../../assets/img/pages/about-info.webp";
import heroImg from "../../assets/img/pages/about-hero.webp";

import Layout from "../../components/layout/Layout";
import Button from "../../components/ui/Button";

const About = () => {
    const { t } = useTranslation();

    return (
        <Layout>
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
                    <div>
                        <h2>{t('about.skills.title')}</h2>
                    </div>
                    <div className="about--skills__list">
                        <span>#JavaScript</span>
                        <span>#React</span>
                        <span>#HTML</span>
                        <span>#CSS</span>
                        <span>#Sass</span>
                        <span>#Wordpress</span>
                        <span>#Wix</span>
                        <span>#Php</span>
                        <span>#Laravel</span>
                        <span>#Python</span>
                        <span>#Django</span>
                        <span>#Node.js</span>
                        <span>#SQL</span>
                    </div>
                    <div className="about--skills__cv">
                        <p>{t('about.skills.cv')}</p>
                        <Button
                            text={t('about.skills.btn')}
                            /* onClick={handleClick} */
                            className="main-button" 
                        />
                    </div>
                </section>
            </main>
        </Layout>
    ) 
}

export default About;