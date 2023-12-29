import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, tags, projectId, img }) => {
    const imgPath = require(`../../assets/img/pages/${img}`);

    return (
        <Link to={`/project/${projectId}`} className="project-card-link">
            <div className="project-card">
                <div className='project-card--img'>
                <img src={imgPath} alt={title} />
                </div>
                <div className='project-card--txt'>
                    <h3>{title}</h3>
                    <p>{tags}</p>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard;