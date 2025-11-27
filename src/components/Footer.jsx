import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container footer-content">
                <div className="contact-info">
                    <h3>Contact Me</h3>
                    <p>Email: pedro.santos@example.com</p>
                    <p>LinkedIn: linkedin.com/in/pedrosantos</p>
                    <p>GitHub: github.com/pedrosantos</p>
                </div>
                <div className="copyright">
                    <p>&copy; {new Date().getFullYear()} Pedro Santos. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
