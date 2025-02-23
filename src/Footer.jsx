import React from 'react';
import './Footer.css'; // Import the CSS for the Footer

const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer-container'>
                <div className="footer-column">
                    <img src="/gdglogo-removebg-preview.png" alt="Logo" className="footer-logo" /> 
                    <h3 className="footer-title">Google Developers Group</h3>
                </div>
                <div className="footer-column">
                    <h2 className="footer-heading">Quick Links</h2>
                    <ul className="footer-links">
                        <li><a href="#join" className="footer-link">Join the Community</a></li>
                        <li><a href="#about" className="footer-link">About GDG</a></li>
                        <li><a href="#chapters" className="footer-link">Chapters</a></li>
                        <li><a href="#events" className="footer-link">Upcoming Events</a></li>
                        <li><a href="#contact" className="footer-link">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 className="footer-heading">Follow Us</h3>
                    <div className="social-media-links">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fab fa-instagram"></i> {/* Instagram icon */}
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fab fa-linkedin"></i> {/* LinkedIn icon */}
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fab fa-github"></i> {/* GitHub icon */}
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Google Developers Group On Campus ABESEC</p>
            </div>
        </footer>
    );
};

export default Footer; 