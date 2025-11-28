import React from 'react';
import { FaDocker, FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt, FaGithub, FaNodeJs } from 'react-icons/fa';
import { SiPoetry, SiDjango, SiFastapi, SiPostgresql, SiSqlalchemy, SiUv } from 'react-icons/si';

const stackData = [
    {
        category: "Frontend",
        items: [
            { name: "HTML", icon: <FaHtml5 />, color: "#e34c26" },
            { name: "CSS", icon: <FaCss3Alt />, color: "#264de4" },
            { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
            { name: "React", icon: <FaReact />, color: "#61dafb" },
        ]
    },
    {
        category: "Backend",
        items: [
            { name: "Python", icon: <FaPython />, color: "#3776ab" },
            { name: "Uv", icon: <SiUv />, color: "#ca43ffff" },
            { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
            { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
            { name: "Django", icon: <SiDjango />, color: "#092e20" },
            { name: "Poetry", icon: <SiPoetry />, color: "#60a5fa" },
        ]
    },
    {
        category: "Infrastructure & Tools",
        items: [
            { name: "Docker", icon: <FaDocker />, color: "#2496ed" },
            { name: "Git", icon: <FaGitAlt />, color: "#f05032" },
            { name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
        ]
    },
    {
        category: "Databases",
        items: [
            { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
            { name: "SQL", icon: <span style={{ fontSize: '0.8em', fontWeight: 'bold' }}>SQL</span>, color: "#e5e7eb" },
        ]
    }
];

const Stack = () => {
    return (
        <section className="stack-section fade-in">
            <div className="container">
                <h2>My Tech Stack</h2>
                <div className="stack-grid">
                    {stackData.map((category, index) => (
                        <div key={index} className="stack-category">
                            <h3>{category.category}</h3>
                            <div className="stack-items">
                                {category.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="stack-item" style={{ '--hover-color': item.color }}>
                                        <div className="stack-icon" style={{ color: item.color }}>
                                            {item.icon}
                                        </div>
                                        <span>{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Stack;
