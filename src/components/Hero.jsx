import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <h1>Hi, I'm Pedro Santos</h1>
                <p className="subtitle">Aspiring Developer | Student | Tech Enthusiast</p>
                <p className="bio">
                    I'm a final year student passionate about building software that solves real-world problems.
                    Here are some of the projects I've worked on during my academic journey.
                </p>
                <a href="#projects" className="btn btn-primary">View My Work</a>
            </div>
        </section>
    );
};

export default Hero;
