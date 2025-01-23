import React from 'react';
import Particles from 'react-tsparticles';

const ParticlesBackground = () => {
    const particlesInit = (main) => {
        // You can initialize the tsParticles instance here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        // You can do something when the particles are loaded
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#0d0d0d",
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 100,
                            duration: 2,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff", 
                    },
                    links: {
                        color: "#ffffff", 
                        distance: 150,
                        enable: true,
                        opacity: 0.4,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 100, // Number of particles
                    },
                    opacity: {
                        value: 0.5,
                        random: false,
                        animation: {
                            enable: true,
                            speed: 1,
                            minimumValue: 0.1,
                            sync: false,
                        },
                    },
                    shape: {
                        type: "circle", // Shape of particles
                    },
                    size: {
                        value: 5,
                        random: {
                            enable: true,
                            minimumValue: 1,
                        },
                        animation: {
                            enable: true,
                            speed: 40,
                            minimumValue: 0.1,
                            sync: false,
                        },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesBackground; 