import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiPython,
  SiUv, SiNodedotjs, SiLinux, SiDocker, SiNginx, SiKubernetes,
  SiTerraform, SiPostgresql, SiRedis, SiGit, SiGithub, SiGnubash,
  SiBitbucket, SiGithubactions,
} from 'react-icons/si';
import { FiLock, FiBookOpen, FiDatabase, FiTool, FiBox } from 'react-icons/fi';

const stack = [
  ['Frontend', [['HTML', SiHtml5], ['CSS', SiCss3], ['JavaScript', SiJavascript], ['TypeScript', SiTypescript], ['React (Vite & Next.js)', SiReact]]],
  ['Backend', [['Python (FastAPI, Django)', SiPython], ['uv & Poetry', SiUv], ['Node.js', SiNodedotjs]]],
  ['Infrastructure', [['Linux / VPS', SiLinux], ['Docker & Docker Compose', SiDocker], ['Nginx reverse proxy', SiNginx], ['HTTPS / TLS', FiLock]]],
  ['Infrastructure labs', [['Kubernetes (Minikube)', SiKubernetes], ['Terraform', SiTerraform], ['ETIC coursework', FiBookOpen]]],
  ['Databases', [['PostgreSQL', SiPostgresql], ['SQL', FiDatabase], ['Redis', SiRedis]]],
  ['Development tools', [['Git', SiGit], ['GitHub', SiGithub], ['Makefiles', FiTool], ['Devcontainers', FiBox], ['Bash / Shell scripting', SiGnubash]]],
  ['CI/CD', [['Bitbucket Pipelines', SiBitbucket], ['GitHub Actions (CI)', SiGithubactions]]],
];
const Stack = () => (
  <section className="stack-section" id="stack">
    <div className="container">
      <div className="section-heading"><h2><span aria-hidden="true">03 / </span>toolbox.conf</h2><span>TOOLS OF THE TRADE</span></div>
      <dl className="stack-grid">
        {stack.map(([category, items]) => (
          <div className="stack-category" key={category}>
            <dt>{category}</dt>
            <dd>{items.map(([label, icon]) => (
              <span className="stack-item" key={label}>
                {createElement(icon, { className: 'stack-icon', 'aria-hidden': true, focusable: 'false' })}
                <span>{label}</span>
              </span>
            ))}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);
export default Stack;
import { createElement } from 'react';
