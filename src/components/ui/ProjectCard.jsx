import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, projectId }) => {
    return (
        <Link to={`/project/${projectId}`} className="project-card-link">
            <div className="project-card">
                <div className='project-card--img'>
                    <img src="" alt={title} />
                </div>
                <div className='project-card--txt'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard;