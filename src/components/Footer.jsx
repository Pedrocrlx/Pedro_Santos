const Footer = () => (
  <footer id="contact" className="footer">
    <div className="container">
      <div className="section-heading"><h2><span aria-hidden="true">05 / </span>contact.txt</h2><span>GET IN TOUCH</span></div>
      <div className="contact-content">
        <h3>Let’s build something<br />that works.</h3>
        <p>
          <a className="text-link" href="https://github.com/pedrocrlx" target="_blank" rel="noopener noreferrer">GitHub: pedrocrlx ↗</a>
          <br />
          <a className="text-link" href="https://www.linkedin.com/in/p-santoss" target="_blank" rel="noopener noreferrer">LinkedIn: Pedro Santos ↗</a>
          <br />
          <a className="text-link" href="mailto:pedropsantos.dev@gmail.com">pedropsantos.dev@gmail.com</a>
        </p>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Pedro Santos</span><a href="#home">Back to top ↑</a></div>
    </div>
  </footer>
);
export default Footer;
