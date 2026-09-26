import { useEffect } from 'react';

const projects = [
  {
    name: 'SubHub',
    context: 'First-year final project',
    description: 'From Figma designs to project planning and implementation. I led the team, coordinated deliveries and helped define features, alongside the technical architecture and stack.',
    url: 'https://github.com/Pedrocrlx/SubHub',
  },
  {
    name: 'EarnIt',
    context: 'Second-year final project',
    description: 'Another opportunity to lead a team through a complete project. My responsibilities included feature planning, delivery coordination and technical decisions, while helping teammates across different parts of the application.',
    url: 'https://github.com/Pedrocrlx/EarnIt',
  },
  {
    name: 'Grid',
    context: 'Frontend II · React / Next.js',
    description: 'A chance to put React and Next.js into practice and take an application online with Vercel.',
    url: 'https://github.com/Pedrocrlx/grid',
    live: 'https://gridschedule.com',
  },
  {
    name: 'Cloud Infrastructure Automation',
    context: 'Cloud Computing · Kubernetes / Terraform / Minikube',
    description: 'Exploring infrastructure automation and working with Kubernetes, Terraform and a local Minikube environment.',
    url: 'https://github.com/Pedrocrlx/Cloud-Infrastructure-Automation-v2',
  },
  {
    name: 'MidnightLibrary',
    context: 'Group project · Databases',
    description: 'A group project focused on databases, also deployed on a VPS with Docker Compose and Nginx. The setup runs Django and PostgreSQL on an internal Docker network, with HTTPS and persistent database storage. CI is implemented with GitHub Actions; automated deployment is planned.',
    url: 'https://github.com/Pedrocrlx/MidnightLibrary',
  },
];

const AboutPage = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'About me | Pedro Santos';
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <article id="home" className="about-page container">
      <a className="text-link about-back" href="/">← Back to portfolio</a>
      <div className="terminal-bar"><span>~/pedro-santos/about</span><span>about.md</span></div>
      <header className="hero-content about-page-hero">
        <div className="hero-copy">
          <p className="command"><span aria-hidden="true">$ </span>cat about.md</p>
          <h1>About me<span className="cursor" aria-hidden="true">_</span></h1>
          <p className="subtitle">Making things work. Keeping them simple.</p>
          <p className="bio">I’m Pedro, a software developer drawn to backend development,
            infrastructure and automation. I enjoy understanding how the pieces fit together,
            finding straightforward solutions and making repetitive work easier.</p>
        </div>
        <div className="hero-portrait">
          <img src="/me.png" alt="Pedro Santos" width="1122" height="1402" fetchPriority="high" />
        </div>
      </header>
      <div className="hero-meta"><span>Backend / Infrastructure / Automation</span><span>Open to work</span></div>

      <section className="about-chapter" aria-labelledby="story-title">
        <div className="section-heading"><h2 id="story-title"><span aria-hidden="true">01 / </span>My journey</h2><span>HOW IT STARTED</span></div>
        <div className="about-prose">
          <p>My first steps in programming came during secondary school, through the professional
            course in Software Development (Técnico de Desenvolvimento de Software). I learned the
            basics of programming logic, algorithms and data structures, explored object-oriented
            programming with C#, and started building for the web with HTML, CSS and JavaScript.</p>
          <h3>Where it became real</h3>
          <p>My frontend internship at Kapta in Albufeira was a turning point. I went from classroom
            exercises to real deliveries, deadlines and expectations. Working with PHP and jQuery,
            I learned about HTTP and APIs while enjoying the process of building web applications.
            That experience made me want to go further.</p>
          <h3>Learning by building</h3>
          <p>I continued with the Web Development course at ETIC Algarve in Faro. It broadened my
            perspective from individual web pages to complete applications and the infrastructure
            behind them. Through practical work, I explored frontend and backend development,
            databases, version control and cloud infrastructure. Just as valuable were the people
            I met and the professionals I had the chance to learn from.</p>
          <h3>Backend experience at Devoteam</h3>
          <p>For my ETIC internship, I joined Devoteam Portugal as a Python backend intern.
            I contributed to BA Glass and the xAi Agentic Framework, working on APIs, database
            models, migrations and unit tests. I also took responsibility for backend development
            on the AI Skills initiative, delivered data for analytics dashboards and helped improve
            API consistency and resolve CI/CD failures in Bitbucket Pipelines.</p>
          <h3>The next step</h3>
          <p>Having completed the ETIC course, I’m preparing to start in October 2026 with the Software Engineering
            Top-Up Year at Teesside University, in collaboration with ETIC Algarve, towards a
            bachelor’s degree.</p>
        </div>
      </section>

      <section className="about-chapter" aria-labelledby="approach-title">
        <div className="section-heading"><h2 id="approach-title"><span aria-hidden="true">02 / </span>How I work</h2><span>BEYOND THE CODE</span></div>
        <div className="about-prose">
          <p>In team projects, I naturally gravitate towards the bigger technical picture:
            choosing the stack, structuring the codebase and thinking through how the application
            should fit together. I also like being able to move between different areas and help
            wherever the team needs me.</p>
          <p>For both of my final-year projects, I led the group, coordinated deliveries and helped
            define the features. The hardest part was balancing what we wanted to build with the
            time we had. Those projects taught me how closely technical decisions, scope and
            teamwork are connected.</p>
        </div>
        <div className="about-prose">
          <p>Automation is also part of how I’m developing my personal projects. MidnightLibrary
            already has CI through GitHub Actions. My next step is to implement CD and extend
            automated deployments to the other projects on my VPS.</p>
        </div>
        <div className="about-principle"><span className="item-number">// WHAT DRIVES ME</span>
          <p>Find a simple solution. Make it work. Automate the repetitive parts.</p>
        </div>
      </section>

      <section className="about-chapter" aria-labelledby="learning-title">
        <div className="section-heading"><h2 id="learning-title"><span aria-hidden="true">03 / </span>Learning in practice</h2><span>PROJECT NOTES</span></div>
        <div className="about-projects">
          {projects.map((project, index) => (
            <article className="about-project" key={project.name}>
              <span className="item-number">[0{index + 1}]</span>
              <div>
                <h3>{project.name}</h3>
                <p className="about-project-context">{project.context}</p>
                <p>{project.description}</p>
                <div className="about-project-links">
                  <a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer">View source ↗</a>
                  {project.live && <a className="text-link" href={project.live} target="_blank" rel="noopener noreferrer">Visit Grid ↗</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-chapter" aria-labelledby="next-title">
        <div className="section-heading"><h2 id="next-title"><span aria-hidden="true">04 / </span>What’s next</h2><span>OPEN TO WORK</span></div>
        <div className="about-prose">
          <p>This portfolio is a place to share what I’ve built and how I approach problems.
            I’m also looking for a role where I can contribute, keep learning and work on the
            backend, infrastructure and automation challenges that interest me most.</p>
        </div>
        <div className="hero-actions">
          <a href="/#projects" className="btn btn-primary">Explore my work <span aria-hidden="true">↗</span></a>
          <a href="mailto:pedropsantos.dev@gmail.com" className="text-link">Let’s talk <span aria-hidden="true">→</span></a>
        </div>
      </section>
    </article>
  );
};

export default AboutPage;
