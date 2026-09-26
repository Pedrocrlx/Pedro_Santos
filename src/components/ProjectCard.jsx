const ProjectCard = ({ project }) => (
  <article className="project-card">
    <span className="item-number">{String(project.id).padStart(2, '0')}</span>
    <div className="project-info">
      <h3><ProjectBrand name={project.title} /></h3>
      <p>{project.description}</p>
      <ul className="tags" aria-label="Technologies and focus areas">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    </div>
    {project.link && project.link !== '#' ? (
      <a href={project.link} className="text-link" target="_blank" rel="noopener noreferrer" aria-label={`${project.linkLabel || 'View project'}: ${project.title}`}>{project.linkLabel || 'View project'} ↗</a>
    ) : <span className="project-status">{project.status || 'Link pending'}</span>}
  </article>
);
export default ProjectCard;
import ProjectBrand from './ProjectBrand';
