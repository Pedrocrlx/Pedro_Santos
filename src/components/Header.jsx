const Header = () => (
  <header className="header">
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="container header-container">
      <a href="#home" className="logo">ps<span>@</span>portfolio<span>:~</span></a>
      <nav aria-label="Main navigation">
        <ul className="nav-links">
          <li><a href="#about">about</a></li>
          <li><a href="#projects">projects</a></li>
          <li><a href="#contact">contact <span aria-hidden="true">↗</span></a></li>
        </ul>
      </nav>
    </div>
  </header>
);
export default Header;
