import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Layout from "../../components/layout/Layout";
import homeHero from "../../assets/img/pages/home-hero.webp";
import homeIntro from "../../assets/img/pages/home-intro.webp";
import ProjectCard from "../../components/ui/ProjectCard";
import { Link } from "react-router-dom";

const Home = () => {
    // Update the document title
    useEffect(() => {
        document.title = 'Portfolio - Viktoriia Zaichuk';
        return () => {
            document.title = 'Portfolio - Viktoriia Zaichuk';
        };
    }, []);
    
    const selectedLanguage = localStorage.getItem('language');
    const { t } = useTranslation();

    let projectsData;
    if (selectedLanguage === 'fr') {
       projectsData = require('../../locales/fr/translation.json');
    } else {
      projectsData = require('../../locales/en/translation.json');
    }

    // Extract the projects object from projectsData
    const projects = projectsData.projects;

    return (
        <Layout>
            <main className="home">
                <section className="home--hero">
                    <div className="home--hero__txt">
                        <h6>{t('home.hero.description')}</h6>
                        <h1>{t('home.hero.title')}</h1>
                    </div>
                    <div className="home--hero__img">
                        <img src={homeHero} alt="Web developer" />
                    </div>
                </section>
                
                <section className="home--intro">
                    <div className="home--intro__txt">
                        <h2>{t('home.intro.title')}</h2>
                        <div>
                            <span>Frontend</span>
                            <span>Backend</span>
                            <span>UX/UI Design</span>
                        </div>
                    </div>
                    <div className="home--intro__img">
                        <div>

                        <p>{t('home.intro.p')}</p>
                        </div>
                        <div>
                            <img src={homeIntro} alt="Web development" />
                        </div>
                    </div>
                </section>

                <section className="home--projects">
                    <span>Selected projects</span>
                    <div className="home--projects__list">
                        {Object.values(projects).map((project) => (
                            <ProjectCard
                            key={project.id}
                            title={project.title}
                            tags={project.tags}
                            projectId={project.id}
                            description={project.description}
                            img={project.img}
                            />
                        ))}
                    </div>
                    <Link to="/projects" className="btn">
                        <svg width="71" height="26" viewBox="0 0 71 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_203_5" fill="white">
                                <path d="M0 6C0 2.68629 2.68629 0 6 0H56V17H6C2.68629 17 0 14.3137 0 11V6Z"/>
                            </mask>
                            <path d="M-2 6C-2 1.58172 1.58172 -2 6 -2H56V2H6C3.79086 2 2 3.79086 2 6H-2ZM56 19H6C1.58172 19 -2 15.4183 -2 11H2C2 13.2091 3.79086 15 6 15H56V19ZM6 19C1.58172 19 -2 15.4183 -2 11V6C-2 1.58172 1.58172 -2 6 -2V2C3.79086 2 2 3.79086 2 6V11C2 13.2091 3.79086 15 6 15V19ZM56 0V17V0Z" fill="#1D1D1D" mask="url(#path-1-inside-1_203_5)"/>
                            <path d="M70.25 15.567C70.5833 15.7594 70.5833 16.2406 70.25 16.433L56.75 24.2272C56.4167 24.4197 56 24.1791 56 23.7942V8.20577C56 7.82087 56.4167 7.58031 56.75 7.77276L70.25 15.567Z" fill="#1D1D1D"/>
                        </svg>
                        <span>{t('home.projects.btn')}</span>
                    </Link>
                </section>
            </main>
        </Layout>
    )
}

export default Home;