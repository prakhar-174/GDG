import React from 'react';
import './index.css';
import Navbar from './Navbar';
// import ParticlesBackground from './ParticlesBackground';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import CommunityLeadersSection from './CommunityLeadersSection';
import Footer from './Footer';

// bg-gradient-to-br from-[#1f1b2e] via-[#2d1b3e] to-[#7aa2f7]
function App() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* <ParticlesBackground /> */}
            <Navbar />
            <HeroSection />
            <AboutSection />
            <CommunityLeadersSection />
            <Footer />
        </div>
    );
}

export default App;