const Hero = () => (
  <section id="home" className="hero">
    <div className="container">
      <div className="terminal-bar"><span>~/pedro-santos</span><span>portfolio / index</span></div>
      <div className="hero-content">
        <p className="command"><span aria-hidden="true">$ </span>whoami</p>
        <h1>Pedro Santos<span className="cursor" aria-hidden="true">_</span></h1>
        <p className="subtitle">Full-stack development & infrastructure.</p>
        <p className="bio">I build web applications and the environments that run them.
          Working with React, Python and Docker, with a focus on simple,
          reliable software.</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">Explore projects <span aria-hidden="true">↗</span></a>
          <a href="#about" className="text-link">More about me <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div className="hero-meta"><span>Web development</span><span>React / Python / Docker</span></div>
    </div>
  </section>
);
export default Hero;
