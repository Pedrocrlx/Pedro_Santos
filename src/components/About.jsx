const workflows = [
  ['01', 'Containerization', 'Docker and Docker Compose keep multi-container applications reproducible across development and production.'],
  ['02', 'Automation', 'Makefiles turn everyday tasks, tests and deployments into straightforward commands.'],
  ['03', 'Dev environments', 'Version-controlled Devcontainers give each team member a consistent place to start building.'],
];
const About = () => (
  <section id="about" className="about-section">
    <div className="container">
      <div className="section-heading"><h2><span aria-hidden="true">01 / </span>about.md</h2><span>THE APPROACH</span></div>
      <p className="about-intro">Good software starts with solid foundations. I care about efficient workflows,
        reproducible environments and code that is easy to work with.</p>
      <div className="workflow-grid">
        {workflows.map(([number, title, description]) => (
          <article className="workflow-card" key={number}>
            <span className="item-number">[{number}]</span><h3>{title}</h3><p>{description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
export default About;
