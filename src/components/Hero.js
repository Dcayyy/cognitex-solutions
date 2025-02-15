import React from 'react';
import '../styles/Hero.css'; // Optional: if you want separate hero styles
import backgroundVideo from '../assets/videos/landing-page-vide.mp4';

const Hero = ({ openChat }) => {
    return (
        <section id="hero" className="hero">
            <div className="content">
                <video autoPlay muted loop playsInline className="bg-video">
                    <source src={backgroundVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="overlay"></div>
                <div className="text-content">
                    <h1>Experience the Future of AI</h1>
                    <p>
                        Immerse yourself in advanced AI automation that transforms your business in real time.
                    </p>
                    <button className="cta-btn" onClick={openChat}>
                        Chat with Our AI
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
