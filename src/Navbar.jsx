import React, { useState } from 'react';
import './Navbar.css'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="logo">
                        <img src="/1.png" alt="Logo" className="logo-img" />

                        <span className="logo-text">Google Developer Group</span>
                    </div>
                    {/* <div className="hamburger" onClick={toggleMenu}>
                        <div className={`line ${isOpen ? 'open' : ''}`}></div>
                        <div className={`line ${isOpen ? 'open' : ''}`}></div>
                        <div className={`line ${isOpen ? 'open' : ''}`}></div>
                    </div> */}

                    <label className="hamburger">
                        <input type="checkbox" checked={isOpen} onChange={toggleMenu} />
                            <svg viewBox="0 0 32 32">
                                <path
                                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                                    className={`line line-top-bottom ${isOpen ? 'open' : ''}`}
                                ></path>
                                <path d="M7 16 L27 16" className={`line ${isOpen ? 'open' : ''}`}></path>
                            </svg>
                    </label>
                </div>
            </nav>
            {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li onClick={toggleMenu}>Home</li>
                <li onClick={toggleMenu}>About</li>
                <li onClick={toggleMenu}>Events</li>
                <li onClick={toggleMenu}>Contact Us</li>
                <li onClick={toggleMenu}>Join Us</li>
            </ul>
        </>
    );
};

export default Navbar; 