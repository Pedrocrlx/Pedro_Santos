import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="container header-container">
                <a href="#" className="logo">Pedro Santos</a>
                <nav>
                    <ul className="nav-links">
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
