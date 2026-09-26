const stack = [
  ['Frontend', ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React (Vite & Next.js)']],
  ['Backend', ['Python (FastAPI, Django)', 'uv & Poetry', 'Node.js']],
  ['Infrastructure', ['Linux / VPS', 'Docker & Docker Compose', 'Nginx reverse proxy', 'HTTPS / TLS']],
  ['Infrastructure labs', ['Kubernetes (Minikube)', 'Terraform', 'ETIC coursework']],
  ['Databases', ['PostgreSQL', 'SQL', 'Redis']],
  ['Development tools', ['Git', 'GitHub', 'Makefiles', 'Devcontainers', 'Bash / Shell scripting']],
  ['CI/CD', ['Bitbucket Pipelines', 'GitHub Actions (CI)']],
];
const Stack = () => (
  <section className="stack-section" id="stack">
    <div className="container">
      <div className="section-heading"><h2><span aria-hidden="true">03 / </span>toolbox.conf</h2><span>TOOLS OF THE TRADE</span></div>
      <dl className="stack-grid">
        {stack.map(([category, items]) => (
          <div className="stack-category" key={category}>
            <dt>{category}</dt><dd>{items.map(item => <span className="stack-item" key={item}>{item}</span>)}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);
export default Stack;
