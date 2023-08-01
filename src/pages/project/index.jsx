import React from "react";
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Layout from "../../components/layout/Layout";

const Project = () => {
    const { t } = useTranslation();

    const { id } = useParams();

    const projectTitle = t(`projects.${id}.title`);
    const projectDescription = t(`projects.${id}.description`);

    return (
        <Layout>
            <main className="project">
            <h2>{projectTitle}</h2>
            <p>{projectDescription}</p>
            
            </main>
        </Layout>
    )
}

export default Project;