import React from 'react';
import './AboutSection.css'; // Import the CSS for the About Section

const AboutSection = () => {
    return (
        <div id="about" className="about-section">
            <h2 className="about-heading">About</h2>
            <div className="about-content">
                <div className="about-description">
                    <p>
                        Welcome to Google Developer Group on Campus ABESEC – a vibrant community of students and tech enthusiasts at ABES Engineering College. As part of the global GDG network, we provide opportunities to learn, collaborate, and innovate using Google's developer tools.
                    </p>
                    <h3>What We Offer:</h3>
                    <ul>
                        <li>Hands-on workshops on Android, Firebase, Cloud, and more</li>
                        <li>Tech meetups and discussions with experts</li>
                        <li>Hackathons & coding challenges</li>
                        <li>Networking with professionals and peers</li>
                        <li>Mentorship to boost your skills</li>
                    </ul>
                    <p>
                        Join us and be part of a community dedicated to growth and innovation at Google Developer Group on Campus ABESEC!
                    </p>
                </div>
                <div className="about-image">
                    <img src="/about3.png" alt="About GDG" /> {/* Replace with your image path */}
                </div>
            </div>
        </div>
    );
};

export default AboutSection; 