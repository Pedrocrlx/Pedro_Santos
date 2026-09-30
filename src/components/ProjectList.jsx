import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const ProjectList = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <div className="section-heading"><h2><span aria-hidden="true">04 / </span>projects/</h2><span>SELECTED WORK</span></div>
                <p className="projects-intro">Three projects exploring different approaches to building and running software:
                    self-hosted infrastructure, managed services, and infrastructure automation.</p>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectList;
