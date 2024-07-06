import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Layout from "../../components/layout/Layout";
import Loader from '../../components/ui/Loader';

const Project = () => {
    const { t } = useTranslation();

    // GSAP animation
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3500);
    }, []); 

    const { id } = useParams();

    const projectTitle = t(`projects.${id}.title`);
    const projectDescription = t(`projects.${id}.description`);
    const projectTags = t(`projects.${id}.tags`);
    const projectGithub = t(`projects.${id}.github`);
    const projectGithubLink = t(`projects.${id}.githubLink`);
    const projectType = t(`projects.${id}.type`);
    const projectTask = t(`projects.${id}.task`);
    const projectImg = t(`projects.${id}.img01`);
    const projectLongDescription01 = t(`projects.${id}.longDescription01`);
    const projectLongDescription02 = t(`projects.${id}.longDescription02`);


    console.log(projectImg);
    const imgPath = require(`../../assets/img/projects/${projectImg}`);

    // Update the document title
    useEffect(() => {
        document.title = projectTitle;
    }, []);

    return (
        <Layout>
            {loading ? <Loader /> :
            <main className="project">
                <div className="project--hero">
                    <div className="project--hero__txt">
                        <h1>{projectTitle}</h1>
                        <p>{projectDescription}</p>
                    </div>
                    <div className="project--hero__img">
                        <img src={imgPath} alt={projectTitle} />
                    </div>
                </div>
                <div className="project--intro">
                    <div className="project--intro__specs">
                        <span className="type">Type:</span>
                        <span className="tech">Technologies:</span>
                        <span className="git">Github:</span>
                        <span>{projectType}</span>
                        <span>{projectTags}</span>
                        <span>
                            <a href={projectGithubLink} target='blanc'>
                                {projectGithub}
                            </a>
                        </span>
                    </div>
                    <div className="project--intro__task">
                        <span>Challenge:</span>
                        <p>{projectTask}</p>
                    </div>
                </div>
                <div className="project--description">
                    <p>{projectLongDescription01}</p>
                    <p>{projectLongDescription02}</p>
                </div>
            </main>
            }
        </Layout>
    )
}

export default Project;