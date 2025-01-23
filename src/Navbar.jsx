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
                        {/* <img src="/Group 100628.svg" alt="Logo" className="logo-img" /> */}
                        <svg width="99" height="72" viewBox="0 0 208 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_41_14)">
                            <rect x="47" y="72.5903" width="51.7673" height="16.6656" rx="8.3328" transform="rotate(-29.6257 47 72.5903)" fill="#EA4335"/>
                            </g>
                            <g filter="url(#filter1_d_41_14)">
                            <rect x="55.1933" y="64.2992" width="51.3774" height="16.7732" rx="8.38658" transform="rotate(29.1503 55.1933 64.2992)" fill="#4282F2"/>
                            </g>
                            <g filter="url(#filter2_d_41_14)">
                            <rect x="160.238" y="78.3837" width="51.7673" height="16.6656" rx="8.3328" transform="rotate(150.374 160.238 78.3837)" fill="#FBBC04"/>
                            </g>
                            <g filter="url(#filter3_d_41_14)">
                            <rect x="152.045" y="86.6748" width="51.3774" height="16.7732" rx="8.38658" transform="rotate(-150.85 152.045 86.6748)" fill="#0F9D58"/>
                            </g>
                            <rect x="47" y="72.5903" width="51.7673" height="16.6656" rx="8.3328" transform="rotate(-29.6257 47 72.5903)" fill="#EA4335"/>
                            <rect x="55.1933" y="64.2992" width="51.3774" height="16.7732" rx="8.38658" transform="rotate(29.1503 55.1933 64.2992)" fill="#4282F2"/>
                            <rect x="160.238" y="78.3837" width="51.7673" height="16.6656" rx="8.3328" transform="rotate(150.374 160.238 78.3837)" fill="#FBBC04"/>
                            <rect x="152.045" y="86.6748" width="51.3774" height="16.7732" rx="8.38658" transform="rotate(-150.85 152.045 86.6748)" fill="#0F9D58"/>
                            <defs>
                            <filter id="filter0_d_41_14" x="0.0284119" y="0.0283813" width="147.181" height="134.02" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="25"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.917647 0 0 0 0 0.262745 0 0 0 0 0.207843 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_41_14"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_41_14" result="shape"/>
                            </filter>
                            <filter id="filter1_d_41_14" x="0.0444641" y="17.3206" width="146.998" height="133.632" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="25"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.258824 0 0 0 0 0.509804 0 0 0 0 0.94902 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_41_14"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_41_14" result="shape"/>
                            </filter>
                            <filter id="filter2_d_41_14" x="60.0284" y="16.9252" width="147.181" height="134.02" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="25"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.760784 0 0 0 0 0.705882 0 0 0 0 0.0941176 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_41_14"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_41_14" result="shape"/>
                            </filter>
                            <filter id="filter3_d_41_14" x="60.1962" y="0.0214233" width="146.998" height="133.632" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="25"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.0588235 0 0 0 0 0.615686 0 0 0 0 0.345098 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_41_14"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_41_14" result="shape"/>
                            </filter>
                            </defs>
                        </svg>

                        <span className="logo-text">Google Developer Group ABESEC</span>
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