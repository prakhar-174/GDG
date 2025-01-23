import React, { useEffect } from 'react';
import './index.css';
import Navbar from './Navbar';
// import ParticlesBackground from './ParticlesBackground';
import HeroSection from './HeroSection';

function App() {
    useEffect(() => {
        const cursor = document.createElement('div');
        cursor.className = 'cursor';
        document.body.appendChild(cursor);

        const moveCursor = (e) => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.body.removeChild(cursor);
        };
    }, []);

    return (
        <div className="flex flex-col h-screen bg-gradient-to-br from-[#1f1b2e] via-[#2d1b3e] to-[#7aa2f7]">
            {/* <ParticlesBackground /> */}
            <Navbar />
            <HeroSection />
        </div>
    );
}

export default App;