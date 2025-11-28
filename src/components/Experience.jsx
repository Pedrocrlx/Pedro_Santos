import React from 'react';
import { FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa';

const experienceData = [
    {
        id: 1,
        type: 'Internship',
        title: 'Open to Internships',
        organization: 'Your Company ?',
        date: '2026 - Present',
        description: 'Open to internships in the field of web development and full-stack development.',
        icon: <FaCode />,
        highlight: true
    },
    {
        id: 2,
        type: 'education',
        title: 'Web Programming Course',
        organization: 'ETIC Algarve',
        date: '2023 - 2025',
        description: 'Currently in the 2nd year, focusing on advanced web technologies, full-stack development, and modern software architecture.',
        icon: <FaCode />,
        highlight: true
    },
    {
        id: 3,
        type: 'work',
        title: 'Web Development Internship',
        organization: 'Kapta',
        date: '2022',
        description: 'Professional internship where I gained real-world experience. This pivotal moment sparked my true passion for web development and showed me the impact of digital solutions.',
        icon: <FaBriefcase />,
        highlight: false
    },
    {
        id: 4,
        type: 'education',
        title: 'Management & Programming of Computer Systems',
        organization: 'Professional High School Course',
        date: '2019 - 2022',
        description: 'A 3-year intensive course that laid the foundation for my technical skills, covering algorithms, database management, and system logic.',
        icon: <FaGraduationCap />,
        highlight: false
    }
];

const Experience = () => {
    return (
        <section className="experience-section fade-in">
            <div className="container">
                <h2>My Journey</h2>
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
