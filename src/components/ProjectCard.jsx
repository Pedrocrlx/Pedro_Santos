import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
                <a href={project.link} className="btn btn-secondary">View Project</a>
            </div>
        </div>
    );
};

export default ProjectCard;
