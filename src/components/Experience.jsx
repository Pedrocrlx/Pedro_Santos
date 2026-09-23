import React from 'react';
import { FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa';

const experienceData = [
    {
        id: 1,
        type: 'work',
        title: 'Backend Intern (Python)',
        organization: 'Devoteam Portugal · Lisbon',
        date: 'May – Aug 2026',
        description: 'Contributed to BA Glass and the xTeam Agentic Framework, developing backend APIs, database models and migrations. Delivered payloads for analytics dashboards, implemented unit tests and owned backend development for the AI Skills initiative. Improved REST API consistency through unique IDs and pagination, refactored core endpoints and resolved CI/CD pipeline failures.',
        icon: <FaBriefcase />,
        highlight: true
    },
    {
        id: 2,
        type: 'education',
        title: 'Web Development',
        organization: 'ETIC Algarve',
        date: 'Sep 2024 – 2026',
        description: 'Course focused on Python, APIs, Git, Docker and backend development.',
        icon: <FaCode />,
        highlight: false
    },
    {
        id: 3,
        type: 'work',
        title: 'Frontend Developer (Internship)',
        organization: 'Kapta · Albufeira',
        date: 'Apr – Jul 2022',
        description: 'Developed responsive interfaces and basic backend features for administrative web systems using HTML, CSS, JavaScript, Bootstrap, PHP and jQuery.',
        icon: <FaBriefcase />,
        highlight: false
    },
    {
        id: 4,
        type: 'education',
        title: 'IT Management and Computer Programming Technician',
        organization: 'Escola Secundária de Albufeira',
        date: 'Sep 2019 – May 2022',
        description: 'Technical education in IT management and computer programming.',
        icon: <FaGraduationCap />,
        highlight: false
    }
];

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <div className="section-heading"><h2><span aria-hidden="true">02 / </span>journey.log</h2><span>EXPERIENCE & EDUCATION</span></div>
                <div className="timeline">
                    {experienceData.map((item) => (
                        <div key={item.id} className={`timeline-item ${item.highlight ? 'highlight' : ''}`}>
                            <div className="timeline-icon">
                                {item.icon}
                            </div>
                            <div className="timeline-content">
                                <span className="timeline-date">{item.date}</span>
                                <h3>{item.title}</h3>
                                <h4 className="timeline-org">{item.organization}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
