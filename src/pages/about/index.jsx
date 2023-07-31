import React from "react";
import { useTranslation } from 'react-i18next';

import Layout from "../../components/layout/Layout";
import Button from "../../components/ui/Button";

const About = () => {
    const { t } = useTranslation();

    return (
        <Layout>
            <main className="about">
                <section className="about--hero">
                    <h1>{t('about.hero.title')}</h1>
                    <p>{t('about.hero.p')}</p>
                </section>

                <section className="about--intro">
                    <h2>{t('about.intro.title')}</h2>
                </section>

                <section className="about--info">
                    <div className="about--info__img">
                        
                    </div>
                    <div className="about--info__txt">
                        <p>{t('about.info.txt01')}</p>
                        <p>{t('about.info.txt02')}</p>
                    </div>
                </section>

                <section className="about--skills">
                    <h2>{t('about.skills.title')}</h2>
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
                    <div>
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