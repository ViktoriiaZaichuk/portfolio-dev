import React from "react";
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Layout from "../../components/layout/Layout";

const Project = () => {
    const { t } = useTranslation();

    const { id } = useParams();

    const projectTitle = t(`projects.${id}.title`);
    const projectDescription = t(`projects.${id}.description`);
    const projectTags = t(`projects.${id}.tags`);
    const projectLongDescription = t(`projects.${id}.longDescription`);

    return (
        <Layout>
            <main className="project">
                <div className="project--hero">
                    <h2>{projectTitle}</h2>
                </div>
                <div className="project--intro">
                    <p>{projectDescription}</p>
                    <p>{projectTags}</p>
                </div>
                <div className="project--description">
                    <p>{projectLongDescription}</p>
                </div>
            </main>
        </Layout>
    )
}

export default Project;