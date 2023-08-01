import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, projectId }) => {
    return (
        <Link to={`/project/${projectId}`} className="project-card-link">
            <div className="project-card">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </Link>
    )
}

export default ProjectCard;