import GridLogo from './GridLogo';

const ProjectBrand = ({ name }) => {
  if (name === 'EarnIt') {
    return (
      <span className="earnit-logo">
        <img src="/earnit_logo_white.webp" alt="EarnIt" />
      </span>
    );
  }

  if (name === 'Grid') {
    return <span className="project-brand"><GridLogo /><span className="grid-wordmark">Grid</span></span>;
  }

  return name;
};

export default ProjectBrand;
