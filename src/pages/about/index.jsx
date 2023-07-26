import React from "react";
import { useTranslation } from 'react-i18next';

import Layout from "../../components/layout/Layout";

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
                            gfg
                    </div>
                    <div className="about--info__txt">
                        <p>{t('about.info.txt01')}</p>
                        <p>{t('about.info.txt02')}</p>
                    </div>
                </section>

                <section className="about--skills">
                </section>
            </main>
        </Layout>
    ) 
}

export default About;