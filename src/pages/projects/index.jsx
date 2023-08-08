import React from "react";

import Layout from "../../components/layout/Layout";
import ProjectCard from "../../components/ui/ProjectCard";

const Projects = () => {
    const selectedLanguage = localStorage.getItem('language');

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
            <main className="projects">
                <section className="projects--hero">
                    <h1>Projects</h1>
                </section>
                <section className="projects--list">
                    {Object.values(projects).map((project) => (
                        <ProjectCard
                        key={project.id}
                        title={project.title}
                        projectId={project.id}
                        description={project.description}
                        />
                    ))}
                </section>
            </main>
        </Layout>
    )
}

export default Projects;