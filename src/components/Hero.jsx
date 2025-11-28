import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="hero fade-in">
            <div className="container hero-content">
                <div className="hero-badge">
                    <span className="pulse"></span>
                    Open to Internships
                </div>

                <h1>
                    Building Scalable <span className="text-gradient">Software</span> <br />
                    & Modern Web Experiences
                </h1>

                <p className="subtitle">
                    2nd Year Web Programming Student at <strong>ETIC Algarve</strong>
                </p>

                <p className="bio">
                    I'm a dedicated developer focused on mastering <strong>Infrastructure</strong> (Docker)
                    and <strong>Full Stack Development</strong> (React, Python).
                    Currently seeking opportunities to apply my skills in a real-world environment.
                </p>

                <div className="hero-actions">
                    <a href="#projects" className="btn btn-primary">View Projects</a>
                    <a href="#contact" className="btn btn-secondary">Contact Me</a>
                </div>

                <div className="social-links">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
