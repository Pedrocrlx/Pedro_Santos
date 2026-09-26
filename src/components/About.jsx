const workflows = [
  ['01', 'Backend experience', 'During my internship at Devoteam Portugal, I contributed to API and database design for BA Glass and the xAi Agentic Framework, including new-table migrations. I also worked with CI/CD pipelines in Bitbucket.'],
  ['02', 'From code to deployment', <>
    I’ve deployed <a className="text-link" href="https://midnightlibrary.pedrocrlx.pt" target="_blank" rel="noopener noreferrer">MidnightLibrary ↗</a> and{' '}
    <a className="text-link" href="https://devtoolbox.pedrocrlx.pt" target="_blank" rel="noopener noreferrer">DevToolBox ↗</a> on my personal VPS.
    MidnightLibrary has CI through GitHub Actions; CD is planned. EarnIt’s VPS deployment is also upcoming.
  </>],
  ['03', 'Technical ownership', 'I led both final-year project teams at ETIC Algarve, shaping architecture and technology choices, coordinating deliveries and balancing feature scope with deadlines.'],
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
