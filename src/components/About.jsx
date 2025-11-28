import React from 'react';
import { FaDocker, FaTerminal, FaCode } from 'react-icons/fa';

const About = () => {
    return (
        <section className="about-section fade-in">
            <div className="container">
                <h2>About Me & Workflow</h2>
                <div className="about-content">
                    <p className="about-intro">
                        I'm a passionate developer who values efficiency and reproducibility.
                        Beyond just writing code, I focus on building robust development environments
                        and automating workflows to ensure high-quality software delivery.
                    </p>

                    <div className="workflow-grid">
                        <div className="workflow-card">
                            <div className="workflow-icon">
                                <FaDocker />
                            </div>
                            <h3>Containerization</h3>
                            <p>
                                I use <strong>Docker</strong> and <strong>Docker Compose</strong> to orchestrate complex
                                multi-container applications, ensuring that my development environment
                                mirrors production perfectly.
                            </p>
                        </div>

                        <div className="workflow-card">
                            <div className="workflow-icon">
                                <FaTerminal />
                            </div>
                            <h3>Automation</h3>
                            <p>
                                I leverage <strong>Makefiles</strong> to streamline common tasks.
                                From setting up the environment to running tests and deployments,
                                everything is just a command away.
                            </p>
                        </div>

                        <div className="workflow-card">
                            <div className="workflow-icon">
                                <FaCode />
                            </div>
                            <h3>Dev Environments</h3>
                            <p>
                                I advocate for <strong>Devcontainers</strong> to create consistent,
                                version-controlled development environments that allow any team member
                                to start coding instantly without configuration headaches.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
