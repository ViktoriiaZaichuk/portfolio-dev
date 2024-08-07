import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import heroImg from "../../assets/img/pages/projects-hero.webp";

import Layout from "../../components/layout/Layout";
import ProjectCard from "../../components/ui/ProjectCard";
import Loader from '../../components/ui/Loader';

const Projects = () => {
    // Update the document title
    useEffect(() => {
        document.title = 'Projects - Viktoriia Zaichuk';
    }, []);

    const selectedLanguage = localStorage.getItem('language');
    const { t } = useTranslation();

    // GSAP animation
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3500);
    }, []); 

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
            {loading ? <Loader /> :
            <main className="projects">
                <section className="projects--hero">
                    <div className="projects--hero__img">
                        <img src={heroImg} alt="Selected projects" />
                    </div>
                    <div className="projects--hero__txt">
                        <h1>{t('projects.hero.title')}</h1>
                        <p>{t('projects.hero.description')}</p>
                    </div>
                </section>
                <section className="projects--list">
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
                </section>
            </main>
            }
        </Layout>
    )
}

export default Projects;