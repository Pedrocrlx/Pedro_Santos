const ProjectCard = ({ project }) => (
  <article className="project-card">
    <span className="item-number">{String(project.id).padStart(2, '0')}</span>
    <div className="project-info">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="tags" aria-label="Technologies">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    </div>
    {project.link && project.link !== '#' ? (
      <a href={project.link} className="text-link" aria-label={`View ${project.title}`}>View project ↗</a>
    ) : <span className="project-status">Link pending</span>}
  </article>
);
export default ProjectCard;
