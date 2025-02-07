import React from 'react';
import './HeroSection.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const HeroSection = () => {
    return (
        <div className="hero-section flex flex-col items-center justify-center h-[750px]">
            <img 
                src="/output-onlinepngtools (2).png"
                alt="Hero" 
                className="hero-image" 
            />
            <h3 className="group-members-heading mt-4">734 Group Members</h3>
            <div className="social-media-links mt-4">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </div>
    );
};

export default HeroSection;